import Image from "next/image";
import { Search } from "lucide-react";
import SearchBar from "./search-bar";
export default function Home() {
	return (
		<div className="mx-auto flex w-screen flex-col items-center justify-center">
			<div className="flex flex-col items-center justify-center">
				<h1 className="font-eb text-7xl font-black text-utsa-blue md:text-8xl">
					NewBook
				</h1>
				<h2 className="pb-8 pt-3 font-eb font-bold text-utsa-blue md:pb-20 md:text-xl">
					What can we help you find today?
				</h2>
				<SearchBar />
			</div>
		</div>
	);
}