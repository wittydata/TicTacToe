import React, { Component } from 'react'
import { AppRegistry, Navigator } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Home from './containers/Home'
import Game from './containers/Game'
import reducer from './reducers'

const store = createStore(reducer)

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
}

AppRegistry.registerComponent('TicTacToe', () => TicTacToe)
