"use client";

import { Sidebar } from "@/components/ui/sidebar";
import { useSidebar } from "@/contexts/sidebar-context";

type MobileSidebarClientProps = {
	header: React.ReactNode;
	content: React.ReactNode;
	footer: React.ReactNode;
};

export function MobileSidebarClient({
	header,
	content,
	footer,
}: MobileSidebarClientProps) {
	const { isOpen, toggle } = useSidebar();

	return (
		<Sidebar
			side="right"
			open={isOpen}
			onOpenChange={toggle}
			className="fixed bottom-0 left-0 top-[57px] z-40 w-64 md:hidden"
		>
			{header}
			{content}
			{footer}
		</Sidebar>
	);
}
