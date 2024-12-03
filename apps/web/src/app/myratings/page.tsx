import RatingCard from "@/components/shared/RatingCard";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Page() {



    // const ratings = await getMyRatings(userID);

    return <div className="mt-20 mx-8 pt-8">
        <h1 className="mb-16 text-center text-5xl font-bold font-serif">My Ratings</h1>
        <div>
            <h2 className="text-4xl font-bold mb-4 px-8">Professor Ratings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-scroll p-8">
                <RatingCard id="1" />
                <RatingCard id="2" />
                <RatingCard id="3" />
                <RatingCard id="4" />
                <RatingCard id="5" />
            </div>
        </div>
    </div>;
};