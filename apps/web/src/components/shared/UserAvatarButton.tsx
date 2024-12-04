import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { currentUser } from "@clerk/nextjs/server";
import { getUser } from "db";
import { Button } from "../ui/button";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";
export default async function UserAvatarButton() {
	const currUser = await currentUser();
	if (!currUser) {
		return (
			<div className="flex flex-row items-center gap-x-3">
				<Link href={"/sign-in"}>
					<Button className="bg-utsa-blue font-eb text-base font-semibold">
						Sign In
					</Button>
				</Link>
				<Link href={"/sign-up"}>
					<Button className="bg-utsa-blue font-eb text-base font-semibold">
						Sign Up
					</Button>
				</Link>
			</div>
		);
	}
	const user = await getUser(currUser.id);

	if (!user) {
		return (
			<div className="flex flex-row gap-x-3">
				<SignOutButton redirectUrl="/" />
				<Link href="/onboarding">
					<Button className="bg-utsa-blue font-eb text-base font-semibold">
						Complete Onboarding
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src={currUser.imageUrl} />
					<AvatarFallback>{`${user.firstname.at(0)}${user.lastname.charAt(0)}`}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
		</DropdownMenu>
	);
}
