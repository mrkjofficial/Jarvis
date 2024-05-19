"use client";
import { Logo } from "@assets";
import DOMPurify from "dompurify";
import { Message } from "ai/react";
import markdownit from "markdown-it";
import { Copy, Pencil } from "lucide-react";
import { Avatar, Button, Card, CardBody, Tooltip } from "@nextui-org/react";

type ChatMessageProps = {
	message: Message;
};

export default function ChatMessage({ message }: ChatMessageProps) {
	const md = markdownit();
	const messageContent = md.render(message?.content);
	const sanitizedMessageContent = DOMPurify.sanitize(messageContent);

	return (
		<div className={`flex w-fit gap-2 ${message?.role === "assistant" ? "flex-row self-start" : "flex-row-reverse self-end"}`}>
			{message?.role === "assistant" ? <Logo className="h-8 w-8 shrink-0 my-2 md:h-10 md:w-10" /> : <Avatar classNames={{ base: "h-8 w-8 shrink-0 my-2 md:h-10 md:w-10" }} name="KJ" />}
			<Card className="w-full max-w-fit">
				<CardBody dangerouslySetInnerHTML={{ __html: sanitizedMessageContent }}></CardBody>
			</Card>
			{message?.role === "assistant" ? (
				<Tooltip content="Copy" showArrow>
					<Button aria-label="copy" className="my-2 self-end" isIconOnly radius="full" size="sm" variant="light">
						<Copy size={16} />
					</Button>
				</Tooltip>
			) : (
				<Tooltip content="Edit" showArrow>
					<Button aria-label="edit" className="my-2 self-end" isIconOnly radius="full" size="sm" variant="light">
						<Pencil size={16} />
					</Button>
				</Tooltip>
			)}
		</div>
	);
}
