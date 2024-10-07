import {db, sql} from "./index";
import { courses } from "./schema";
import { type Course } from "./types";

export async function insertCourses(courseList: Course[]) {
    await db.insert(courses).values(courseList);
}

export async function clearCourses() {
    await db.execute(sql`TRUNCATE ${courses}`);
    await db.execute(sql`VACUUM ${courses}`);
}