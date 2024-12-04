import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarTrigger, SidebarProvider } from "../ui/sidebar";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

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
				<div className="flex items-center justify-end gap-x-4 md:hidden">
					<Button
						variant="ghost"
						size="icon"
						className="mr-2 md:hidden"
					>
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle Sidebar</span>
					</Button>
				</div>
				<div className="hidden items-center justify-end gap-x-4 font-eb text-lg font-semibold text-utsa-blue md:flex">
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
