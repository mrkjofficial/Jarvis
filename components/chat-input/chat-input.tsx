"use client";
import { ArrowUp } from "lucide-react";
import { ChatRequestOptions } from "ai";
import React, { ChangeEvent, FormEvent } from "react";
import { Button, Textarea, Tooltip } from "@nextui-org/react";

type ChatInputProps = {
	onChange?: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
	onSubmit?: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
	value?: string;
};

export default function ChatInput({ onChange, onSubmit, value }: ChatInputProps) {
    return (
		<form className="flex w-full flex-col items-center gap-2" onSubmit={onSubmit}>
			<Textarea
				aria-label="chat"
				classNames={{ base: "max-w-3xl", inputWrapper: "py-2 h-fit", innerWrapper: "items-end", input: "self-center" }}
				endContent={
					<Tooltip content="Send Message" showArrow>
						<Button aria-label="send" isIconOnly size="sm" type="submit" variant="flat">
							<ArrowUp size={16} />
						</Button>
					</Tooltip>
				}
				maxRows={5}
				minRows={1}
				onChange={onChange}
				placeholder="Message Jarvis"
				size="lg"
				value={value}
				variant="bordered"
			/>
			<span className="text-xs">Jarvis can make mistakes. Check important info.</span>
		</form>
	);
}
