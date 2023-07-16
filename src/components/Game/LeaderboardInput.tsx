import { addToLeaderboard } from "@/server";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { startGame } from "@/store/actions";

export default function LeaderboardInput() {
    const router = useRouter();
    const score = useAppSelector(state => state.game.score);
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await addToLeaderboard({ score, name });
        setIsSubmitting(false);
        setIsSubmitted(true);
    };
    
    return (
        <div className="absolute top-0 left-0 flex h-screen w-screen bg-white bg-opacity-70">
            <div className="flex flex-col justify-center items-center gap-12 bg-white rounded h-[420px] w-[720px] m-auto">
                <h1 className="text-2xl font-bold">You scored { score } points</h1>
                {!isSubmitted ? (
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                        <label>Enter your name</label>
                        <input
                        className="border-2 rounded p-2"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                        <button className="p-2 font-bold border-2 rounded border-black hover:scale-105 duration-100">
                            { !isSubmitting ? "Submit" : "Submitting..." }
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold text-center">Success!</h1>
                        <p className="text-center">Your name was successfully submitted</p>
                        <div className="flex gap-2 justify-between">
                            <button
                                className="p-2 font-bold border-2 rounded border-black hover:scale-105 duration-100"
                                onClick={() => router.push("/")}    
                            >
                                Leaderboard
                            </button>
                            <button
                                className="p-2 font-bold border-2 rounded border-black hover:scale-105 duration-100"
                                onClick={() => dispatch(startGame())}
                            >
                                Play again
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}