import { notFound, redirect } from "next/navigation";
import { db } from "db";
import { advisors, advisorRatings } from "db/schema";
import { eq } from "db/drizzle";
import { titleCase } from "@/lib/utils";
import ScoreDialCard from "@/components/shared/NewBookScoreDial";
import {
	Clock,
	HeartHandshake,
	Laugh,
	Mail,
	SquareCheckBig,
} from "lucide-react";
import { CalendarCheck, CalendarClock, CirclePlus } from "lucide-react";

export default async function Page({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;

	if (id.length !== 5) {
		const paddedId = id.padStart(5, "0");
		return redirect(`/advisor/${paddedId}`);
	}

	const parsed = parseInt(id);

	if (isNaN(parsed)) {
		return notFound();
	}

	const advisor = await db.query.advisors.findFirst({
		where: eq(advisors.id, parsed),
	});

	if (!advisor) {
		return notFound();
	}

	const ratings = await db.query.advisorRatings.findMany({
		where: eq(advisorRatings.advisorID, parsed),
	});

	const averageRating = 4.5;
	// ratings.length > 0
	// 	? (ratings.reduce((sum, rating) => sum + rating.ratingValue, 0) /
	// 			ratings.length) *
	// 		(PROFILE_MAX_OVERALL_SCORE / 5)
	// 	: null;

	return (
		<div className="mx-auto grid min-h-screen w-screen max-w-6xl grid-cols-5 gap-x-2 pt-[25vh] text-utsa-blue">
			<div className="col-span-2">
				<div className="flex h-full max-h-[188px] items-start justify-between">
					<div className="flex flex-col items-start justify-center gap-y-3">
						<h1 className="font-eb text-7xl">
							{advisor.name.split(" ").map((name) => (
								<>
									<span>{name}</span>
									<br />
								</>
							))}
						</h1>
						<h2 className="text-xs font-bold">
							{advisor.unit.map((x, idx) => (
								<>
									<span>
										{titleCase(x)}
										{idx !== advisor.unit.length - 1 && ","}
									</span>
									{idx !== advisor.unit.length - 1 && <br />}
								</>
							))}
						</h2>
					</div>
					<div className="!aspect-square h-full rounded-lg bg-utsa-blue">
						<div className="flex h-full items-center justify-center">
							<div className="relative">
								<svg
									className="h-32 w-32 -rotate-90 transform"
									viewBox="0 0 100 100"
								>
									{/* Background circle */}
									<circle
										className="stroke-white/20"
										cx="50"
										cy="50"
										r="45"
										strokeWidth="10"
										fill="none"
									/>
									{/* Progress circle */}
									<circle
										className="stroke-white transition-all"
										cx="50"
										cy="50"
										r="45"
										strokeWidth="10"
										fill="none"
										strokeDasharray={`${(averageRating / 5) * 283} 283`}
									/>
								</svg>
								<div className="absolute inset-0 flex items-center justify-center">
									<h1 className="text-5xl font-black text-white">
										{averageRating
											? averageRating.toFixed(1)
											: "N/A"}
									</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-7 border-t border-utsa-blue pt-2">
					<h3 className="mt-1 font-eb text-2xl font-semibold">
						Overview
					</h3>
					<div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
						<ScoreDialCard score={0.3}>
							<CalendarCheck size="1em" /> Responsive
						</ScoreDialCard>
						<ScoreDialCard score={0.9}>
							<SquareCheckBig size="1em" /> Accurate
						</ScoreDialCard>
						<ScoreDialCard score={0.7}>
							<Laugh size="1em" /> Approachable
						</ScoreDialCard>
						<ScoreDialCard score={0.8}>
							<HeartHandshake size="1em" /> Helpful
						</ScoreDialCard>
					</div>
				</div>
				<div className="mt-3 border-t border-utsa-blue pt-2">
					<h3 className="mb-2 mt-1 font-eb text-2xl font-semibold">
						Information
					</h3>
					<p className="flex items-center gap-x-2 font-medium">
						<Mail strokeWidth="3" size="1em" /> {advisor.email}
					</p>
					<p className="mt-2 flex items-center gap-x-2 font-medium">
						<CirclePlus strokeWidth="3" size="1em" /> {"TBD"}
					</p>
					<p className="mt-2 flex items-center gap-x-2 font-medium">
						<CalendarClock strokeWidth="3" size="1em" /> {"TBD"}
					</p>
				</div>
			</div>
			<div className="col-span-3">
				<h3 className="font-eb text-2xl font-semibold">
					Category ratings
				</h3>
			</div>
		</div>
	);
}
