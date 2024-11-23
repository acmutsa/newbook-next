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

type HelpfulValues = "helpful" | "not-helpful" | undefined;

// TODO: rename to StudentReview since the params will make sense that way? maybe set up a more generic base for this too
// TODO: ASK: should classOf be a Date object?
// TODO: add a callback function for when the up/down toggles are enabled/disabled
export default function ProfileReview({
    score,
    major,
    classOf,
    datePosted,
    children,
    onHelpfulToggle
}: PropsWithChildren<{
    score: number;
    major: string;
    classOf: number;
    datePosted: Date;
    onHelpfulToggle: (value: HelpfulValues) => void;
}>) {
    // TODO: update this state
    const [helpfulValue, setHelpfulValue] = useState<HelpfulValues>(undefined);

    function changeValue(value: string) {
        switch (value) {
            case "helpful":
            case "not-helpful":
                onHelpfulToggle(value);
                break;
            default:
                onHelpfulToggle(undefined);
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
                    value={helpfulValue}
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