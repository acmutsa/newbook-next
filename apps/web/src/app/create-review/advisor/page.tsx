import { notFound } from "next/navigation";
import { db } from "db";
import { advisors } from "db/schema";
import { eq } from "db/drizzle";
import Link from "next/link";
import { titleCase } from "@/lib/utils";

export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ id: string }>;
}) {
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
		<div className="mx-auto min-h-screen w-screen max-w-7xl px-5 pt-[25vh]">
			<h1 className="font-eb text-7xl">
				<span>Reviewing </span>
				<Link href={`/advisor/${advisor.id}`}>
					<span className="font-bold hover:underline">
						{advisor.name}
					</span>
				</Link>
			</h1>
			<h2 className="mt-8 font-eb text-lg font-bold">
				Advisor for {advisor.unit.map((x) => titleCase(x)).join(", ")}
			</h2>
		</div>
	);
}
