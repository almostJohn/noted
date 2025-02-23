import * as React from "react";
import type { Metadata } from "next";
import { Notepad } from "~/components/notepad/notepad";

export const metadata: Metadata = {
	title: "Notepad",
};

export default function NotepadPage() {
	return (
		<>
			<Notepad />
		</>
	);
}
