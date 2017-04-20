const EMPTY_CELL = ''
const O_TURN = 'O'
const X_TURN = 'X'

export const AI_MODE = 'ai'
export const LOCAL_MODE = 'local'
export const DRAW = 'draw'
export const LOSE = 'lose'
export const WIN = 'win'

export function endTurn (currentState, move) {
  const mode = currentState.mode
  const newState = currentState[mode]
  const newBoard = [ ...newState.board ]
  let { moveCount, result, turn, draw, lose, win } = newState

  if (result !== '') {
    return currentState
  }

  if (newBoard[move] === EMPTY_CELL) {
    newBoard[move] = turn
    turn = nextTurn(turn)

    if (moveCount > 3) {
      result = getResult(newBoard)

      if (result === DRAW) {
        draw += 1
      }

      if (result === LOSE) {
        lose += 1
      }

      if (result === WIN) {
        win += 1
      }
    }

    moveCount += 1
  }

  currentState[mode] = { ...newState, board: newBoard, moveCount, result, turn, draw, lose, win }
  return { ...currentState }
}

export function endAiTurn (currentState) {
  const state = currentState[AI_MODE]
  const { board, result } = state

  if (state.turn === X_TURN) {
    return currentState
  }

  var availableNextMoves = getAvailableMoves(board).map((move) => {
    return { move, score: minimaxValue(endTurn({ ...currentState }, move)) }
  })

  availableNextMoves.sort((a, b) => {
    return a.score - b.score
  })

  if (result !== '') {
    return currentState
  }

  return endTurn(currentState, availableNextMoves[0].move)
}

export function initialState () {
  return { ai: state(), local: state(), mode: AI_MODE }
}

export function nextRound (currentState) {
  const newState = currentState[currentState.mode]
  currentState[currentState.mode] = { ...newState, count: newState.count + 1, board: board(), moveCount: 0, result: '', turn: X_TURN }
  return { ...currentState }
}

function board () {
  const board = []

  for (let i = 0; i < 9; i += 1) {
    board[i] = EMPTY_CELL
  }

  return board
}

function nextTurn (turn) {
  return turn === X_TURN ? O_TURN : X_TURN
}

function getAvailableMoves (board) {
  const avaialableMoves = []
  board.forEach((cell, i) => (cell === EMPTY_CELL) && avaialableMoves.push(i))
  return avaialableMoves
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

function getScore (state) {
  const { result, moveCount } = state

  if (result === WIN) {
    return 10 - moveCount
  } else if (result === LOSE) {
    return -10 + moveCount
  } else {
    return 0
  }
}

function state () {
  return { count: 1, board: board(), moveCount: 0, result: '', turn: X_TURN, draw: 0, lose: 0, win: 0 }
}

function minimaxValue (currentState) {
  const state = currentState[AI_MODE]
  const { board, turn } = state

  if (getResult(board) !== '') {
    return getScore(state)
  } else {
    let moveScore

    if (turn === 'X') {
      moveScore = -1000
    } else {
      moveScore = 1000
    }

    let availableNextMoves = getAvailableMoves(board).map((move) => {
      return endTurn({ ...currentState }, move)
    })

    availableNextMoves.forEach((nextMove) => {
      const nextScore = minimaxValue(nextMove)

      if (turn === 'X') {
        if (nextScore > moveScore) {
          moveScore = nextScore
        }
      } else {
        if (nextScore < moveScore) {
          moveScore = nextScore
        }
      }
    })

    return moveScore
  }
}
