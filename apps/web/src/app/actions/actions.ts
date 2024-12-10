"use server";
import { createUserSchema } from "db";
import { authenticatedAction } from "@/lib/safe-action";
import { db } from "db";
import { users } from "db/schema";

export const createUserAction = authenticatedAction
	.schema(createUserSchema)
	.action(async ({ parsedInput, ctx: { userId } }) => {
		await db.insert(users).values({
			...parsedInput,
			id: userId,
		});
		return {
			success: true,
		};
	});
