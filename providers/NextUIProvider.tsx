"use client";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";

type ProviderProps = {
	children: ReactNode;
};

export default function Provider({ children }: ProviderProps) {
	const router = useRouter();
	return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
}
