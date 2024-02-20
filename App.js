import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import Dashboard from './screens/Dashboard';
import Map from './screens/Map';
import SmsCommands from './screens/SmsCommands';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTab() {
  const dimensions = useWindowDimensions();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      backBehavior='initialRouteName'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        // drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
      }}
      
    >
      <Tab.Screen 
      name="Dashboard" 
      component={Dashboard} 
      options={{ drawerLabel: 'Dashboard', title: 'Family Care', }}
      />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Chat" component={SmsCommands} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}


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
      <Drawer.Screen 
      name="Dashboard" 
      component={Dashboard} 
      options={{ drawerLabel: 'Dashboard', title: 'Family Care', }}
      />
      <Drawer.Screen name="Map" component={Map} />
      <Drawer.Screen name="Chat" component={SmsCommands} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      {/* <MyDrawer /> */}
      <MyTab />
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
