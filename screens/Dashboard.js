import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SimpleMap from '../components/SimpleMap'
import MapView from 'react-native-maps'
import Map from './Map'

export default function Dashboard() {
  return (
    <View style={styles.container} > 
      {/* <Text>Dashboard</Text> */}
      {/* <MapView style={styles.map}/> */}
      <Map style={styles.map}/>
      {/* <View style={styles.control}>
        <Text >Control</Text>
      </View> */}
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  map: {
    width: '100%',
    height: '40%',
  },
  control: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});