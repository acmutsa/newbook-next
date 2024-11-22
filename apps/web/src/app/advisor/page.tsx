import ProfileReview from "@/components/shared/NewBookProfileReview"
import ProfileTitleCard from "@/components/shared/NewBookProfileTitle"
import ScoreCard from "@/components/shared/NewBookScoreCard"
import ScoreDial from "@/components/shared/NewBookScoreDial"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CalendarCheck, SquareCheckBig, Laugh, HeartHandshake } from "lucide-react"

export default function Page() {
    return( 
        <main className="container mx-auto flex flex-col min-h-screen justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-2">
                {/* Desktop left-side pane */}
                <div className="flex flex-col gap-2 lg:col-span-5">
                    <div className="flex gap-2">
                        <ProfileTitleCard
                            name="Advisor Name"
                            title="Academic advisor"
                            unit="College of Sciences"
                        />
                        <ScoreCard score={4.32} />
                    </div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Category ratings</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
                                <ScoreDial score={0.82}>
                                    <CalendarCheck size="1em" /> Responsive
                                </ScoreDial>
                                <ScoreDial score={0.64}>
                                    <SquareCheckBig size="1em" /> Accurate
                                </ScoreDial>
                                <ScoreDial score={1.0}>
                                    <Laugh size="1em" /> Approachable
                                </ScoreDial>
                                <ScoreDial score={0.9}>
                                    <HeartHandshake size="1em" /> Helpful
                                </ScoreDial>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* Desktop right-side pane */}
                <div className="lg:col-span-7">
                    <Card>
                        <CardHeader>
                            <CardTitle>Reviews</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <ProfileReview
                                score={5.0}
                                major="Biology"
                                classOf={2024}
                                datePosted={new Date(1732084730000)}
                            >
                                This advisor was awesome!
                            </ProfileReview>
                            <ProfileReview
                                score={3.5}
                                major="Computer science"
                                classOf={2024}
                                datePosted={new Date(1732024030000)}
                            >
                                They were nice, but they forgot to tell me this deadline that I almost missed. Double-check your DegreeWorks!
                            </ProfileReview>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}