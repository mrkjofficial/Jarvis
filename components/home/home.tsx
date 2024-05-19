"use client";
import { Logo } from "@assets";
import styles from "./home.module.css";
import { Button } from "@nextui-org/react";
import { GraduationCap, Lightbulb, PenLine, Terminal } from "lucide-react";

export default function Home() {
	return (
		<section className={styles["container"]}>
			<Logo className={styles["logo"]} />
			<h1 className={styles["greetings"]}>How can I help you today?</h1>
			<div className={styles["cta-container"]}>
				<Button className={styles["cta"]} size="lg" startContent={<Lightbulb className={styles["light-bulb"]} />} variant="bordered">
					{`Recipe with what's in my kitchen`}
				</Button>
				<Button className={styles["cta"]} size="lg" startContent={<Terminal className={styles["terminal"]} />} variant="bordered">
					{`Make a personal protfolio`}
				</Button>
				<Button className={styles["cta"]} size="lg" startContent={<PenLine className={styles["pen-line"]} />} variant="bordered">
					{`Create a workout plan for me`}
				</Button>
				<Button className={styles["cta"]} size="lg" startContent={<GraduationCap className={styles["graduation-cap"]} />} variant="bordered">
					{`Explain nostalgia to a kindergartener`}
				</Button>
			</div>
		</section>
	);
}
