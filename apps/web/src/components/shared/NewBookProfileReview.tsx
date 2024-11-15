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
// TODO: ASK: should classOf be a Date object?
// TODO: add a callback function for when the up/down toggles are enabled/disabled; also, see if we can change the icons
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
                        <ScoreIcon score={score} />
                        <div>
                            <CardTitle>Student</CardTitle>
                            <CardDescription>{ major ?? "major" } | Class of { classOf ?? "classOf" }</CardDescription>
                        </div>
                    </div>
                    <div>
                        {/* Add date in local "medium" formatting */}
                        { datePosted?.toLocaleDateString(undefined, { dateStyle: 'medium' }) ?? "datePosted" }
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