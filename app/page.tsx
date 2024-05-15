import { Logo } from "@assets";
import { Button, Input, Tooltip } from "@nextui-org/react";
import { ArrowUp, GraduationCap, Lightbulb, PenLine, Terminal } from "lucide-react";

export default function Home() {
	return (
		<main className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-between gap-2 p-6">
			<div className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10">
				<Logo />
				<h1 className="text-center text-xl font-bold text-default-500 sm:text-2xl">How can I help you today?</h1>
				<div className="flex w-full flex-wrap items-center justify-center gap-2">
					<Button className="flex h-fit w-32 flex-col items-start whitespace-normal p-3 text-left text-sm md:w-40" size="lg" startContent={<Lightbulb className="shrink-0 text-secondary" />} variant="bordered">
						{`Recipe with what's in my kitchen`}
					</Button>
					<Button className="flex h-fit w-32 flex-col items-start whitespace-normal p-3 text-left text-sm md:w-40" size="lg" startContent={<Terminal className="shrink-0 text-danger" />} variant="bordered">
						{`Make a personal protfolio`}
					</Button>
					<Button className="flex h-fit w-32 flex-col items-start whitespace-normal p-3 text-left text-sm md:w-40" size="lg" startContent={<PenLine className="shrink-0 text-warning" />} variant="bordered">
						{`Create a workout plan for me`}
					</Button>
					<Button className="flex h-fit w-32 flex-col items-start whitespace-normal p-3 text-left text-sm md:w-40" size="lg" startContent={<GraduationCap className="shrink-0 text-success" />} variant="bordered">
						{`Explain nostalgia to a kindergartener`}
					</Button>
				</div>
			</div>
			<Input
				aria-label="chat"
				classNames={{ base: "max-w-3xl", inputWrapper: "py-2 h-fit" }}
				color="primary"
				endContent={
					<Tooltip content="Send Message" showArrow>
						<Button aria-label="send" isIconOnly size="sm" variant="flat">
							<ArrowUp />
						</Button>
					</Tooltip>
				}
				placeholder="Message Jarvis..."
				size="lg"
				variant="bordered"
			/>
			<span className="text-xs">Jarvis can make mistakes. Check important info.</span>
		</main>
	);
}
