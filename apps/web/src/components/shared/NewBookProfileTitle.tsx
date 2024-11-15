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
        <Card>
            <div className="flex flex-col grow place-content-center bg-secondary rounded-lg p-6">
                <div className="text-6xl font-black">
                    { name ?? "ProfileName" }
                </div>
                <div className="text-xl font-semibold">
                    { title ?? "ProfileTitle" }, { unit ?? "ProfileUnit" }
                </div>
            </div>
        </Card>
    );
}