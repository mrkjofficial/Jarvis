"use client";
import { ReactNode, useState } from "react";
import { Navbar, Sidebar } from "@components";

type ProviderProps = {
	children: ReactNode;
};

export default function Provider({ children }: ProviderProps) {
	const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
	return (
		<main className="relative flex max-h-screen w-full items-center justify-center">
			<Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
			<section className="flex w-full flex-col items-center justify-center">
				<Navbar open={sidebarOpen} setOpen={setSidebarOpen} />
				{children}
			</section>
		</main>
	);
}
