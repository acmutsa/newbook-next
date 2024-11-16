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