import {
	bigserial,
	text,
	varchar,
	boolean,
	timestamp,
	integer,
	json,
	pgEnum,
	pgTable,
	serial,
} from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
	id: serial("id").primaryKey().notNull(),
	crn: text("crn").notNull(),
	title: text("title").notNull(),
	semester: text("semester").notNull(),
	instructor: text("instructor").notNull(),
	section: text("section").notNull()
})