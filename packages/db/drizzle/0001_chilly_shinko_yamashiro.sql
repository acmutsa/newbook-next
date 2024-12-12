CREATE TABLE IF NOT EXISTS "advisors" (
	"id" serial PRIMARY KEY NOT NULL,
	"email_key" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image_url" text NOT NULL,
	"unit" text[] NOT NULL,
	CONSTRAINT "advisors_email_key_unique" UNIQUE("email_key")
);
