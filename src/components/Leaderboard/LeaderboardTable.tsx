import { Score } from "@prisma/client";
import moment from "moment";

type LeaderboardTableProps = {
    leaderboard: Score[]
}

export default function LeaderboardTable({ leaderboard }: LeaderboardTableProps) {
    return (
        <div className="gap-2 items-center m-10 p-10 rounded bg-white bg-opacity-80">
            <h1 className="text-2xl mb-10 font-bold text-center">Leaderboard</h1>
            { leaderboard.length === 0 ? (
                <h5 className="text-xl mt-10">No players have played yet</h5>
            ) : (
                <div className="flex flex-col w-full gap-12 even:bg-opacity-90">
                    { leaderboard.map(score => (
                        <div data-testid="leaderboard-row" className="grid grid-cols-3" key={score.id}>
                            <p className="text-center font-bold">{ score.name }</p>
                            <p className="text-center font-bold text-red-500 text-2xl">{ score.score }</p>
                            <p className="text-center">{ moment(score.createdAt).format("DD-MM-YYYY HH:mm:ss") }</p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}