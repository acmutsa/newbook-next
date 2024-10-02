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

export const courses = pgTable("courses", {
	crn: text("crn").primaryKey(),
	title: text("title"),
	semester: text("semester"),
	instructor: text("instructor"),
	section: text("section")
})