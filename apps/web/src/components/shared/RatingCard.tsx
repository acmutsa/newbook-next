import { Star } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

type RatingCardProps = {
    id: string;
};

export default function RatingCard({ id }: RatingCardProps) {
    return (
        <Card className="min-w-[32ch] max-w-[64ch] hover:shadow-xl transition-shadow duration-200">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <Link href={`/myratings/${id}`}><CardTitle>Course Title</CardTitle></Link>
                    <span className="inline-flex items-center text-amber-500" aria-hidden="true">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <Star key={index} size={16} />
                        ))}
                    </span>
                </div>
            </CardHeader>
            <CardContent>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </CardContent>
            <CardFooter>
                <div className="w-full flex items-center justify-between">
                    <Link href={`/myratings/${id}/edit`}><Button variant="outline">Edit</Button></Link>
                    <p className="text-sm text-gray-500 italic">11/11/11</p>
                </div>

            </CardFooter>
        </Card>
    );
}