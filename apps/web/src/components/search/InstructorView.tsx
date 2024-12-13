import { db } from "db";
import { sql, InferSelectModel } from "db/drizzle";
import { instructors } from "db/schema";
import { SearchParamsType } from "@/lib/types";
import Link from "next/link";
import NoResults from "./NoResults";
import { capitalizeWord } from "@/lib/utils";

type InstructorItemProps = InferSelectModel<typeof instructors>;

export default async function InstructorView({
	searchParams,
}: {
	searchParams: Awaited<SearchParamsType>;
}) {
	const searchValue = searchParams.q;
	const instructorResults = await db.query.instructors.findMany({
		// instructors.firstname + ' ' +
		where: sql`to_tsvector('english', ${instructors.scrapedString}) @@ websearch_to_tsquery('english', ${searchValue})`,
	});
	const isSearchValueString = typeof searchValue === "string";
	return (
		<div className="flex flex-col space-y-6">
			<h1 className="font-eb text-5xl font-semibold">Instructors</h1>
			{instructorResults.length > 0 ? (
				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{instructorResults.map((instructor) => (
						<InstructorItem
							key={instructor.id}
							instructor={{
								...instructor,
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

function InstructorItem({ instructor }: { instructor: InstructorItemProps }) {
	return (
		<div className="aspect-video rounded-xl bg-utsa-blue/50 p-5 font-eb text-white">
			<h1 className="text-4xl font-semibold">{`${instructor.title + " " + capitalizeWord(instructor.firstname) + " " + capitalizeWord(instructor.lastname)}`}</h1>
			{/* <h2 className="pt-3 text-lg font-semibold">{instructor.scrapedString}</h2> */}
		</div>
	);
}
