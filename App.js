import React, {Component} from 'react'
import {
  View,
  Text, 
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
  Image
} from 'react-native'

import Header from 'components/Header'

import RestaurantRow from 'components/RestaurantRow'

import PizzaImage from 'images/pizza.png'


export default class App extends Component{

  state = {
    search: null,
    restaurants: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/restaurants')
      .then(response => response.json())
      .then(result => this.setState({ restaurants: result }))
  }

  render() {

    return (
      <View style={{
        flex: 1
      }}>

        <View style={{
          marginTop: 40,
          alignItems: 'center'
        }}>
          <Image source={PizzaImage} />
        </View>
        <Header />
        <TextInput 
          style={styles.input} 
          placeholder="Live Search" 
          onChangeText={text => {
            this.setState({search: text})
          }}
          value={this.state.search}
        />

        <FlatList
          data={
            this.state.restaurants.filter(place => {
              return !this.state.search || 
                place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem={({ item, index }) => 
            <RestaurantRow place={item} index={index} />
          }
          keyExtractor={item => item.name}
          initialNumToRender={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444444',
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#F5F5F5'
  }
})