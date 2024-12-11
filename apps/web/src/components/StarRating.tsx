"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
	max?: number;
	onChange?: (rating: number) => void;
}

export function StarRating({ max = 5, onChange }: StarRatingProps) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	return (
		<div className="flex gap-1" onMouseLeave={() => setHover(rating)}>
			{[...Array(max)].map((_, index) => {
				const starValue = index + 1;
				return (
					<button
						type="button"
						key={index}
						className="relative text-2xl"
						onClick={(e) => {
							const rect =
								e.currentTarget.getBoundingClientRect();
							const halfStar =
								e.clientX - rect.left < rect.width / 2;
							const newRating = halfStar
								? starValue - 0.5
								: starValue;
							setRating(newRating);
							onChange?.(newRating);
						}}
						onMouseMove={(e) => {
							const rect =
								e.currentTarget.getBoundingClientRect();
							const halfStar =
								e.clientX - rect.left < rect.width / 2;
							setHover(halfStar ? starValue - 0.5 : starValue);
						}}
					>
						<Star
							className={`h-8 w-8 ${
								starValue <= (hover || rating)
									? "fill-utsa-blue text-utsa-blue"
									: starValue - 0.5 <= (hover || rating)
										? "fill-[url(#half-star)] text-utsa-blue"
										: "text-utsa-blue"
							}`}
						/>
						<svg width="0" height="0">
							<defs>
								<linearGradient id="half-star">
									<stop offset="50%" stopColor="#0C2340" />
									<stop
										offset="50%"
										stopColor="transparent"
									/>
								</linearGradient>
							</defs>
						</svg>
					</button>
				);
			})}
		</div>
	);
}
