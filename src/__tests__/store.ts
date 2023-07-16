import { endGame, startGame, tick, whack } from "@/store/actions";
import gameReducer, { initialState } from "@/store/reducers";

describe("Reducer", () => {
    it("should return a game in progess with startGame action", () => {
        const state = gameReducer(initialState, startGame());
        expect(state.inProgress).toBe(true);
        expect(state.finished).toBe(false);
        expect(state.timer).not.toBe(0);
    })

    it("should decrement timer with tick action", () => {
        const state = gameReducer(initialState, tick());
        expect(state.timer).toBe(initialState.timer - 1);
    })

    it("should not decrement timer if timer is already 0", () => {
        const state = gameReducer({ ...initialState, timer: 0 }, tick());
        expect(state.timer).toBe(0);
    })

    it("should increment score with whack action", () => {
        const state = gameReducer(initialState, whack());
        expect(state.score).toBe(initialState.score + 100);
    })

    it("should end a game with endGame action", () => {
        const state = gameReducer(initialState, endGame());
        expect(state.inProgress).toBe(false);
        expect(state.finished).toBe(true);
    })
})