import {
    Card
} from "@/components/ui/card";

export default function ProfileTitleCard({
    name,
    title,
    unit,
}: {
    name: string,
    title: string,
    unit: string,
}) {
    return (
        <Card className="bg-secondary grow p-6">
            <div className="text-5xl font-black">
                { name ?? "ProfileName" }
            </div>
            <div className="text-xl font-semibold">
                { title ?? "ProfileTitle" }, { unit ?? "ProfileUnit" }
            </div>
        </Card>
    );
}