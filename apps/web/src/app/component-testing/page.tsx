import ScoreCard from "@/components/shared/NewBookScoreCard";
import ProfileTitleCard from "@/components/shared/NewBookProfileTitle";
import ProfileReview from "@/components/shared/NewBookProfileReview";
import ScoreDial from "@/components/shared/NewBookScoreDial";
import { CheckCircledIcon, CalendarIcon, HeartIcon, FaceIcon } from "@radix-ui/react-icons";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-offwhite">
            <h1>ScoreCard</h1>
            <div className="flex gap-8 my-8">
                <ScoreCard score={0.2} />
                <ScoreCard score={1.314} />
                <ScoreCard score={2.314} />
                <ScoreCard score={3.58} />
                <ScoreCard score={4.19} />
            </div>
            <h1>ProfileTitleCard</h1>
            <div className="flex flex-col gap-8 my-8">
                <ProfileTitleCard
                    name="Professor Name"
                    title="Assistant Professor of Instruction"
                    unit="Department of Computer Science"
                />
                <ProfileTitleCard
                    name="Lecturer Name"
                    title="Lecturer"
                    unit="Department of Computer Science"
                />
                <ProfileTitleCard
                    name="Advisor Name"
                    title="Academic advisor"
                    unit="College of Sciences"
                />
            </div>
            <h1>ProfileReview</h1>
            <div className="flex flex-col gap-8 my-8">
                <ProfileReview
                    score={2.0}
                    major="Computer Science"
                    classOf={2024}
                    datePosted={new Date()}
                    content="Meh."
                />
                <ProfileReview
                    score={3.5}
                    major="English"
                    classOf={2027}
                    datePosted={new Date()}
                    content="Alright!"
                />
                <ProfileReview
                    score={5.0}
                    major="Finance"
                    classOf={2025}
                    datePosted={new Date()}
                    content="Wow!"
                />
            </div>
            <h1>ScoreDial</h1>
            <div className="flex gap-8 my-8">
                <ScoreDial
                    score={0.145}
                >
                    <CheckCircledIcon />
                    Accuracy
                </ScoreDial>
                <ScoreDial
                    score={0.28}
                >
                    <CalendarIcon />
                    Responsiveness
                </ScoreDial>
                <ScoreDial
                    score={0.48}
                >
                    <HeartIcon />
                    Helpfulness
                </ScoreDial>
                <ScoreDial
                    score={0.68}
                >
                    <FaceIcon />
                    Approachability
                </ScoreDial>
                <ScoreDial
                    score={0.84}
                >
                    <CalendarIcon />
                    Responsiveness
                </ScoreDial>
            </div>
        </main>
    ); 
}