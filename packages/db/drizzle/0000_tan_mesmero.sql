-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations

CREATE TABLE IF NOT EXISTS "course_instructor_ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"author_id" text NOT NULL,
	"course_id" integer NOT NULL,
	"rating_value" integer NOT NULL,
	"difficulty_value" integer NOT NULL,
	"content" text,
	"grade" text,
	"was_mandatory_attend" boolean,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "instructors" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"firstname" text NOT NULL,
	"lastname" text NOT NULL,
	"scraped_string" text NOT NULL,
	CONSTRAINT "instructors_scraped_string_unique" UNIQUE("scraped_string")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "advisor_ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"author_id" text NOT NULL,
	"advisor_id" integer NOT NULL,
	"rating_value" integer NOT NULL,
	"content" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"clerk_id" text,
	"firstname" text NOT NULL,
	"lastname" text NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"profile_image" text,
	CONSTRAINT "users_username_unique" UNIQUE("username")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"crn" text NOT NULL,
	"title" text NOT NULL,
	"semester" text NOT NULL,
	"section" text NOT NULL,
	"instructor_id" integer NOT NULL
);

