import clsx from "clsx";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const MAX_SCORE = 5;

export default function ScoreIcon({
    score
}: {
    score: number;
}) {
    // TODO: error-checking for invalid score
    // TODO: Implement logic for actually pulling score from the database w/ the key, instead of just taking it in as a prop
    const scorePercent = score / MAX_SCORE;

    return (
        <Avatar>
            <AvatarFallback className={clsx(
                "shadow-[inset_0_0_0.25em_0.05em_#000]",
                {
                    "shadow-score-0": ( scorePercent >= 0 ) && ( scorePercent < 0.2 ),
                    "shadow-score-1": ( scorePercent >= 0.2 ) && ( scorePercent < 0.4 ),
                    "shadow-score-2": ( scorePercent >= 0.4 ) && ( scorePercent < 0.6 ),
                    "shadow-score-3": ( scorePercent >= 0.6 ) && ( scorePercent < 0.8 ),
                    "shadow-score-4": ( scorePercent >= 0.8 ),
                },
            )}>
                { score.toFixed(1) ?? NaN }
            </AvatarFallback>
        </Avatar>
    );
}