import React, {Component} from 'react'

import { 
  createStackNavigator,
  createAppContainer
 } from 'react-navigation'

import RestaurantList from 'components/RestaurantList'

import RestaurantInfo from 'components/RestaurantInfo'

const RootStack = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
})

const App = createAppContainer(RootStack);

export default App;