import { View, Text } from 'react-native'
import React from 'react'

const defaultLocation = { lat: 34.0522, lng: -118.2437 };

const Marker =() => {
  return(
    <View>
      <Text>Marker</Text>
    </View>
  )
}

export default function Map() {
  return (
    <View style={{ height: '50vh', width: '100%', backgroundColor: 'blue'}}>
      <Marker/>
    </View>
  )
}