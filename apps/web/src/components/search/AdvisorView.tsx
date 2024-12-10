import { db } from "db";
import { sql,eq,getTableColumns } from "db/drizzle";
import { advisors,advisorRatings } from "db/schema";
import { SearchParamsType } from "@/lib/types";
import Link from "next/link";
import NoResults from "./NoResults";
interface AdvisorItemProps {
	name:string;
  units:Array<string>;
  rating:number;
}

export default async function AdvisorView({
	searchParams,
}: {
	searchParams: Awaited<SearchParamsType>;
}) {
	const advisorResults = await db
		.select({
      rating:sql<number>`avg(${advisorRatings.ratingValue})`,
      ...getTableColumns(advisors),
    })
		.from(advisors)
		.leftJoin(advisorRatings, eq(advisors.id, advisorRatings.advisorID))
		.where(
			sql`to_tsvector('english', ${advisors.name}) @@ websearch_to_tsquery('english', ${searchParams.q})`,
		)
    .groupBy(advisors.id);
    console.log(advisorResults)

	return (
		<>
			{/* {advisorResults.length > 0 ? (
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{advisorResults.map((course) => (
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
			) : ( */}
				<NoResults />
			{/* )} */}
		</>
	);
}

function CourseItem({ course }: { course: AdvisorItemProps }) {
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
