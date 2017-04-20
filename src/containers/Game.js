import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import { endTurn, endAiTurn, nextRound, reset } from '../actions'
import BottomBar from '../components/BottomBar'
import Display from '../components/Display'
import Stats from '../components/Stats'
import TopBar from '../components/TopBar'

class Game extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TopBar {...this.props} />

        <Stats {...this.props} />

        <Display {...this.props} />

        <BottomBar {...this.props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3f3e5c',
    flex: 1,
    padding: 6
  }
})

const mapStateToProps = (state) => {
  const mode = state.mode
  return { ...state[mode], mode }
}

const mapDispatchToProps = {
  endTurn,
  endAiTurn,
  nextRound,
  reset
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
