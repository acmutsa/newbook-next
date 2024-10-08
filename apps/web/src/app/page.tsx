import Image from "next/image";
import { Search } from "lucide-react";

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
				<div className="flex h-16 gap-x-2">
					<input className="h-full w-screen max-w-[500px] rounded-xl border border-utsa-blue bg-utsa-blue/15 px-5 font-noto text-xl font-semibold !text-utsa-blue text-black"></input>
					<button className="flex aspect-square h-full items-center justify-center rounded-xl border border-utsa-blue bg-utsa-blue/15">
						<Search color="#0C2440" />
					</button>
				</div>
			</div>
		</main>
	);
}
