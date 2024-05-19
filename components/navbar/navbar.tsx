"use client";
import { Menu } from "lucide-react";
import styles from "./navbar.module.css";
import useThemeToggle from "@hooks/useThemeToggle";
import React, { Dispatch, SetStateAction } from "react";
import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

type NavbarbarProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function NavbarComponent({ open, setOpen }: NavbarbarProps) {
	const ThemeToggle = useThemeToggle();
	return (
		<Navbar maxWidth="full">
			<NavbarContent className={styles["navbar-content"]} justify="start">
				<Button aria-label={open ? "Close menu" : "Open menu"} isIconOnly onClick={() => setOpen(!open)} size="sm" variant="light">
					<Menu />
				</Button>
			</NavbarContent>
			<NavbarContent justify="center">
				<NavbarBrand>
					<h1 className={styles["brand-title"]}>JARVIS</h1>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent justify="end">{ThemeToggle}</NavbarContent>
		</Navbar>
	);
}
