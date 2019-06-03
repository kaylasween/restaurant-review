import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

const restaurants = [
  {name: 'React Cafe', address: '123 Anywhere Street'},
  {name: 'Fancy Restaurant', address: '799 Main Street'},
  {name: 'Taco Place', address: '550 Maple Road'}
];

export default class App extends Component{
  render() {
    return (
      <View style={{
        flex: 1
      }}>
        <Text style={{
          padding: 40,
          fontSize: 30,
          textAlign: 'center',
          color: '#0066CC',
          fontWeight: '300'
        }}>Restaurant Review!</Text>

        {
          restaurants.map((place, index) => {
            return (
              <View key={place.name} style={{
                flexDirection: 'row'
              }}>
                <Text>{index + 1}</Text>
                <Text>{place.name}</Text>
                <Text style={{color: 'grey'}}>{place.address}</Text>
                <Text>Info</Text>
              </View>
            )
          })
        }
      </View>
    );
  }
}
