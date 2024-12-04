import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { Suspense } from "react";
import UserAvatarButton from "./UserAvatarButton";
export default function Navbar() {
	return (
		<nav className="fixed top-0 h-20 w-screen">
			<div className="mx-auto grid h-full w-full max-w-7xl grid-cols-2 px-5">
				<div className="flex items-center">
					<Link href={"/"}>
						<h1 className="font-eb text-xl font-bold text-utsa-blue">
							NewBook
						</h1>
					</Link>
				</div>
				<div className="flex items-center justify-end gap-x-4 font-eb text-lg font-semibold text-utsa-blue">
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
