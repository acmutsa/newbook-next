import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

export function AppSidebar() {
	return (
		<Sidebar side="right" variant="floating" className="md:hidden">
			<SidebarContent />
		</Sidebar>
	);
}
