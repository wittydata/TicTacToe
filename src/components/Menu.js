import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { AI_MODE, LOCAL_MODE } from '../core'

export default class Menu extends Component {
  render () {
    const { navigator, routes, setMode } = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setMode(AI_MODE)
            navigator.push(routes[1])
          }}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>AI Battle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setMode(LOCAL_MODE)
            navigator.push(routes[1])
          }}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>Local Battle</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  menuItem: {
    marginBottom: 10
  },
  menuText: {
    borderColor: '#f0eeda',
    borderRadius: 6,
    borderWidth: 1,
    color: '#f0eeda',
    fontSize: 21,
    textAlign: 'center',
    width: 180
  }
})
