import {
	SidebarContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
} from "@/components/ui/sidebar";

export function SidebarMainContent() {
	return (
		<SidebarContent>
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton asChild></SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarContent>
	);
}
