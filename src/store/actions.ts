export type GameStart = {
    type: "GAME_START"
}

export type GameOver = {
    type: "GAME_OVER"
}

export type IncScore = {
    type: "INC_SCORE"
}

export type Tick = {
    type: "TICK"
}

export const startGame = (): GameStart => {
    return {
        type: "GAME_START"
    }
}

export const tick = (): Tick => {
    return {
        type: "TICK"
    }
}

export const endGame = (): GameOver => {
    return {
        type: "GAME_OVER"
    }
} 

export const whack = (): IncScore => {
    return {
        type: "INC_SCORE"
    }
}