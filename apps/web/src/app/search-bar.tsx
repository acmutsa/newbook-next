"use client";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
	const [searchValue, setSearchValue] = useState("");
	const [isLoading, setLoading] = useState(false);

	const router = useRouter();

	useEffect (() => {
		// console.log("Am I loading? " + isLoading);
	}, [isLoading] );

	// function wait(ms: number) {
	// 	return new Promise(resolve=>setTimeout(resolve,ms));
	// }

	async function triggerSearch() {
		const sv = searchValue.trim();
		if (sv.length > 0) {
			setLoading(true);
			await router.push(`/search?q=${encodeURIComponent(sv)}`);
			// await wait(5000);
			setLoading(false);
		}
	}

	return (

		<div>

			{isLoading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="loader"></div>
                </div>
            )}

			<div className="flex h-16 gap-x-2">
				<input
					onChange={(e) => setSearchValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") triggerSearch();
					}}
					disabled={isLoading}
					className="h-full w-screen max-w-[500px] rounded-xl border border-utsa-blue bg-utsa-blue/15 px-5 font-noto text-xl font-semibold !text-utsa-blue text-black"
				></input>
				<button
					onClick={triggerSearch}
					className="flex aspect-square h-full items-center justify-center rounded-xl border border-utsa-blue bg-utsa-blue/15"
				>
					<Search color="#0C2440" />
				</button>
			</div>
		</div>
		
		
	);
}
