import { eq } from "drizzle-orm";
import { db } from ".";
import { users } from "./schema";

export function getUser(id: string) {
	return db.query.users.findFirst({
		where: eq(users.id, id),
	});
}
