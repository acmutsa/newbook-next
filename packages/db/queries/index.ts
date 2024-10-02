import {db} from "../";
import { courses } from "../schema";
import { Course } from "../types";

export async function insertCourses(courseList: Course[]) {
    await db.insert(courses).values(courseList);
}