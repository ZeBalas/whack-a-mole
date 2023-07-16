"use client"

import GameArea from "@/components/Game/GameArea";
import LeaderboardInput from "@/components/Game/LeaderboardInput";
import { useAppSelector } from "@/store/hooks"

export default function Play() {
    const finished = useAppSelector(state => state.game.finished);

    return (
        <div className="flex flex-col p-10 gap-36 h-screen cursor-mallet">
            <GameArea />
            {finished && <LeaderboardInput />}
        </div>
    )
}