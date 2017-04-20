import { endTurn, endAiTurn, initialState, nextRound } from '../core'

export default (state = initialState(), action) => {
  switch (action.type) {
    case 'END_TURN':
      return { ...endTurn(state, action.move) }
    case 'END_AI_TURN':
      return { ...endAiTurn(state) }
    case 'NEXT_ROUND':
      return { ...nextRound(state) }
    case 'RESET':
      return { ...state, ...initialState() }
    case 'SET_MODE':
      return { ...state, mode: action.mode }
    default:
      return state
  }
}
