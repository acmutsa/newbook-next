import {
	SidebarHeader,
	SidebarMenu,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import UserAvatarButton from "../UserAvatarButton";

export function SidebarHeaderContent() {
	return (
		<SidebarHeader>
			<SidebarMenu>
				<SidebarMenuItem className="grid justify-items-center pt-5">
					<Suspense fallback={<Skeleton className="h-10 w-10" />}>
						<UserAvatarButton />
					</Suspense>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarHeader>
	);
}
