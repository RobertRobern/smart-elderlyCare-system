import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Dashboard from './screens/Dashboard';
import Map from './screens/Map';
import SmsCommands from './screens/SmsCommands';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Settings from './screens/Settings';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      backBehavior='initialRouteName'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      
    >

      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Map" component={Map} />
      <Drawer.Screen name="Chat" component={SmsCommands} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <MyDrawer />
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
