import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class TopBar extends Component {
  render () {
    const { navigator, reset } = this.props
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigator.pop()}>
          <Text style={styles.button}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={reset}
        >
          <Text style={styles.button}>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
    marginTop: 4
  },
  button: {
    borderColor: '#bc8afe',
    borderRadius: 6,
    borderWidth: 1,
    color: '#bc8afe',
    fontSize: 21,
    textAlign: 'center',
    width: 75
  }
})
