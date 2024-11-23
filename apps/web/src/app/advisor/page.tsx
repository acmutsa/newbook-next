"use client";

// Test data
import {
    advisorOne,
    advisorOneCategoryRatings,
    ratingOne,
    ratingTwo,
} from "@/lib/test-data";
// Newbook components
import ProfileReview from "@/components/shared/NewBookProfileReview"
import ProfileTitleCard from "@/components/shared/NewBookProfileTitle"
import ScoreCard from "@/components/shared/NewBookScoreCard"
import ScoreDialCard from "@/components/shared/NewBookScoreDial"
// shadcn components
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// Icon components
import { CalendarCheck, SquareCheckBig, Laugh, HeartHandshake, Plus } from "lucide-react"
import { Button } from "@/components/ui/button";

export default function Page() {
    const advisorReviews = [ratingOne, ratingTwo];
    const advisorProfileData = advisorOne;
    const advisorCategoryData = advisorOneCategoryRatings;
    
    return ( 
        <main className="container mx-auto flex flex-col min-h-screen justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
                {/* Desktop left-side pane */}
                <div className="flex flex-col gap-2 lg:col-span-5">
                    <div className="flex gap-2">
                        <ProfileTitleCard
                            name={advisorProfileData.firstname + " " + advisorProfileData.lastname}
                            title={advisorProfileData.title}
                            unit={advisorProfileData.unit}
                        />
                        <ScoreCard score={advisorProfileData.score} />
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Category ratings</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
                                <ScoreDialCard score={advisorCategoryData.responsive}>
                                    <CalendarCheck size="1em" /> Responsive
                                </ScoreDialCard>
                                <ScoreDialCard score={advisorCategoryData.accurate}>
                                    <SquareCheckBig size="1em" /> Accurate
                                </ScoreDialCard>
                                <ScoreDialCard score={advisorCategoryData.approachable}>
                                    <Laugh size="1em" /> Approachable
                                </ScoreDialCard>
                                <ScoreDialCard score={advisorCategoryData.helpful}>
                                    <HeartHandshake size="1em" /> Helpful
                                </ScoreDialCard>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* Desktop right-side pane */}
                <div className="lg:col-span-7">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <div className="flex-1 justify-self-start">
                                    Reviews
                                </div>
                                <div className="justify-self-end">
                                    <Button>
                                        Add review <Plus className="ml-1" size="1.25em" />
                                    </Button>
                                </div>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            {( advisorReviews.length > 0 )  ? advisorReviews.map((review) =>
                                                                    <ProfileReview
                                                                        score={review.score}
                                                                        major={review.student.major}
                                                                        classOf={review.student.classOf}
                                                                        datePosted={review.datePosted}
                                                                    >
                                                                        {review.content}
                                                                    </ProfileReview>
                                                                )
                                                            : "No reviews have been made for this advisor."
                            }
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}