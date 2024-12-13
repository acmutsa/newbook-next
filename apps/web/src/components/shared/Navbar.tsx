import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { Suspense } from "react";
import UserAvatarButton from "./UserAvatarButton";
import { SidebarTrigger } from "../ui/sidebar";

export default function Navbar() {
	return (
		<nav className="fixed top-0 h-20 w-screen bg-offwhite">
			<div className="mx-auto grid h-full w-full max-w-7xl grid-cols-2 px-5">
				<div className="flex items-center gap-x-2">
					<Link href={"/"}>
						<h1 className="font-eb text-xl font-bold text-utsa-blue">
							NewBook
						</h1>
					</Link>
					<span className="rounded-sm border-2 border-utsa-blue px-1 text-[0.5rem] font-semibold">
						ALPHA
					</span>
				</div>
				<div className="flex items-center justify-end gap-x-4 md:hidden">
					<SidebarTrigger />
				</div>
				<div className="hidden items-center justify-end gap-x-4 font-eb text-lg font-semibold text-utsa-blue md:flex">
					<Link href={"https://acmutsa.org/"}>ACM</Link>
					<Link href={"/about"}>About Us</Link>
					<Link href={"/policy"}>Policies</Link>
					<Suspense fallback={<Skeleton className="h-10 w-10" />}>
						<UserAvatarButton />
					</Suspense>
				</div>
			</div>
		</nav>
	);
}
