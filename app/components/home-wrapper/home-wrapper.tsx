"use client";
import { ChatInput, Home } from "@components";
import styles from "./home-wrapper.module.css";

export default function HomeWrapper() {
	return (
		<section className={styles["container"]}>
			<Home />
			<ChatInput />
		</section>
	);
}
