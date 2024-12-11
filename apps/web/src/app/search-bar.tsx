"use client";
import { Search, Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { capitalizeWord } from "@/lib/utils";

export default function SearchBar() {
	const [searchValue, setSearchValue] = useState("");
	// come back and change this
	const [searchType,setSearchType] = useState("");
	const searchOptions = [' ','courses', 'instructors', 'advisors'];
	const router = useRouter();

	function triggerSearch() {
		const sv = searchValue.trim();
		if (sv.length > 0) {
			router.push(`/search?q=${encodeURIComponent(sv)}&searchType=${searchType}`);
		}
	}
	useEffect(()=>{
		console.log('searchType:',searchType);
	},[searchType])

	return (
		<div className="flex h-16 gap-x-2">
			<Select
				onValueChange={(v) => {
					setSearchType(v);
				}}
			>
				{/* Come back and fix how this looks on mobile */}
				<SelectTrigger className="h-full border border-utsa-blue bg-utsa-blue/15">
					<SelectValue
						placeholder="Filter By..."
						className="font-eb placeholder:italic "
					/>
					<Filter color="#0C2440" className="md:hidden" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{searchOptions.map((option) => (
							<SelectItem
								key={option}
								value={option}
								className="font-eb text-xl"
							>
								{capitalizeWord(option)}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
			<input
				onChange={(e) => setSearchValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") triggerSearch();
				}}
				className="h-full w-screen max-w-[210px] rounded-xl border border-utsa-blue bg-utsa-blue/15 px-5 font-noto text-xl font-semibold !text-utsa-blue text-black md:max-w-[500px]"
			></input>
			<button
				onClick={triggerSearch}
				className="flex aspect-square h-full items-center justify-center rounded-xl border border-utsa-blue bg-utsa-blue/15"
			>
				<Search color="#0C2440" />
			</button>
		</div>
	);
}
