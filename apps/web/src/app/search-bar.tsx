"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();

	function triggerSearch() {
		const sv = searchValue.trim();
		if (sv.length > 0) {
			router.push(`/search?q=${encodeURIComponent(sv)}`);
		}
	}

	return (
		<div className="flex h-16 gap-x-2">
			<input
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") triggerSearch();
				}}
				className="bg-utsa-blue/15 h-full w-screen max-w-[500px] rounded-xl border border-utsa-blue px-5 font-noto text-xl font-semibold !text-utsa-blue text-black"
			></input>
			<button
				onClick={triggerSearch}
				className="bg-utsa-blue/15 flex aspect-square h-full items-center justify-center rounded-xl border border-utsa-blue"
			>
				<Search color="#0C2440" />
			</button>
		</div>
	);
}
