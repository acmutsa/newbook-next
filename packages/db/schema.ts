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

export const courses = pgTable("courses", {
	crn: text("crn").primaryKey().notNull(),
	title: text("title").notNull(),
	semester: text("semester").notNull(),
	instructor: text("instructor").notNull(),
	section: text("section").notNull()
})