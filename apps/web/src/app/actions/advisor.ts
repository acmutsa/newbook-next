"use server";

import { authenticatedAction } from "@/lib/safe-action";
import { z } from "zod";
import { db } from "db";
import { advisorRatings, advisors } from "db/schema";
import { and, eq } from "db/drizzle";

const createAdvisorReviewSchema = z.object({
	advisorId: z.number().int().min(1),
	overall_rating: z.number().min(1).max(5),
	responsive_rating: z.number().min(1).max(5),
	accuracy_rating: z.number().min(1).max(5),
	approachable_rating: z.number().min(1).max(5),
	helpful_rating: z.number().min(1).max(5),
	content: z.string().optional(),
});

export const createAdvisorReview = authenticatedAction
	.schema(createAdvisorReviewSchema)
	.action(async ({ parsedInput, ctx: { userId } }) => {
		const advisor = await db.query.advisors.findFirst({
			where: eq(advisors.id, parsedInput.advisorId),
		});

		if (!advisor) {
			return {
				success: false,
				message: "Invalid advisor ID",
			};
		}

		const existingReview = await db.query.advisorRatings.findFirst({
			where: and(
				eq(advisorRatings.advisorID, parsedInput.advisorId),
				eq(advisorRatings.authorID, userId),
			),
		});

		if (existingReview) {
			return {
				success: false,
				message:
					"Advisor review already exists. Should be a edit action.",
			};
		}

		await db.insert(advisorRatings).values({
			advisorID: parsedInput.advisorId,
			authorID: userId,
			ratingValue: parsedInput.overall_rating,
			responsiveRatingValue: parsedInput.responsive_rating,
			accuracyRatingValue: parsedInput.accuracy_rating,
			approachableRatingValue: parsedInput.approachable_rating,
			helpfulRatingValue: parsedInput.helpful_rating,
			content: parsedInput.content,
		});

		return {
			success: true,
			message: "Advisor review created successfully",
		};
	});
