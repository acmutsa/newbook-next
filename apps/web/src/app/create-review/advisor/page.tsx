import { notFound, redirect } from "next/navigation";
import { db } from "db";
import { advisors } from "db/schema";
import { eq } from "db/drizzle";
import Link from "next/link";
import { titleCase } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/StarRating";
import { AdvisorReviewForm } from "./client";
import { getUser } from "db";
import { auth } from "@clerk/nextjs/server";

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ id: string }>;
}) {
	const { userId} = await auth();
	if (!userId) {
		return redirect("/sign-in");
	}
	const user = await getUser(userId);
	if (!user) {
		return redirect(
			"/sign-in"
		);
	}
	const id = (await searchParams).id;

	if (!id) {
		return notFound();
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

	return (
		<div className="mx-auto min-h-screen w-screen max-w-7xl px-5 pb-10 pt-[25vh]">
			<h1 className="font-eb text-7xl">
				<span>Reviewing </span>
				<Link href={`/advisor/${advisor.id}`}>
					<span className="font-bold hover:underline">
						{advisor.name}
					</span>
				</Link>
			</h1>
			<h2 className="pb-24 pt-8 font-eb text-lg font-bold">
				Advisor for {advisor.unit.map((x) => titleCase(x)).join(", ")}
			</h2>
			<AdvisorReviewForm advisorId={advisor.id} />
		</div>
	);
}
