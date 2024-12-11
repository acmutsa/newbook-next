import { db } from "db";
import { sql,eq,getTableColumns } from "db/drizzle";
import { advisors,advisorRatings } from "db/schema";
import { SearchParamsType } from "@/lib/types";
import Link from "next/link";
import NoResults from "./NoResults";
import { capitalizeWord } from "@/lib/utils";
import ScoreDialCard from "../shared/NewBookScoreDial";
import { CalendarCheck } from "lucide-react";
interface AdvisorItemProps {
  id:number;
	name:string;
  unit:Array<string>;
  rating:number;
}

export default async function AdvisorView({
	searchParams,
}: {
	searchParams: Awaited<SearchParamsType>;
}) {
	const advisorResults = await db
		.select({
			id: advisors.id,
			name: advisors.name,
			unit: advisors.unit,
			rating: sql<number>`avg(${advisorRatings.ratingValue})`,
		})
		.from(advisors)
		.leftJoin(advisorRatings, eq(advisors.id, advisorRatings.advisorID))
		.where(
			sql`to_tsvector('english', ${advisors.name}) @@ websearch_to_tsquery('english', ${searchParams.q+':*'})`,
		)
		.groupBy(advisors.id);

    const searchValue = searchParams.q;
    const isSearchValueString = typeof searchValue === "string";
	return (
		<div className="flex flex-col space-y-6">
			<h1 className="font-eb text-5xl font-semibold">Advisors</h1>
			{advisorResults.length > 0 ? (
				<div className="flex w-full flex-col justify-center space-y-3">
					<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
						{advisorResults.map((advisor) => (
							<AdvisorItem
								key={advisor.id}
								advisor={{
									...advisor,
									rating: advisor.rating || 0,
								}}
							/>
						))}
					</div>
				</div>
			) : (
				<NoResults
					searchValue={isSearchValueString ? searchValue : ""}
				/>
			)}
		</div>
	);
}

function AdvisorItem({  advisor }: { advisor: AdvisorItemProps }) {
  // add rating
	return (
		<Link href={`/advisor/${advisor.id}`}>
			<div className="aspect-video rounded-xl bg-utsa-blue/50 p-5 font-eb text-white">
				<div className="flex flex-row items-center justify-between">
					<h1 className="text-4xl font-semibold">{advisor.name}</h1>
					<ScoreDialCard className="max-w-fit" score={advisor.rating / 5}>
						{null}
					</ScoreDialCard>
				</div>
				{advisor.unit.map((unit) => (
					<h2 key={unit} className="pt-3 text-lg font-semibold">
						{capitalizeWord(unit)}
					</h2>
				))}
			</div>
		</Link>
	);
}
