import { GameOver, GameStart, IncScore, Tick } from "../actions";

type GameState = {
    score: number;
    inProgress: boolean;
    finished: boolean;
    timer: number;
}

type Action = GameStart | GameOver | IncScore | Tick;

export const initialState: GameState = {
    score: 0,
    inProgress: false,
    finished: false,
    timer: 120,
}

const gameReducer = (state: GameState = initialState, action: Action): GameState => {
    switch(action.type) {
        case "GAME_START":
            return { ...initialState, inProgress: true };
        case "TICK":
            return { ...state, timer: state.timer > 0 ? state.timer - 1 : 0 }
        case "INC_SCORE":
            return { ...state, score: state.score + 100 }
        case "GAME_OVER":
            return { ...state, inProgress: false, finished: true };
        default:
            return state;
    }
}

export default gameReducer;