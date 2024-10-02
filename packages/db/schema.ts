import {
	bigserial,
	text,
	varchar,
	boolean,
	timestamp,
	integer,
	json,
	pgEnum,
	primaryKey,
	pgTable,
} from "drizzle-orm/pg-core";

export const foo = pgTable("foo", {
	bar: text("bar").primaryKey(),
});
