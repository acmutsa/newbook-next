import {
	pgTable,
	serial,
	text,
	integer,
	boolean,
	timestamp,
	unique,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const courseInstructorRatings = pgTable("course_instructor_ratings", {
	id: serial("id").primaryKey().notNull(),
	authorId: text("author_id").notNull(),
	courseId: integer("course_id").notNull(),
	ratingValue: integer("rating_value").notNull(),
	difficultyValue: integer("difficulty_value").notNull(),
	content: text("content"),
	grade: text("grade"),
	wasMandatoryAttend: boolean("was_mandatory_attend"),
	createdAt: timestamp("created_at", { mode: "string" })
		.defaultNow()
		.notNull(),
});

export const instructors = pgTable(
	"instructors",
	{
		id: serial("id").primaryKey().notNull(),
		title: text("title").notNull(),
		firstname: text("firstname").notNull(),
		lastname: text("lastname").notNull(),
		scrapedString: text("scraped_string").notNull(),
	},
	(table) => {
		return {
			instructorsScrapedStringUnique: unique(
				"instructors_scraped_string_unique",
			).on(table.scrapedString),
		};
	},
);

export const advisorRatings = pgTable("advisor_ratings", {
	id: serial("id").primaryKey().notNull(),
	authorId: text("author_id").notNull(),
	advisorId: integer("advisor_id").notNull(),
	ratingValue: integer("rating_value").notNull(),
	content: text("content"),
	createdAt: timestamp("created_at", { mode: "string" })
		.defaultNow()
		.notNull(),
});

export const users = pgTable(
	"users",
	{
		clerkId: text("clerk_id"),
		firstname: text("firstname").notNull(),
		lastname: text("lastname").notNull(),
		username: text("username").notNull(),
		email: text("email").notNull(),
		profileImage: text("profile_image"),
	},
	(table) => {
		return {
			usersUsernameUnique: unique("users_username_unique").on(
				table.username,
			),
		};
	},
);

export const courses = pgTable("courses", {
	id: serial("id").primaryKey().notNull(),
	crn: text("crn").notNull(),
	title: text("title").notNull(),
	semester: text("semester").notNull(),
	section: text("section").notNull(),
	instructorId: integer("instructor_id").notNull(),
});
