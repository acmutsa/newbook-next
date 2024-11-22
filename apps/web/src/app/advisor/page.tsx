import ProfileTitleCard from "@/components/shared/NewBookProfileTitle"
import ScoreCard from "@/components/shared/NewBookScoreCard"
import ScoreDial from "@/components/shared/NewBookScoreDial"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CalendarCheck, SquareCheckBig, Laugh, HeartHandshake } from "lucide-react"

export default function Page() {
    return( 
        <main className="flex flex-col min-h-screen items-center justify-center">
            <div className="grid grid-cols-2 gap-2">
                {/* Desktop left-side pane */}
                <div className="flex flex-col gap-2">
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
                            <div className="grid grid-cols-2 gap-2">
                                <ScoreDial score={0.82}>
                                    <CalendarCheck size="1em" /> Responsiveness
                                </ScoreDial>
                                <ScoreDial score={0.64}>
                                    <SquareCheckBig size="1em" /> Accuracy
                                </ScoreDial>
                                <ScoreDial score={1.0}>
                                    <Laugh size="1em" /> Approachability
                                </ScoreDial>
                                <ScoreDial score={0.9}>
                                    <HeartHandshake size="1em" /> Helpfulness
                                </ScoreDial>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* Desktop right-side pane */}
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Reviews</CardTitle>
                        </CardHeader>
                        <CardContent>
                            
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    )
}