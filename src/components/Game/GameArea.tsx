import { startGame } from "@/store/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import Mole from "./Mole";
import Timer from "./Timer";

export default function GameArea() {
    const game = useAppSelector(state => state.game);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(startGame());
    }, [dispatch])

    return (
        <>
            <div className="flex justify-between">
                <div className="max-w-[150px]">
                    <h1 data-testid="score-heading" className="text-3xl text-center font-extrabold text-red-500">Score</h1>
                    <h1 data-testid="current-score" className="text-4xl text-center font-extrabold">{ game.score }</h1>
                </div>
                <Timer />
            </div>
            <div className="grid grid-cols-4 self-center gap-28">
                { new Array(12).fill(1).map((_mole, index) => (
                    <Mole key={index} />
                ))}
            </div>
        </>
    )
}