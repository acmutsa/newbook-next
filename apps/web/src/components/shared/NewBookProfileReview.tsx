"use client";

import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription
} from "@/components/ui/card";
import ScoreIcon from "@/components/shared/NewBookScoreIcon";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { PropsWithChildren, useState } from "react";

type HelpfulValues = "helpful" | "not-helpful" | "";

// TODO: rename to StudentReview since the params will make sense that way? maybe set up a more generic base for this too
// TODO: ASK: should classOf be a Date object?
export default function ProfileReview({
    score,
    major,
    classOf,
    datePosted,
    helpfulInitState,
    children,
    onHelpfulToggle
}: PropsWithChildren<{
    score: number;
    major: string;
    classOf: number;
    datePosted: Date;
    helpfulInitState?: HelpfulValues;
    onHelpfulToggle?: (value: HelpfulValues) => void;
}>) {
    const [helpfulState, setHelpfulState] = useState<HelpfulValues>(helpfulInitState ?? "");

    function changeValue(value: string) {
        switch (value) {
            case "helpful":
            case "not-helpful":
                setHelpfulState(value);
                onHelpfulToggle?.(value);
                break;
            default:
                setHelpfulState("");
                onHelpfulToggle?.("");
        }
    }

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
                        {/* Add date in local "medium" formatting -- en_US => Nov 14, 2024 */}
                        { datePosted?.toLocaleDateString(undefined, { dateStyle: 'medium' }) ?? "datePosted" }
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                { children }
            </CardContent>
            <CardFooter className="text-sm space-x-2">
                <div>
                    Was this review helpful?
                </div>
                <ToggleGroup
                    type="single"
                    value={helpfulState}
                    onValueChange={(value) => changeValue(value)}
                >
                    <ToggleGroupItem value="helpful" aria-label="Toggle helpful">
                        <ThumbsUp />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="not-helpful" aria-label="Toggle not helpful">
                        <ThumbsDown />
                    </ToggleGroupItem>
                </ToggleGroup>
            </CardFooter>
        </Card>
    )
}