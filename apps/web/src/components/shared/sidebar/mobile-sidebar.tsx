import { MobileSidebarClient } from "./mobile-sidebar-client";
import { SidebarProvider as ShadcnSidebarProvider } from "@/components/ui/sidebar";
import { SidebarHeaderContent } from "./sidebar-header-content";
import { SidebarMainContent } from "./sidebar-content";
import { SidebarFooterContent } from "./sidebar-footer-content";

export function MobileSidebar() {
	const headerContent = <SidebarHeaderContent />;
	const mainContent = <SidebarMainContent />;
	const footerContent = <SidebarFooterContent />;

	return (
		<ShadcnSidebarProvider>
			<MobileSidebarClient
				header={headerContent}
				content={mainContent}
				footer={footerContent}
			/>
		</ShadcnSidebarProvider>
	);
}
