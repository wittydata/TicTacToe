export const endTurn = (move) => ({
  type: 'END_TURN',
  move
})

export const endAiTurn = () => ({
  type: 'END_AI_TURN'
})

export const nextRound = () => ({
  type: 'NEXT_ROUND'
})

export const reset = () => ({
  type: 'RESET'
})

export const setMode = (mode) => ({
  type: 'SET_MODE',
  mode
})
