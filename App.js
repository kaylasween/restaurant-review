import React, {Component} from 'react'

import { 
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
 } from 'react-navigation'

 import Icon from 'react-native-vector-icons/FontAwesome5'

import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'
import About from 'components/About'

const List = createStackNavigator({
  Home: { screen: RestaurantList },
  Info: { screen: RestaurantInfo }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#0066CC',
      color: '#FFF'
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      color: '#FFF'
    }
  }
})

const Tabs = createBottomTabNavigator({
  List: { screen: List },
  About: { screen: About }
}, {
  defaultNavigationOptions: ({ navigation }) => {
    return {
      tabBarIcon: ({ tintColor }) => {
        const route = navigation.state.routeName
        const name = {
          'List': 'list',
          'About': 'info-circle'
        }[route]
        return <Icon name={name} color={tintColor} size={22} />
      },
      tabBarOptions: {
        activeBackgroundColor: '#E6F0FA'
      }
    }
  }
})

const App = createAppContainer(Tabs)



export default App;