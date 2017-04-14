const EMPTY_CELL = ''
const O_TURN = 'O'
const X_TURN = 'X'

export const DRAW = 'draw'
export const LOSE = 'lose'
export const WIN = 'win'

export function endTurn (state, move) {
  const newRound = { ...state.round }
  const newStats = { ...state.stats }
  const newBoard = [ ...newRound.board ]

  if (newRound.moveCount > newBoard.length) {
    return state
  }

  if (newBoard[move] === EMPTY_CELL) {
    newBoard[move] = newRound.turn
    newRound.board = newBoard
    newRound.turn = nextTurn(newRound.turn)

    if (newRound.moveCount > 3) {
      const result = getResult(newBoard)
      newRound.result = result

      if (result === '') {
        newRound.moveCount += 1
      } else {
        if (result === DRAW) { newStats.draw += 1 }
        if (result === LOSE) { newStats.lose += 1 }
        if (result === WIN) { newStats.win += 1 }

        newRound.moveCount = 10
      }
    } else {
      newRound.moveCount += 1
    }
  }

  return { ...state, round: newRound, stats: newStats }
}

export function nextRound (state) {
  const newRound = round()
  newRound.count = state.round.count + 1
  return { ...state, round: newRound }
}

export function initialState () {
  return { round: round(), stats: stats() }
}

function board () {
  const board = []

  for (let i = 0; i < 9; i += 1) {
    board[i] = EMPTY_CELL
  }

  return board
}

function round () {
  return { count: 1, board: board(), moveCount: 0, result: '', turn: X_TURN }
}

function stats () {
  return { draw: 0, lose: 0, win: 0 }
}

function nextTurn (turn) {
  return turn === X_TURN ? O_TURN : X_TURN
}

function getResult (board) {
  // check rows
  for (let i = 0; i < 7; i += 3) {
    if (board[i] === X_TURN && board[i + 1] === X_TURN && board[i + 2] === X_TURN) {
      return WIN
    }

    if (board[i] === O_TURN && board[i + 1] === O_TURN && board[i + 2] === O_TURN) {
      return LOSE
    }
  }

  // check columns
  for (let i = 0; i < 3; i += 1) {
    if (board[i] === X_TURN && board[i + 3] === X_TURN && board[i + 6] === X_TURN) {
      return WIN
    }

    if (board[i] === O_TURN && board[i + 3] === O_TURN && board[i + 6] === O_TURN) {
      return LOSE
    }
  }

  // check diagonals
  for (let i = 0, j = 4; i < 3; i += 2, j -= 2) {
    if (board[i] === X_TURN && board[i + j] === X_TURN && board[i + 2 * j] === X_TURN) {
      return WIN
    }

    if (board[i] === O_TURN && board[i + j] === O_TURN && board[i + 2 * j] === O_TURN) {
      return LOSE
    }
  }

  const emptyCells = board.filter((cell) => cell === EMPTY_CELL)

  if (emptyCells.length > 0) {
    return ''
  } else {
    return DRAW
  }
}
