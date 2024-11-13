import AdvisorScoreCard from "@/components/shared/advisor/NewBookAdvisorScore";
import ProfileTitleCard from "@/components/shared/NewBookProfileTitle";


export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-offwhite">
            <h1>AdvisorScoreCard</h1>
            <div className="flex gap-8 my-8">
                <AdvisorScoreCard score={0.2} />
                <AdvisorScoreCard score={1.314} />
                <AdvisorScoreCard score={2.314} />
                <AdvisorScoreCard score={3.58} />
                <AdvisorScoreCard score={4.19} />
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
        </main>
    ); 
}