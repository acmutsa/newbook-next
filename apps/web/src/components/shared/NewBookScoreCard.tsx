import clsx from "clsx";

const MAX_SCORE = 5;

export default function ScoreCard({
    score
}: {
    score: number;
}) {
    // TODO: error-checking for invalid score
    // TODO: Implement logic for actually pulling score from the database w/ the key, instead of just taking it in as a prop
    const scorePercent = score / MAX_SCORE;
    
    return (
        <div className={clsx(
            "flex flex-col items-center place-content-center p-6 rounded-xl bg-card font-black shadow-[0_0_1em_0.05em_#000]",
            {
                "shadow-score-0": ( scorePercent >= 0 ) && ( scorePercent < 0.2 ),
                "shadow-score-1": ( scorePercent >= 0.2 ) && ( scorePercent < 0.4 ),
                "shadow-score-2": ( scorePercent >= 0.4 ) && ( scorePercent < 0.6 ),
                "shadow-score-3": ( scorePercent >= 0.6 ) && ( scorePercent < 0.8 ),
                "shadow-score-4": ( scorePercent >= 0.8 ),
            },
        )}>
            <div className="text-6xl">
                { score.toFixed(1) ?? NaN }
            </div>
            <div className="text-2xl text-slate-500">
                <span className="sr-only">out of</span>
                <span className="not-sr-only">/ </span>
                { MAX_SCORE ?? NaN }
            </div>
        </div>
    )
}