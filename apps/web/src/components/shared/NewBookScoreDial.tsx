import { PropsWithChildren } from "react";
import { Card } from "@/components/ui/card";
import { PROFILE_MAX_CATEGORY_SCORE } from "@/lib/constants";

export default function ScoreDialCard({
	score,
	children,
	className,
}: PropsWithChildren<{
	score: number;
	className?: string;
}>) {
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
		<div
			className={`flex aspect-square w-full flex-col items-center p-4 ${className}`}
		>
			<svg
				className="rotate-180"
				height="6em"
				width="6em"
				viewBox="0 0 20 20"
			>
				<path
					fill="#ffffff"
					stroke="#7A95B3"
					strokeWidth="3"
					d=" M 1.5 10
						a 0.5 0.5 0 0 0 17 0"
				/>
				<circle
					r={outerRadius}
					fillOpacity="0"
					cx="10"
					cy="10"
					strokeWidth="10"
					stroke="#0C2440"
					strokeDasharray={`${strokeFillPercent ?? 0} ${strokeFill * 2}`}
				/>
				<path
					fill="#EBE7DD"
					strokeWidth="0"
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
		</div>
	);
}
