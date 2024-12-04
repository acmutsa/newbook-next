"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Computer, Users } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarProvider as ShadcnSidebarProvider,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/contexts/sidebar-context";

export function MobileSidebar() {
	const { isOpen, toggle } = useSidebar();

	return (
		<ShadcnSidebarProvider>
			<Sidebar
				side="right"
				open={isOpen}
				onOpenChange={toggle}
				className="fixed bottom-0 left-0 top-[57px] z-40 w-64 md:hidden"
			>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<Avatar className="ml-3">
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
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
								<a href={"https://acmutsa.org/"}>
									<Computer className="mr-2 h-4 w-4" />
									ACM
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarFooter>
			</Sidebar>
		</ShadcnSidebarProvider>
	);
}
