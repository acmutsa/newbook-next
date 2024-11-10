import AdvisorScore from "@/components/shared/advisor/NewBookAdvisorScore";


export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-offwhite">
            <h1 className="pb-8">AdvisorScore</h1>
            <div className="flex gap-8">
                <AdvisorScore score={0.2} />
                <AdvisorScore score={1.314} />
                <AdvisorScore score={2.314} />
                <AdvisorScore score={3.58} />
                <AdvisorScore score={4.19} />
            </div>
        </main>
    ); 
}