import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
// import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import * as schema from "./schema";

export * from "./functions";
export * from "./zod";
export * from "./types";
export const db = drizzle(sql, {
	schema,
	logger:
		process.env.DRIZZLE_DO_LOG !== undefined &&
		process.env.DRIZZLE_DO_LOG === "true",
});

// await migrate(db, { migrationsFolder: "../../drizzle" });
