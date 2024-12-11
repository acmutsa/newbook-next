"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contexts/sidebar-context";

export function SidebarTrigger() {
	const { toggle } = useSidebar();

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggle}
			className="mr-2 md:hidden"
		>
			<Menu className="h-6 w-6" />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
}
