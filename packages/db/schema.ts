import { relations } from "drizzle-orm";
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

export const instructors = pgTable("instructors", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	firstname: text("firstname").notNull(),
	lastname: text("lastname").notNull(),
	scrapedString: text("scraped_string").notNull().unique(),
});

export const courses = pgTable("courses", {
	id: serial("id").primaryKey(),
	crn: text("crn").notNull(),
	title: text("title").notNull(),
	semester: text("semester").notNull(),
	instructorID: integer("instructor_id").notNull(),
	section: text("section").notNull(),
});

export const courseRelations = relations(courses, ({ many, one }) => ({
	ratings: many(ratings),
	instructor: one(instructors, {
		fields: [courses.instructorID],
		references: [instructors.id],
	}),
}));

export const users = pgTable("users", {
	id: text("clerk_id"),
	firstname: text("firstname").notNull(),
	lastname: text("lastname").notNull(),
	username: text("username").notNull().unique(),
	email: text("email").notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
	authoredRatings: many(ratings),
}));

export const ratings = pgTable("ratings", {
	id: serial("id").primaryKey(),
	authorID: text("author_id").notNull(),
	courseID: integer("course_id").notNull(),
	ratingValue: integer("rating_value").notNull(),
	difficultyValue: integer("difficulty_value").notNull(),
	content: text("content"),
	grade: text("grade"),
	wasMandatoryAttend: boolean("was_mandatory_attend"),
});

export const ratingsRelations = relations(ratings, ({ one }) => ({
	course: one(courses, {
		fields: [ratings.courseID],
		references: [courses.id],
	}),
	author: one(users, {
		fields: [ratings.authorID],
		references: [users.id],
	}),
}));
