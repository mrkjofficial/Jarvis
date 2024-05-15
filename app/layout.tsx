import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppProvider from "@providers/AppProvider";
import NextUIProvider from "@providers/NextUIProvider";
import NextThemesProvider from "@providers/NextThemesProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Jarvis",
	description: "Your personal assistant.",
};

type LayoutProps = {
	children: ReactNode;
};

export default function RootLayout({ children }: Readonly<LayoutProps>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextUIProvider>
					<NextThemesProvider attribute="class" enableSystem>
						<AppProvider>{children}</AppProvider>
					</NextThemesProvider>
				</NextUIProvider>
			</body>
		</html>
	);
}
