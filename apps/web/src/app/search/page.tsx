import { redirect } from "next/navigation";
import Link from "next/link";
import { db } from "db";
import { courses } from "db/schema";
import { sql } from "db/drizzle";

interface CourseItemProps {
	title: string;
	professor: string;
	crn: string;
}

// const courses: CourseItemProps[] = [
// 	{ title: "Biology 101", professor: "Prof. Alice Johnson", crn: "CRN29085" },
// 	{ title: "Physics 201", professor: "Prof. Alice Johnson", crn: "CRN21486" },
// 	{
// 		title: "Chemistry 301",
// 		professor: "Prof. Alice Johnson",
// 		crn: "CRN78434",
// 	},
// 	{ title: "Chemistry 301", professor: "Dr. Emily White", crn: "CRN22498" },
// 	{ title: "Physics 201", professor: "Prof. Alice Johnson", crn: "CRN88355" },
// 	{ title: "Mathematics 101", professor: "Dr. John Smith", crn: "CRN56712" },
// ];

export default async function Page({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	if (!searchParams || !searchParams.q || searchParams.q.length == 0) {
		return redirect("/");
	}

	const courseResults = await db
		.select()
		.from(courses)
		.where(
			sql`to_tsvector('english', ${courses.title}) @@ websearch_to_tsquery('english', ${searchParams.q})`,
		);
	return (
		<div className="mx-auto flex min-h-screen w-screen max-w-4xl flex-col pt-[25vh] text-utsa-blue">
			<h1 className="pb-20 font-eb text-8xl">Results</h1>

			<h3 className="pb-8 font-eb text-2xl font-semibold">Courses</h3>
			<div className="grid grid-cols-2 gap-2">
				{courseResults.map((i) => (
					<CourseItem
						course={{
							crn: i.crn,
							professor: i.instructor,
							title: i.title,
						}}
					/>
				))}
			</div>
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
