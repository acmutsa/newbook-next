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
import clsx from "clsx";

export default function SearchBar() {
	const [searchValue, setSearchValue] = useState("");
	const [isLoading, setLoading] = useState(false);

	// come back and change this
	const [searchType, setSearchType] = useState("");
	const searchOptions = ["courses", "instructors", "advisors"];
	const router = useRouter();

	function triggerSearch() {
		const sv = searchValue.trim();
		if (sv.length > 0) {
			setLoading(true);
			router.push(
				`/search?q=${encodeURIComponent(sv)}&searchType=${searchType}`,
			);
		}
	}
	const dummyPlaceHolder = "_null";
	return (
		<div className="flex h-16 gap-x-2">
			{isLoading && (
				<div className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-5 bg-black bg-opacity-20">
					<div className="flex animate-bounce items-center justify-center text-5xl">
						🐸
					</div>
					<h1>Working...</h1>
				</div>
			)}
			<Select
				onValueChange={(v) => {
					setSearchType(v === dummyPlaceHolder ? "" : v);
				}}
				value={searchType}
			>
				{/* Come back and fix how this looks on mobile */}
				<SelectTrigger className="h-full rounded-xl border border-utsa-blue bg-utsa-blue/15">
					<div className="hidden md:flex">
						<SelectValue
							className="font-eb"
							placeholder="Filter by..."
						/>
					</div>
					<Filter
						color="#0C2440"
						className={clsx(`md:hidden`, {
							"fill-[#0C2440]": searchType,
						})}
					/>
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem
							value={dummyPlaceHolder}
							className="font-eb text-xl text-transparent hover:text-transparent focus:text-transparent"
						>
							{dummyPlaceHolder}
						</SelectItem>
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
