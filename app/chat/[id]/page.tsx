"use client";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { ChatInput, ChatMessage } from "@components";

type ChatProps = {
	params: {
		id: string;
	};
};

export default function ChatPage({ params }: ChatProps) {
	const { messages, input, handleInputChange, handleSubmit } = useChat();
	const chatSection = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const domNode = chatSection.current;
		if (domNode) {
			domNode.scrollTop = domNode.scrollHeight;
		}
	});
	console.log(params.id);
	return (
		<main className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-between gap-2 p-6">
			<ScrollShadow className="flex h-[calc(100vh-7rem)] w-full max-w-3xl flex-col gap-3" ref={chatSection}>
				{messages?.map(message => <ChatMessage key={message?.id} message={message} />)}
			</ScrollShadow>
			<ChatInput onChange={handleInputChange} onSubmit={handleSubmit} value={input} />
		</main>
	);
}
