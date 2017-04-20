import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Stats extends Component {
  render () {
    const { draw, lose, win } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          <Text style={styles.bold}>X Win:</Text> <Text>{win}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>Draw:</Text> <Text>{draw}</Text>
        </Text>

        <Text style={styles.text}>
          <Text style={styles.bold}>O Win:</Text> <Text>{lose}</Text>
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bold: {
    fontWeight: 'bold'
  },
  text: {
    color: '#f0eeda',
    fontSize: 21
  }
})
