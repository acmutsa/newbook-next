import { MobileSidebarClient } from "./mobile-sidebar-client";
import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";
import { useSidebar } from "@/contexts/sidebar-context";
import { Children } from "react";

export function MobileSidebar() {
	return (
		<ShadcnSidebarProvider>
			<MobileSidebarClient>{<></>}</MobileSidebarClient>
		</ShadcnSidebarProvider>
	);
}
