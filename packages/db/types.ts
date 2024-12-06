import z from "zod";
import { createUserSchema } from "./zod";
export type CourseScrapeData = {
	semester: string;
	crn: string;
	section: string;
	title: string;
	instructor: string;
	// textbook?: string;
};
export type CreateUserSchemaType = z.infer<typeof createUserSchema>;
