import {
	SidebarFooter,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Home, Computer, Users, Cookie } from "lucide-react";

export function SidebarFooterContent() {
	return (
		<SidebarFooter>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a href="/">
							<Home className="mr-2 h-4 w-4" />
							Home
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a href="/about">
							<Users className="mr-2 h-4 w-4" />
							About
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a href="/guidelines">
							<Users className="mr-2 h-4 w-4" />
							Guidelines
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a href="/policy">
							<Cookie className="mr-2 h-4 w-4" />
							Policies
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton asChild>
						<a href={"https://acmutsa.org/"}>
							<Computer className="mr-2 h-4 w-4" />
							ACM
						</a>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarFooter>
	);
}
