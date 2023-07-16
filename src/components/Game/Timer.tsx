"use client"

import { endGame, tick } from "@/store/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";

export default function Timer() {
    const timer = useAppSelector(state => state.game.timer);
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (timer === 0) {
            dispatch(endGame());
        } else {
            setTimeout(() => {
                dispatch(tick());
            }, 1000)
        }

    }, [dispatch, timer])

    return (
        <div>
            <h1 className="text-4xl font-bold">{ timer }s</h1>
        </div>
    )
}