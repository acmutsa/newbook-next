"use client";

import { Sidebar } from "@/components/ui/sidebar";
import { useSidebar } from "@/contexts/sidebar-context";
import { ReactNode } from "react";

export function MobileSidebarClient({ children }: { children: ReactNode }) {
	const { isOpen, toggle } = useSidebar();

	return (
		<Sidebar
			side="right"
			open={isOpen}
			onOpenChange={toggle}
			className="fixed bottom-0 left-0 top-[57px] z-40 w-64 md:hidden"
		>
			{children}
		</Sidebar>
	);
}
