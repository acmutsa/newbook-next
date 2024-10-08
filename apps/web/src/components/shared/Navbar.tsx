import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="fixed top-0 h-20 w-screen">
			<div className="mx-auto grid h-full w-full max-w-7xl grid-cols-2 px-5">
				<div className="flex items-center">
					<h1 className="font-eb text-utsa-blue text-xl font-bold">
						NewBook
					</h1>
				</div>
				<div className="text-utsa-blue font-eb flex items-center justify-end gap-x-4 text-lg font-semibold">
					<Link href={"https://acmutsa.org/"}>ACM</Link>
					<Link href={"/about"}>About Us</Link>
					<Link href={"/policy"}>Policies</Link>
					<Avatar className="ml-3">
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
			</div>
		</nav>
	);
}
