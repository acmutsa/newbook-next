import {
	createSafeActionClient,
	returnValidationErrors,
} from "next-safe-action";
import { auth } from "@clerk/nextjs/server";
import z from "zod";
import { getUser } from "db";

const safeActionClient = createSafeActionClient({
	handleServerError(e, utils) {
		// You can access these properties inside the `utils` object.
		const { clientInput, bindArgsClientInputs, metadata, ctx } = utils;

		// Log to console.
		console.error("Action error:", e.message);

		// Return generic message
		return "Oh no, something went wrong!";
	},
});

export const authenticatedAction = safeActionClient.use(async ({ next }) => {
	const { userId } = await auth();
	if (!userId)
		returnValidationErrors(z.null(), {
			_errors: ["Unauthorized (No User ID)"],
		});
	return next({ ctx: { userId } });
});

export const userAction = authenticatedAction.use(
	async ({ next, ctx: { userId } }) => {
		const user = await getUser(userId);
		if (!user)
			returnValidationErrors(z.null(), {
				_errors: ["Unauthorized (No User)"],
			});
		return next({ ctx: { user, userId } });
	},
);
