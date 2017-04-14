import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PushNotification from 'react-native-push-notification'

import Home from './containers/Home'
import Game from './containers/Game'
import reducer from './reducers'
import { initialState } from './core'

const store = createStore(reducer, initialState())

export default class TicTacToe extends Component {
  render () {
    const routes = [
      { idx: 0, component: Home },
      { idx: 1, component: Game }
    ]
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={routes[0]}
          initialRouteStack={routes}
          renderScene={(route, navigator) =>
            <route.component {...{ navigator, routes }} />
          }
        />
      </Provider>
    )
  }

  componentDidMount () {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token)
      },
      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification)
      },
      senderID: '557348270362'
    })
  }
}

AppRegistry.registerComponent('TicTacToe', () => TicTacToe)
