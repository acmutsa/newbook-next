"use client";

import { StarRating } from "@/components/StarRating";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useAction } from "next-safe-action/hooks";
import { createAdvisorReview } from "@/app/actions/advisor";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdvisorReviewForm({ advisorId }: { advisorId: number }) {
	const { executeAsync } = useAction(createAdvisorReview);
	const router = useRouter();

	const [content, setContent] = useState("");
	const [rating, setRating] = useState<number | null>(null);
	const [responsiveRating, setResponsiveRating] = useState<number | null>(
		null,
	);
	const [accuracyRating, setAccuracyRating] = useState<number | null>(null);
	const [approachableRating, setApproachableRating] = useState<number | null>(
		null,
	);
	const [helpfulRating, setHelpfulRating] = useState<number | null>(null);

	async function handleSubmit() {
		if (
			!rating ||
			!responsiveRating ||
			!accuracyRating ||
			!approachableRating ||
			!helpfulRating ||
			!content
		) {
			toast.error("Please fill out all fields");
			return;
		}

		const result = executeAsync({
			advisorId: advisorId,
			overall_rating: rating,
			responsive_rating: responsiveRating,
			accuracy_rating: accuracyRating,
			approachable_rating: approachableRating,
			helpful_rating: helpfulRating,
			content: content,
		});

		toast.promise(result, {
			loading: "Creating review...",
			success: (data) => {
				router.push(`/advisor/${advisorId}`);
				return "Review created successfully!";
			},
			error: (error) => {
				console.log(error);
				return "An error occurred. Please try again.";
			},
		});
	}

	return (
		<>
			<div className="mb-8">
				<p className="mb-2 font-eb text-lg">
					How would you rate the advisor's responsiveness?
				</p>
				<StarRating max={5} onChange={setResponsiveRating} />
			</div>
			<div className="mb-8">
				<p className="mb-2 font-eb text-lg">
					How would you rate the advisor's accuracy of information?
				</p>
				<StarRating max={5} onChange={setAccuracyRating} />
			</div>
			<div className="mb-8">
				<p className="mb-2 font-eb text-lg">
					How would you rate the advisor's approachability?
				</p>
				<StarRating max={5} onChange={setApproachableRating} />
			</div>
			<div className="mb-8">
				<p className="mb-2 font-eb text-lg">
					How would you rate the advisor's helpfulness?
				</p>
				<StarRating max={5} onChange={setHelpfulRating} />
			</div>
			<div className="mb-8">
				<p className="mb-2 font-eb text-lg">Overall Rating</p>
				<StarRating max={5} onChange={setRating} />
			</div>
			<p className="pb-4 font-eb text-lg">
				What should other students know?{" "}
				<span className="font-semibold">
					Please remember to follow our{" "}
					<Link
						target="_blank"
						href="/guidelines"
						className="underline"
					>
						guidelines
					</Link>
				</span>
				.
			</p>
			<Textarea
				className="border-1 min-h-[125px] max-w-[700px] border border-black"
				placeholder="Write your review here..."
				onChange={(e) => setContent(e.target.value)}
			/>
			<Button onClick={handleSubmit} className="mt-8">
				Submit Review
			</Button>
		</>
	);
}
