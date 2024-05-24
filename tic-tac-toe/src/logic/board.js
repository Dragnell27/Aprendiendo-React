import { WINNING_COMBINATIONS } from "../constans"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNING_COMBINATIONS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a]
        }
    }
    return null
}