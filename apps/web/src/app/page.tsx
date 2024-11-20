import Image from "next/image";
import { Search } from "lucide-react";
import SearchBar from "./search-bar";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-offwhite">
			<div className="flex flex-col items-center justify-center">
				<h1 className="font-eb text-8xl font-black text-utsa-blue">
					NewBook
				</h1>
				<h2 className="pb-20 pt-3 font-eb text-xl font-bold text-utsa-blue">
					What can we help you find today?
				</h2>
				<SearchBar />
			</div>
		</main>
	);
}