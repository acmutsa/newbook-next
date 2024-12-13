import { AdvisorRating, CourseRating } from "@/components/shared/RatingCard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { currentUser, redirectToSignIn } from "@clerk/nextjs/server";
import { getMyRatings } from "db/queries";

export default async function Page() {
	const user = await currentUser();

	if (!user || !user.id) {
		return redirectToSignIn();
	}

	// const { advisors, courses } = await getMyRatings(user.id);

	// This query isn't currently working, so lets make some advisor and course rating arrays
	const advisors = [
		{
			id: "1",
			content: "This advisor was great!",
			createdAt: new Date(),
			ratingValue: 5,
			advisor: {
				name: "Dr. Advisor",
			},
		},
		{
			id: "2",
			content: "This advisor was also great!",
			createdAt: new Date(),
			ratingValue: 5,
			advisor: {
				name: "Dr. Advisor",
			},
		},
	];

	const courses = [
		{
			id: "1",
			content: "This course was great!",
			createdAt: new Date(),
			ratingValue: 4,
			title: "Course Title",
		},
		{
			id: "2",
			content: "This course was also great!",
			createdAt: new Date(),
			ratingValue: 2,
			title: "Course Title",
		},
	];

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
						<AdvisorRating advisor={a} />
					))}
				</div>
			</div>
			<div className="text-left">
				<h2 className="mb-4 px-8 text-4xl font-bold">Course Ratings</h2>
				<div className="grid grid-cols-1 gap-4 overflow-x-scroll p-8 md:grid-cols-2 lg:grid-cols-3">
					{courses.map((c) => (
						<CourseRating course={c} />
					))}
				</div>
			</div>
		</div>
	);
}
