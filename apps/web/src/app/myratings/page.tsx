import RatingCard from "@/components/shared/RatingCard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page() {
	// const ratings = await getMyRatings(userID);

	return (
		<div className="mx-8 mt-20 pt-8">
			<h1 className="mb-16 text-center font-serif text-5xl font-bold">
				My Ratings
			</h1>
			<div>
				<h2 className="mb-4 px-8 text-4xl font-bold">
					Professor Ratings
				</h2>
				<div className="grid grid-cols-1 gap-4 overflow-x-scroll p-8 md:grid-cols-2 lg:grid-cols-3">
					<RatingCard id="1" />
					<RatingCard id="2" />
					<RatingCard id="3" />
					<RatingCard id="4" />
					<RatingCard id="5" />
				</div>
			</div>
		</div>
	);
}
