"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button, Tooltip } from "@nextui-org/react";

export default function useThemeToggle() {
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
	}

	return (
		<Tooltip color="default" content={theme === "light" ? "Dark Mode" : "Light Mode"} placement="bottom">
			<Button aria-label="Toggle Theme" color="default" isIconOnly onPress={toggleTheme} variant="light">
				{theme === "light" ? <Moon /> : <Sun />}
			</Button>
		</Tooltip>
	);
}
