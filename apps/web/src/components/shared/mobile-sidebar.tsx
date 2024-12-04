"use client";

import { Home, Settings, HelpCircle } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarProvider as ShadcnSidebarProvider,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/contexts/sidebar-context";

export function MobileSidebar() {
	const { isOpen, toggle } = useSidebar();

	return (
		<ShadcnSidebarProvider>
			<Sidebar
				open={isOpen}
				onOpenChange={toggle}
				className="fixed bottom-0 left-0 top-[57px] z-40 w-64 md:hidden"
			>
				<SidebarContent>
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
								<a href="/settings">
									<Settings className="mr-2 h-4 w-4" />
									Settings
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton asChild>
								<a href="/help">
									<HelpCircle className="mr-2 h-4 w-4" />
									Help
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarContent>
			</Sidebar>
		</ShadcnSidebarProvider>
	);
}
