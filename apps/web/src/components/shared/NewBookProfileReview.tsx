import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import ScoreIcon from "@/components/shared/NewBookScoreIcon";
import { Toggle } from "@/components/ui/toggle";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";

// TODO: rename to StudentReview since the params will make sense that way? maybe set up a more generic base for this too
// Ask: should this be a Date object instead?
export default function ProfileReview({
    score,
    major,
    classOf,
    datePosted,
    content
}: {
    score: number;
    major: string;
    classOf: number;
    datePosted: Date;
    content: string;
}) {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between">
                    <div className="flex space-x-3 items-center">
                        <ScoreIcon score={4.3} />
                        <div>
                            <CardTitle>Student</CardTitle>
                            <CardDescription>{ major ?? "major" } | Class of { classOf ?? "classOf" }</CardDescription>
                        </div>
                    </div>
                    <div>
                        { datePosted?.toLocaleDateString() ?? "datePosted" }
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                { content ?? "content" }
            </CardContent>
            <CardFooter className="text-sm space-x-2">
                <div>
                    Was this review helpful?
                </div>
                <Toggle>
                    <TriangleUpIcon />
                </Toggle>
                <Toggle>
                    <TriangleDownIcon />
                </Toggle>
            </CardFooter>
        </Card>
    )
}