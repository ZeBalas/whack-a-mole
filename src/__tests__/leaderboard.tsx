import LeaderboardTable from "@/components/Leaderboard/LeaderboardTable"
import { Score } from "@prisma/client"
import { render, screen } from '@testing-library/react'
import { randomUUID } from "crypto"

const LEADERBOARD_MOCK: Score[] = [
    {
        id: randomUUID(),
        name: "John Doe",
        score: 6000,
        createdAt: new Date(),
    },
    {
        id: randomUUID(),
        name: "Jane Doe",
        score: 5500,
        createdAt: new Date(),
    }
]

describe('Leaderboard', () => {
    it('renders a "Leaderboard" heading', () => {
        render(
            <LeaderboardTable leaderboard={LEADERBOARD_MOCK} />
        )
    
        const leaderboard = screen.getByRole('heading', {
            name: /Leaderboard/i,
        })
   
        expect(leaderboard).toBeDefined()
    })

    it('renders all records in the leaderboard', async () => {
        render(
            <LeaderboardTable leaderboard={LEADERBOARD_MOCK} />
        )

        const leaderboard = await screen.findAllByTestId("leaderboard-row")
     
        expect(leaderboard.length).toBe(2)
    })

    it('renders a "empty records" message', async () => {
        render(
            <LeaderboardTable leaderboard={[]} />
        )

        const leaderboard = screen.getByRole('heading', {
            name: /No players have played yet/i,
        })
     
        expect(leaderboard).toBeDefined()
    })
  
})