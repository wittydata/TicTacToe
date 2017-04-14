import { endTurn, nextRound, initialState } from '../core'

export default (state, action) => {
  switch (action.type) {
    case 'END_TURN':
      return { ...endTurn(state, action.move) }
    case 'NEXT_ROUND':
      return { ...nextRound(state) }
    case 'RESET':
      return { ...state, ...initialState() }
    default:
      return state
  }
}
