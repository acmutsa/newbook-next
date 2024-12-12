"use server";
import { createUserSchema } from "db";
import { authenticatedAction } from "@/lib/safe-action";
import { db } from "db";
import { users } from "db/schema";
import { currentUser } from "@clerk/nextjs/server";

export const createUserAction = authenticatedAction
	.schema(createUserSchema)
	.action(async ({ parsedInput, ctx: { userId } }) => {
		const currUser = await currentUser();
		await db.insert(users).values({
			...parsedInput,
			id: userId,
			profileImage: currUser?.imageUrl,
		});
		return {
			success: true,
		};
	});
