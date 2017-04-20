import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { AI_MODE, DRAW, LOSE, WIN } from '../core'

export default class Display extends Component {
  render () {
    const { count, board, result } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Round {count}</Text>

        <View>{this.newBoard(board)}</View>

        <Text style={styles.result}>{this.showResult(result)}</Text>
      </View>
    )
  }

  newBoard (board) {
    const newBoard = []

    for (let i = 0, j = 0; i < board.length; i += 3, j += 1) {
      newBoard.push(this.newRow(j, [board[i], board[i + 1], board[i + 2]]))
    }

    return newBoard
  }

  newColumn (i, j, cell) {
    const { endTurn, endAiTurn, mode } = this.props
    const key = i * 3 + j
    const style = [styles.boardColumn]

    if (i === 2) {
      style.push(styles.noBottomBorder)
    }

    if (j === 2) {
      style.push(styles.noRightBorder)
    }

    return (
      <View key={j} style={style}>
        <TouchableHighlight
          activeOpacity={0}
          onPress={() => {
            endTurn(key)
            mode === AI_MODE && setTimeout(() => endAiTurn(), 333)
          }}
          style={styles.boardTouch}
          underlayColor={'#9b5e5e7f'}
        >
          <Text key={key} style={styles.boardCell}>{cell}</Text>
        </TouchableHighlight>
      </View>
    )
  }

  newRow (i, columns) {
    const newColumns = []

    for (let j = 0; j < columns.length; j += 1) {
      newColumns.push(this.newColumn(i, j, columns[j]))
    }

    return (<View key={i} style={styles.boardRow}>{newColumns}</View>)
  }

  showResult (result) {
    if (result === DRAW) {
      return `It's a draw!`
    } else if (result === LOSE) {
      return 'Player O wins!'
    } else if (result === WIN) {
      return 'Player X wins!'
    }

    return ' '
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  boardCell: {
    color: '#ec6e56',
    fontSize: 60,
    textAlign: 'center'
  },
  boardColumn: {
    alignItems: 'center',
    borderColor: '#71b49a',
    borderBottomWidth: 2,
    borderRightWidth: 2,
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    width: 100
  },
  boardRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  boardTouch: {
    borderRadius: 40,
    height: 80,
    width: 80
  },
  noBottomBorder: {
    borderBottomWidth: 0
  },
  noRightBorder: {
    borderRightWidth: 0
  },
  result: {
    color: '#f0eeda',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    color: '#f0eeda',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
