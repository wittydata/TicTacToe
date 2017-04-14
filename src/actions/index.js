export const endTurn = (move) => ({
  type: 'END_TURN',
  move
})

export const nextRound = () => ({
  type: 'NEXT_ROUND'
})

export const reset = () => ({
  type: 'RESET'
})
