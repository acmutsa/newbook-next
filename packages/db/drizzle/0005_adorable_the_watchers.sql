ALTER TABLE "users" ALTER COLUMN "profile_image" SET DEFAULT '/img/pfp.png';--> statement-breakpoint
ALTER TABLE "advisor_ratings" ADD COLUMN "responsive_rating_value" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "advisor_ratings" ADD COLUMN "accuracy_rating_value" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "advisor_ratings" ADD COLUMN "approachable_rating_value" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "advisor_ratings" ADD COLUMN "helpful_rating_value" integer NOT NULL;