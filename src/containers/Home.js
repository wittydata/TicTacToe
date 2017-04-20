import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { setMode } from '../actions'
import Menu from '../components/Menu'

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tic-tac-toe</Text>

        <Menu {...this.props} />
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  setMode
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#3f3e5c',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: '#ec6e56',
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 50
  }
})
