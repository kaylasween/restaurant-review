import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native'

import Stars from 'components/Stars'

export default class RestaurantRow extends Component {

    state = {
        showInfo: false
    }

    infoPressed = () => {
        // this.setState({ showInfo: !this.state.showInfo })
        this.props.navigation.navigate('Info')
    }

    render () {
        
        const {
            place, 
            index 
        } = this.props

        console.log('place', place)

        return (
            <View key={place.name} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7' }}>
                <View style={styles.row}>
                    <View style={styles.stars}>
                        <Stars rating={place.rating} /> 
                    </View>

                    <View style={styles.nameAddress}>
                        <Text>{place.name}</Text>
                        <Text style={styles.addressText}>{place.address}</Text>
                    </View>

                    <View style={styles.edges}>
                        <TouchableHighlight 
                            onPress={this.infoPressed} 
                            style={styles.button}
                            underlayColor='#5398DC'
                        >
                            <Text style={styles.buttonText}>Info</Text>
                        </TouchableHighlight>
                    </View>
                </View>

                {
                    this.state.showInfo &&
                    <View style={styles.info}>
                        <Text>Restaurant Info</Text>
                        <Image 
                            source={{ uri: `http://localhost:3000/images/${place.image}` }} 
                            style={{
                                flex: 1,
                                height: 100
                            }}
                            resizeMode="contain"
                        />
                    </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
      },
      edges: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        minWidth: 50
      }, 
      stars: {
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          padding: 5,
          minWidth: 50
      },
      nameAddress: {
        flexDirection: 'column',
        flex: 8
      },
      addressText: {
        color: 'grey'
      },
      button: {
        borderWidth: 1,
        borderColor: '#0066CC',
        borderRadius: 14,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: '#FFFFFF'
      },
      buttonText: {
        color: '#0066CC',
        fontSize: 12
      },
      info: {
          marginHorizontal: 40,
          marginVertical: 10,
          padding: 10,
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#DDDDDD',
          borderRadius: 4
      }
})