import { HomeWrapper } from "./components";

export default function HomePage() {
	return (
		<main className="flex h-[calc(100vh-4rem)] w-full flex-col items-center justify-between gap-2 p-6">
			<HomeWrapper />
		</main>
	);
}
