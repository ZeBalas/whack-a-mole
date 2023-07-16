import StartGameButton from "@/components/StartGameButton";
import Leaderboard from "@/components/Leaderboard";

export default function Home() {

  return (
    <main>
      <div className="w-max m-auto pt-10">
        <StartGameButton />
      </div>
      <Leaderboard />
    </main>
  )
}
