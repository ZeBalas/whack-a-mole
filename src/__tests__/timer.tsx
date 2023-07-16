import Timer from "@/components/Game/Timer"
import { tick } from "@/store/actions";
import { render, screen } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux"
import { store } from '../store/index'
import * as actions from "@/store/actions"

describe('Timer', () => {
    it('renders a timer starting at 120s', () => {
        render(
            <Provider store={store}>
                <Timer />
            </Provider>
        )
    
        const leaderboard = screen.getByRole('heading', {
            name: /120s/i,
        })
   
        expect(leaderboard).toBeDefined()
    })

    it('stops timer at 0', () => {
        render(
            <Provider store={store}>
                <Timer />
            </Provider>
        )

        for (let i = 0; i < 120; i++) {
            act(() => store.dispatch(tick()))
        }
    
        const leaderboard = screen.getByRole('heading', {
            name: /0s/i,
        })
   
        expect(leaderboard).toBeDefined()
    })
})