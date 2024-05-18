"use client";
import { Logo } from "@assets";
import NextLink from "next/link";
import { menuItems } from "@data";
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
			<div className={`fixed inset-0 z-50 h-screen w-screen bg-overlay/30 backdrop-blur-md backdrop-saturate-150 transition-opacity sm:hidden sm:opacity-0 ${open ? " block opacity-100" : "hidden opacity-0"}`} ref={backdropRef} />
			<aside
				className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-1 flex-col justify-between border-r-small border-divider bg-background p-6 transition-transform sm:sticky sm:translate-x-0  ${open ? "translate-x-0" : "-translate-x-full"}`}
			>
				<Button className="absolute right-1 top-1 flex sm:hidden" color="default" isIconOnly onClick={() => setOpen(false)} size="sm" variant="light">
					<X size={16} />
				</Button>

				<Button className="mt-3 w-full justify-between p-3" color="default" endContent={<SquarePen size={20} />} size="lg" startContent={<Logo />} variant="light">
					New Chat
				</Button>
				<ScrollShadow className="h-[calc(100vh-14rem)] w-full" hideScrollBar>
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
								<Link as={NextLink} className="w-full truncate text-ellipsis" color="foreground" href="#">
									{item}
								</Link>
							</ListboxItem>
						))}
					</Listbox>
				</ScrollShadow>
				<Dropdown>
					<DropdownTrigger>
						<Button variant="light" startContent={<Avatar name="KJ" />} endContent={<ChevronsUpDown size={20} />} className="p-3" size="lg">
							<span className="w-32 text-left">
								<p className="text-xs">Karan Jaiswal</p>
								<p className="truncate text-ellipsis text-xs">karanjaiswal0000@gmail.com</p>
							</span>
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="user-menu" color="default" variant="solid">
						<DropdownSection showDivider>
							<DropdownItem isReadOnly>karanjaiswal0000@gmail.com</DropdownItem>
						</DropdownSection>
						<DropdownSection>
							<DropdownItem startContent={<Settings size={20} />}>Settings</DropdownItem>
							<DropdownItem className="text-danger" color="danger" startContent={<LogOut size={20} />}>
								Logout
							</DropdownItem>
						</DropdownSection>
					</DropdownMenu>
				</Dropdown>
			</aside>
		</>
	);
}
