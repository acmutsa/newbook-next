<<<<<<< HEAD
// React imports
import { PropsWithChildren } from "react";
// shadcn components
import { Card } from "@/components/ui/card";
// CLSX
import clsx from "clsx";
// Constants
import { PROFILE_MAX_CATEGORY_SCORE } from "@/lib/constants";

/**
 * A score dial card showing a percent score, computed using the given score (out of PROFILE_MAX_CATEGORY_SCORE in lib/constants.ts),
 * and colored to match the score. Other elements may be inserted into the card as children.
 * @param {number} score A numeric score.
 * @returns A React score dial card component.
 */
export default function ScoreDialCard({
	score,
	children,
}: PropsWithChildren<{
	score: number;
}>) {
	// Check if score is given, and if percent is in range, and hit corresponding min/max otherwise
	const scorePercent =
		score == undefined
			? NaN
			: score < 0
				? 0
				: score > PROFILE_MAX_CATEGORY_SCORE
					? PROFILE_MAX_CATEGORY_SCORE
					: score / PROFILE_MAX_CATEGORY_SCORE;
	const outerRadius = 5;
	const strokeFill = Math.PI * outerRadius;
	const strokeFillPercent = strokeFill * scorePercent;

	return (
		<Card className="flex flex-col items-center p-4">
			<svg
				className={clsx("rotate-180", {
					"stroke-score-0": scorePercent >= 0 && scorePercent < 0.2,
					"stroke-score-1": scorePercent >= 0.2 && scorePercent < 0.4,
					"stroke-score-2": scorePercent >= 0.4 && scorePercent < 0.6,
					"stroke-score-3": scorePercent >= 0.6 && scorePercent < 0.8,
					"stroke-score-4": scorePercent >= 0.8,
				})}
				height="6em"
				width="6em"
				viewBox="0 0 20 20"
			>
				<path
					fill="#ffffff"
					stroke="#ededed"
					stroke-width="3"
					d=" M 1.5 10
                        a 0.5 0.5 0 0 0 17 0"
				/>
				<circle
					r={outerRadius}
					fill-opacity="0"
					cx="10"
					cy="10"
					stroke-width="10"
					stroke-dasharray={`${strokeFillPercent ?? 0} ${strokeFill * 2}`}
				/>
				<path
					fill="#ffffff"
					stroke-width="0"
					d=" M 1.5 10
                        a 0.5 0.5 0 0 0 17 0"
				/>
			</svg>
			<div className="z-10 -mt-[4.25rem] flex flex-col items-center">
				<div className="-mt-1 text-xl font-bold">
					{scorePercent
						? (scorePercent * 100).toFixed() + "%"
						: "N/A"}
				</div>
				<div className="flex items-center gap-1">{children}</div>
			</div>
		</Card>
	);
}
=======
import clsx from "clsx";
import {
    Card,
    CardTitle,
    CardContent
} from "@/components/ui/card";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { RocketIcon } from "@radix-ui/react-icons";
import { createElement, PropsWithChildren } from "react";

const MAX_SCORE = 1;

export default function ScoreDial({
    score,
    children,
}: PropsWithChildren<{
    score: number;
}>) {
    const scorePercent = score / MAX_SCORE;
    const size = 100; // TODO: make this a prop
    const outerRadius = 5; // TODO: make this a prop? somehow
    const innerRadius = ( outerRadius * 2 ) - 2; // TODO: make this a prop
    const strokeFill = ( Math.PI * outerRadius );
    const strokeFillPercent = strokeFill * scorePercent;

    return (
        <Card className="flex flex-col items-center p-4">
            <svg className={clsx("rotate-180",
                    {
                        "stroke-score-0": ( scorePercent >= 0 ) && ( scorePercent < 0.2 ),
                        "stroke-score-1": ( scorePercent >= 0.2 ) && ( scorePercent < 0.4 ),
                        "stroke-score-2": ( scorePercent >= 0.4 ) && ( scorePercent < 0.6 ),
                        "stroke-score-3": ( scorePercent >= 0.6 ) && ( scorePercent < 0.8 ),
                        "stroke-score-4": ( scorePercent >= 0.8 ),
                    },
                )}
                height={size}
                width={size}
                viewBox="0 0 20 20"
            >
                <circle
                    r={outerRadius}
                    cx="10"
                    cy="10"
                    stroke-width="10"
                    stroke="#ededed"
                    stroke-dasharray={`${strokeFill} ${strokeFill * 2}`}
                />
                <circle
                    r={outerRadius}
                    cx="10"
                    cy="10"
                    stroke-width="10"
                    stroke-dasharray={`${strokeFillPercent} ${strokeFill * 2}`}
                />
                <circle r={innerRadius} cx="10" cy="10" fill="white" stroke-width="0" />
            </svg>
            <div className="flex flex-col items-center -mt-[4.25rem] z-10">
                <div className="font-bold text-xl">
                    {(scorePercent * 100).toFixed()}%
                </div>
                <div className="flex gap-1 items-center">
                    {children}
                </div>
            </div>
        </Card>
    )
}
>>>>>>> ecf4bf3 (Began work on score dial component; tweaked styling for score icon for user reviews)
