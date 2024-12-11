import { db } from "./index";
import { eq, sql } from "drizzle-orm";
import { courses, instructors, ratings } from "./schema";
import { type CourseScrapeData } from "./types";

export async function insertCourses(courseList: CourseScrapeData[]) {
	for (const course of courseList) {
		const courseStrNormalized = course.instructor.trim().toLowerCase();

		console.log(
			`[Scraper] [Processing] Processing instructor with normalized string ${courseStrNormalized}`,
		);

		if (
			!courseStrNormalized ||
			courseStrNormalized.length == 0 ||
			!courseStrNormalized.includes(",")
		) {
			console.log(
				`[Scraper] [WANRING] Processing instructor with normalized string ${courseStrNormalized} failed due to non-compliant string`,
			);
			continue;
		}

		const instr_fname = courseStrNormalized.split(",")[1].trim();
		const instr_lname = courseStrNormalized.split(",")[0].trim();

		const dbInstructor = await db
			.insert(instructors)
			.values({
				firstname: instr_fname,
				lastname: instr_lname,
				scrapedString: courseStrNormalized,
				title: "Dr.",
			})
			.onConflictDoNothing({ target: instructors.scrapedString })
			.returning({ retID: instructors.id });

		let instr_id = dbInstructor[0]?.retID;

		// This can be undefined sometimes for some reason, would be cool to have a better fix

		if (!instr_id) {
			const instr_lookup = await db.query.instructors.findFirst({
				where: eq(instructors.scrapedString, courseStrNormalized),
			});
			if (!instr_lookup?.id) {
				throw new Error("Somehow we found a instructor and then didnt");
			}
			instr_id = instr_lookup.id;
		}

		const dbCourse = await db
			.insert(courses)
			.values({
				crn: course.crn,
				instructorID: instr_id,
				section: course.section,
				semester: course.semester,
				title: course.title,
			})
			.returning({ title: courses.title, crn: courses.crn });

		console.log(
			`[Scraper] [Completed] ${dbCourse[0].title} with crn ${dbCourse[0].crn} for instuctor ID ${instr_id}`,
		);
	}
}

export async function getMyRatings(userID: string) {
	const myRatings = await db.query.ratings.findMany({
		where: eq(ratings.authorID, userID),
	});
	return myRatings;
}

export async function clearCourses() {
	await db.execute(sql`TRUNCATE ${courses}`);
	await db.execute(sql`VACUUM ${courses}`);
	await db.execute(sql`TRUNCATE ${instructors}`);
	await db.execute(sql`VACUUM ${instructors}`);
}
