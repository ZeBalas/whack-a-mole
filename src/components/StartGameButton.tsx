"use client"

import { useRouter } from "next/navigation"

export default function StartGameButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/play")
    }

    return (
        <button
            className="p-4 text-2xl font-bold border-2 rounded border-black hover:scale-105 duration-100"
            onClick={handleClick}
        >
            Start Game
        </button>
    )
}