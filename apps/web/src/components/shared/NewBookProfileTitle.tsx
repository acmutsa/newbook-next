// shadcn components
import { Card } from "@/components/ui/card";

/**
    A title card with details relevant to a person's profile (name, title/position, and unit/department)
    @param {string} name The person's name.
    @param {string} title The person's job title / position.
    @param {string} unit The unit/department that the person belongs to.
    @returns A React title card component.
*/
export default function ProfileTitleCard({
	name,
	title,
	unit,
}: {
	name: string;
	title: string;
	unit: string;
}) {
	return (
		<Card className="grow bg-secondary p-6">
			<div className="text-3xl font-black sm:text-5xl">
				{name ?? "ProfileName"}
			</div>
			<div className="text-md font-semibold sm:text-xl">
				{title ?? "ProfileTitle"}, {unit ?? "ProfileUnit"}
			</div>
		</Card>
	);
}
