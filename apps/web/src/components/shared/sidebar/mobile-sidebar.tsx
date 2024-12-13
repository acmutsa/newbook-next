import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { SidebarHeaderContent } from "./sidebar-header-content";
import { SidebarFooterContent } from "./sidebar-footer-content";
import { SidebarMainContent } from "./sidebar-content";

export function MobileSidebar() {
	return (
		<Sidebar side="right">
			<SidebarHeaderContent />
			<SidebarMainContent />
			<SidebarFooterContent />
		</Sidebar>
	);
}
