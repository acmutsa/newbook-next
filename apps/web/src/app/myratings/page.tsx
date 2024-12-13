import { AdvisorRating, CourseRating } from "@/components/shared/RatingCard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import { getMyRatings } from "db/queries";
import { redirect } from "next/navigation";

export default async function Page() {
	const user = await currentUser();

	if (!user || !user.id) {
		return redirect("/sign-in");
	}

	const { advisors, courses } = await getMyRatings(user.id);

	return (
		<div className="mx-8 mt-20 w-full pt-8">
			<h1 className="mb-16 text-center font-serif text-5xl font-bold">
				My Ratings
			</h1>
			<div className="text-left">
				<h2 className="mb-4 px-8 text-4xl font-bold">
					Advisor Ratings
				</h2>
				<div className="grid grid-cols-1 gap-4 overflow-x-scroll p-8 md:grid-cols-2 lg:grid-cols-3">
					{advisors.map((a) => (
						<AdvisorRating advisor={a} key={a.id} />
					))}
				</div>
			</div>
			{/* <div className="text-left">
				<h2 className="mb-4 px-8 text-4xl font-bold">Course Ratings</h2>
				<div className="grid grid-cols-1 gap-4 overflow-x-scroll p-8 md:grid-cols-2 lg:grid-cols-3">
					{courses.map((c) => (
						<CourseRating course={c} />
					))}
				</div>
			</div> */}
		</div>
	);
}
