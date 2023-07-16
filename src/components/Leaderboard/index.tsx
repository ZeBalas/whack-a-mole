import { getLeaderboard } from "@/server";
import LeaderboardTable from "./LeaderboardTable";

export default async function Leaderboard() {
    const leaderboard = await getLeaderboard();

    return (
        <LeaderboardTable leaderboard={leaderboard} />
    )
}