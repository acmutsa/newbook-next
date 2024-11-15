import {
    Card
} from "@/components/ui/card";

// TODO: merge this with the other Card function components, don't just use it as a container
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