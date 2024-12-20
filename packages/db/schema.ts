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

export const advisors = pgTable("advisors", {
	id: serial("id").primaryKey(),
	emailKey: text("email_key").notNull().unique(),
	name: text("name").notNull(),
	email: text("email").notNull(),
	imageUrl: text("image_url").notNull(),
	unit: text("unit").array().notNull(),
});

export const advisorRelations = relations(advisors, ({ many }) => ({
	ratings: many(advisorRatings),
}));

export const courses = pgTable("courses", {
	id: serial("id").primaryKey(),
	crn: text("crn").notNull(),
	title: text("title").notNull(),
	semester: text("semester").notNull(),
	instructorID: integer("instructor_id").notNull(),
	section: text("section").notNull(),
});

export const courseRelations = relations(courses, ({ many, one }) => ({
	ratings: many(courseInstructorRatings),
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
	profileImage: text("profile_image").default("/img/pfp.png"),
	email: text("email").notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
	authoredCourseInstructorRatings: many(courseInstructorRatings),
	authoredAdvisorRatings: many(advisorRatings),
}));

export const courseInstructorRatings = pgTable("course_instructor_ratings", {
	id: serial("id").primaryKey(),
	authorID: text("author_id").notNull(),
	courseID: integer("course_id").notNull(),
	ratingValue: integer("rating_value").notNull(),
	difficultyValue: integer("difficulty_value").notNull(),
	content: text("content"),
	grade: text("grade"),
	wasMandatoryAttend: boolean("was_mandatory_attend"),
	createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const courseInstructorRatingsRelations = relations(
	courseInstructorRatings,
	({ one }) => ({
		course: one(courses, {
			fields: [courseInstructorRatings.courseID],
			references: [courses.id],
		}),
		author: one(users, {
			fields: [courseInstructorRatings.authorID],
			references: [users.id],
		}),
	}),
);

export const advisorRatings = pgTable("advisor_ratings", {
	id: serial("id").primaryKey(),
	authorID: text("author_id").notNull(),
	advisorID: integer("advisor_id").notNull(),
	ratingValue: integer("rating_value").notNull(),
	responsiveRatingValue: integer("responsive_rating_value").notNull(),
	accuracyRatingValue: integer("accuracy_rating_value").notNull(),
	approachableRatingValue: integer("approachable_rating_value").notNull(),
	helpfulRatingValue: integer("helpful_rating_value").notNull(),
	content: text("content"),
	publiclyShowAuthorInfo: boolean("publicly_show_author_info")
		.notNull()
		.default(true),
	createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const advisorRatingsRelations = relations(advisorRatings, ({ one }) => ({
	advisor: one(advisors, {
		fields: [advisorRatings.advisorID],
		references: [advisors.id],
	}),
	author: one(users, {
		fields: [advisorRatings.authorID],
		references: [users.id],
	}),
}));
