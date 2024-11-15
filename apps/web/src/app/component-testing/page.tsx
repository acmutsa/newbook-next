import ScoreCard from "@/components/shared/NewBookScoreCard";
import ProfileTitleCard from "@/components/shared/NewBookProfileTitle";
import ProfileReview from "@/components/shared/NewBookProfileReview";

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
                <ProfileReview />
            </div>
        </main>
    ); 
}