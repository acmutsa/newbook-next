"use client";

// React imports
import { PropsWithChildren, useState } from "react";
// shadcn components
import {
	Card,
	CardHeader,
	CardContent,
	CardFooter,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
// Newbook components
import ScoreIcon from "@/components/shared/NewBookScoreIcon";
// Icons
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { PropsWithChildren } from "react";

// Possible "helpful" values
type HelpfulValues = "helpful" | "not-helpful" | "";

/**
 * A card with a student review, to be used on a person's profile. Elements (such as the review's text content) may be inserted as
 * child elements.
 * @param {number} score A numeric score.
 * @param {string} major The student's major.
 * @param {number} classOf The student's graduation year.
 * @param {Date} datePosted The date this review was posted, as a Date object.
 * @param {HelpfulValues} helpfulInitState The state of the "Was this review helpful?" toggle ("helpful", "not-helpful", or "").
 * @param onHelpfulToggle A callback function to react to selections on the "Was this review helpful?" toggle, in the format (value) => void,
 * with the value as either "helpful", "not-helpful", or "".
 * @returns A React profile review card component.
 */
export default function ProfileReview({
	score,
	major,
	classOf,
	datePosted,
	helpfulInitState,
	children,
	onHelpfulToggle,
}: PropsWithChildren<{
	score: number;
	major: string;
	classOf: number;
	datePosted: Date;
	helpfulInitState?: HelpfulValues;
	onHelpfulToggle?: (value: HelpfulValues) => void;
}>) {
	const [helpfulState, setHelpfulState] = useState<HelpfulValues>(
		helpfulInitState ?? "",
	);

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
					<div className="flex items-center space-x-3">
						<ScoreIcon score={score} />
						<div>
							<CardTitle>Student</CardTitle>
							<CardDescription>
								{major ?? "major"} | Class of{" "}
								{classOf ?? "classOf"}
							</CardDescription>
						</div>
					</div>
					<div>
						{/* Add date in local "medium" formatting -- en_US => Nov 14, 2024 */}
						{datePosted?.toLocaleDateString(undefined, {
							dateStyle: "medium",
						}) ?? "datePosted"}
					</div>
				</div>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter className="space-x-2 text-sm">
				<div>Was this review helpful?</div>
				<ToggleGroup
					type="single"
					value={helpfulState}
					onValueChange={(value) => changeValue(value)}
				>
					<ToggleGroupItem
						value="helpful"
						aria-label="Toggle helpful"
					>
						<ThumbsUp />
					</ToggleGroupItem>
					<ToggleGroupItem
						value="not-helpful"
						aria-label="Toggle not helpful"
					>
						<ThumbsDown />
					</ToggleGroupItem>
				</ToggleGroup>
			</CardFooter>
		</Card>
	);
}
