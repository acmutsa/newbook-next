import Image from "next/image";
import { Search } from "lucide-react";
import SearchBar from "./search-bar";
export default function Home() {
	return (
		<main className="mx-auto flex w-screen max-w-7xl flex-col items-center justify-center bg-offwhite">
			<div className="flex flex-col items-center justify-center">
				<h1 className="font-eb text-7xl font-black text-utsa-blue md:text-8xl">
					NewBook
				</h1>
				<h2 className="pb-20 pt-3 font-eb font-bold text-utsa-blue md:text-xl">
					What can we help you find today?
				</h2>
				<SearchBar />
			</div>
		</main>
	);
}
