import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class Menu extends Component {
  render () {
    const { navigator, routes } = this.props
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigator.push(routes[1])}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>Local Battle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigator.push(routes[1])}
          style={styles.menuItem}
        >
          <Text style={styles.menuText}>Online Battle</Text>
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
    borderColor: '#bc8afe',
    borderRadius: 6,
    borderWidth: 1,
    color: '#bc8afe',
    fontSize: 21,
    textAlign: 'center',
    width: 180
  }
})
