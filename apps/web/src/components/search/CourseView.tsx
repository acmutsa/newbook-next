import { db } from "db";
import { sql } from "db/drizzle";
import { courses } from "db/schema";
import { SearchParamsType } from "@/lib/types";
import Link from "next/link";
import NoResults from "./NoResults";
interface CourseItemProps {
	title: string;
	professor: string;
	crn: string;
}

export default async function CourseView({
	searchParams,
}: {
	searchParams: Awaited<SearchParamsType>;
}) {
	const searchValue = searchParams.q;
	const courseResults = await db.query.courses.findMany({
		where: sql`to_tsvector('english', ${courses.title}) @@ websearch_to_tsquery('english', ${searchValue})`,
		with: {
			instructor: true,
		},
	});
	const isSearchValueString = typeof searchValue === "string";
	return (
		<div className="flex flex-col space-y-6">
			<h1 className="font-eb text-5xl font-semibold">Courses</h1>
			{courseResults.length > 0 ? (
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{courseResults.map((course) => (
						<CourseItem
							key={course.crn}
							course={{
								title: course.title,
								professor: `${course.instructor.firstname} ${course.instructor.lastname}`,
								crn: course.crn,
							}}
						/>
					))}
				</div>
			) : (
				<NoResults
					searchValue={isSearchValueString ? searchValue : ""}
				/>
			)}
		</div>
	);
}

function CourseItem({ course }: { course: CourseItemProps }) {
	return (
		<Link href={`/course/${course.crn}`}>
			<div className="aspect-video rounded-xl bg-utsa-blue/50 p-5 font-eb text-white">
				<h1 className="text-4xl font-semibold">{course.title}</h1>
				<h2 className="pt-3 text-lg font-semibold">
					{course.professor}
				</h2>
			</div>
		</Link>
	);
}
