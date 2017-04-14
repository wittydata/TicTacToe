import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Choices extends Component {
  render () {
    const { nextRound, round: { result, turn } } = this.props

    if (result === '') {
      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>It's Your Turn</Text>
            <Text style={styles.description}>{turn}</Text>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={nextRound}>
            <Text style={styles.button}>Next Round</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 0,
    height: 80,
    justifyContent: 'space-around'
  },
  button: {
    borderColor: '#bc8afe',
    borderRadius: 6,
    borderWidth: 1,
    color: '#bc8afe',
    fontSize: 21,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    width: 180
  },
  description: {
    color: '#9292fe',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    color: '#9292fe',
    fontSize: 21,
    textAlign: 'center'
  }
})
