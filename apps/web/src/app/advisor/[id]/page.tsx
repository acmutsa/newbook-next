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
	PlusCircle,
	SquareCheckBig,
} from "lucide-react";
import { CalendarCheck, CalendarClock, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
		with: { author: true },
	});

	const averageRating =
		ratings.length > 0
			? ratings.reduce((sum, rating) => sum + rating.ratingValue, 0) /
				ratings.length
			: null;

	const responsiveRating =
		ratings.length > 0
			? (ratings.reduce(
					(sum, rating) => sum + rating.responsiveRatingValue,
					0,
				) /
					ratings.length) *
				0.2
			: null;

	const accuracyRating =
		ratings.length > 0
			? (ratings.reduce(
					(sum, rating) => sum + rating.accuracyRatingValue,
					0,
				) /
					ratings.length) *
				0.2
			: null;

	const approachableRating =
		ratings.length > 0
			? (ratings.reduce(
					(sum, rating) => sum + rating.approachableRatingValue,
					0,
				) /
					ratings.length) *
				0.2
			: null;

	const helpfulRating =
		ratings.length > 0
			? (ratings.reduce(
					(sum, rating) => sum + rating.helpfulRatingValue,
					0,
				) /
					ratings.length) *
				0.2
			: null;

	return (
		<div className="mx-auto grid min-h-screen w-screen max-w-6xl grid-cols-5 gap-x-2 pt-[25vh] text-utsa-blue">
			<div className="col-span-2">
				<div className="flex h-full max-h-[188px] items-start justify-between">
					<div className="flex flex-col items-start justify-center gap-y-3">
						<h1 className="font-eb text-7xl">
							{advisor.name.split(" ").map((name, index) => (
								<span key={index}>
									{name}
									<br />
								</span>
							))}
						</h1>
						<h2 className="text-xs font-bold">
							{advisor.unit.map((x, idx) => (
								<span key={idx}>
									{titleCase(x)}
									{idx !== advisor.unit.length - 1 && (
										<>
											,<br />
										</>
									)}
								</span>
							))}
						</h2>
					</div>
					<div className="!aspect-square h-full rounded-lg bg-utsa-blue">
						<div className="flex h-full items-center justify-center">
							<div className="relative">
								{averageRating && (
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
								)}
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
						{responsiveRating &&
						accuracyRating &&
						approachableRating &&
						helpfulRating ? (
							<>
								<ScoreDialCard score={responsiveRating}>
									<CalendarCheck size="1em" /> Responsive
								</ScoreDialCard>
								<ScoreDialCard score={accuracyRating}>
									<SquareCheckBig size="1em" /> Accurate
								</ScoreDialCard>
								<ScoreDialCard score={approachableRating}>
									<Laugh size="1em" /> Approachable
								</ScoreDialCard>
								<ScoreDialCard score={helpfulRating}>
									<HeartHandshake size="1em" /> Helpful
								</ScoreDialCard>
							</>
						) : (
							<div className="col-span-2 mt-2 flex h-16 w-full items-center justify-center rounded-lg border border-dashed border-utsa-blue xl:col-span-4">
								<p className="text-center text-sm font-bold">
									We'll have more insights here as reviews are
									added!
								</p>
							</div>
						)}
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
			<div className="col-span-3 flex flex-col gap-y-4 pl-10">
				<div className="flex items-center justify-between rounded-lg bg-utsa-blue p-7">
					<h3 className="font-eb text-4xl text-white">Reviews</h3>
					<Link href={`/create-review/advisor?id=${advisor.id}`}>
						<Button className="dark flex items-center gap-x-2 font-bold text-utsa-blue">
							<PlusCircle strokeWidth="3" size="1em" />
							New Review
						</Button>
					</Link>
				</div>

				{ratings.map((rating) => (
					<div
						key={rating.id}
						className="overflow-hidden rounded-lg border-2 border-utsa-blue"
					>
						<div className="flex h-16 items-center justify-start gap-x-2 bg-utsa-blue px-4 py-3 text-white">
							<Image
								src={
									rating.author.profileImage &&
									rating.publiclyShowAuthorInfo
										? rating.author.profileImage
										: "/img/pfp.png"
								}
								alt={`${rating.author.firstname} ${rating.author.lastname}`}
								width={36}
								height={36}
								className="rounded-full"
							/>
							<h3 className="text-lg font-bold">
								{rating.publiclyShowAuthorInfo
									? `${rating.author.firstname} ${rating.author.lastname}`
									: `Anonymous Student`}
							</h3>
							<div className="ml-auto flex !aspect-square h-full items-center justify-center rounded bg-white px-2 py-1 text-center text-sm font-black text-utsa-blue">
								<p className="tracking-widest">
									{rating.ratingValue}/5
								</p>
							</div>
						</div>
						<div className="p-4">
							<p className="text-black">
								{rating.content || (
									<span className="italic">
										This review does not have any content.
									</span>
								)}
							</p>
							<div className="flex items-center justify-start gap-x-1 pt-5">
								<RatingAreaBadge
									text={`Responsiveness: ${rating.responsiveRatingValue}/5`}
								/>
								<RatingAreaBadge
									text={`Accuracy: ${rating.accuracyRatingValue}/5`}
								/>
								<RatingAreaBadge
									text={`Approachability: ${rating.approachableRatingValue}/5`}
								/>
								<RatingAreaBadge
									text={`Helpfulness: ${rating.helpfulRatingValue}/5`}
								/>
							</div>
						</div>
					</div>
				))}
				{ratings.length === 0 && (
					<div className="flex h-16 items-center justify-center rounded-lg border-2 border-dashed border-utsa-blue">
						<p className="text-lg font-bold">
							We do not have any reviews for this advisor yet.
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

function RatingAreaBadge({ text }: { text: string }) {
	return (
		<div className="flex min-w-10 items-center justify-center rounded-full bg-utsa-blue px-3 py-1 text-center text-[0.55rem] font-semibold text-white">
			{text.toUpperCase()}
		</div>
	);
}
