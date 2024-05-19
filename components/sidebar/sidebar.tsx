"use client";
import { Logo } from "@assets";
import NextLink from "next/link";
import { menuItems } from "@data";
import styles from "./sidebar.module.css";
import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { ChevronsUpDown, LogOut, MessageSquare, Settings, SquarePen, Trash2, X } from "lucide-react";
import { Avatar, Button, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, Link, Listbox, ListboxItem, ScrollShadow, Tooltip } from "@nextui-org/react";

type SidebarProps = {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SidebarComponent({ open, setOpen }: SidebarProps) {
	const backdropRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => backdropRef?.current?.contains(event.target as Node) && setOpen(false);
		document.addEventListener("click", handleClick);
		return () => document.removeEventListener("click", handleClick);
	}, [setOpen]);

	return (
		<>
			<div className={`${styles["backdrop"]} ${open ? " block opacity-100" : "hidden opacity-0"}`} ref={backdropRef} />
			<aside className={`${styles["container"]} ${open ? "translate-x-0" : "-translate-x-full"}`}>
				<Button className={styles["close-btn"]} color="default" isIconOnly onClick={() => setOpen(false)} size="sm" variant="light">
					<X size={16} />
				</Button>
				<Button className={styles["new-chat-btn"]} color="default" endContent={<SquarePen size={20} />} size="lg" startContent={<Logo />} variant="light">
					New Chat
				</Button>
				<ScrollShadow className={styles["scroll-shadow"]} hideScrollBar>
					<Listbox aria-label="chats">
						{menuItems?.map(item => (
							<ListboxItem
								aria-label={item}
								endContent={
									<Tooltip content="Delete Chat" showArrow>
										<Button aria-label="delete" isIconOnly size="sm" variant="light">
											<Trash2 size={20} />
										</Button>
									</Tooltip>
								}
								key={item}
								startContent={<MessageSquare size={20} />}
								textValue={item}
							>
								<Link as={NextLink} className={styles["link"]} color="foreground" href="#">
									{item}
								</Link>
							</ListboxItem>
						))}
					</Listbox>
				</ScrollShadow>
				<Dropdown>
					<DropdownTrigger>
						<Button className={styles["user-btn"]} endContent={<ChevronsUpDown size={20} />} size="lg" startContent={<Avatar name="KJ" />} variant="light">
							<span className={styles["user"]}>
								<p className={styles["name"]}>Karan Jaiswal</p>
								<p className={styles["email"]}>karanjaiswal0000@gmail.com</p>
							</span>
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="user-menu" color="default" variant="solid">
						<DropdownSection showDivider>
							<DropdownItem isReadOnly>karanjaiswal0000@gmail.com</DropdownItem>
						</DropdownSection>
						<DropdownSection>
							<DropdownItem startContent={<Settings size={20} />}>Settings</DropdownItem>
							<DropdownItem className={styles["logout"]} color="danger" startContent={<LogOut size={20} />}>
								Logout
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			</aside>
		</>
	);
}
