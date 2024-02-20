import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import Dashboard from './screens/Dashboard';
import Map from './screens/Map';
import SmsCommands from './screens/SmsCommands';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar } from 'react-native-ui-lib';
import { colorPalletes } from './theme/colorPalletes';
// import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const homeIcon = (
//   <Icon
//     name="facebook"
//     backgroundColor="#3b5998"
//   // onPress={this.loginWithFacebook}
//   >
//     Login with Facebook
//   </Icon>
// );

const Tab = createBottomTabNavigator();

function MyTab() {
  const dimensions = useWindowDimensions();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      backBehavior='initialRouteName'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        // headerShown: false,
        // drawerStyle: {
        //   backgroundColor: '#c6cbef',
        //   width: 240,
        // },
        headerStyle: {
          backgroundColor: "#0064fa",
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: '900',
          // color: '#0064fa'
        },
        tabBarStyle: {
          backgroundColor: "#fff",
          
        },
        // tabBarActiveTintColor: "#0064fa",
        // tabBarInactiveTintColor: 'black'
      }}

    >
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          title: 'Family Care',
          // headerTitle: (props) => <LogoTitle {...props}/>,
          // headerLeft: (props) => <LogoTitle {...props}/>,
          headerRight: (props) => <LogoTitle {...props} />,
          headerTitleStyle: {
            // flex: 1, 
            // alignItems: 'center',
            // justifyContent: 'center'
          },

        }}

      />
      <Tab.Screen name="Map Locator" component={Map}
        options={{
          tabBarLabel: "Map",
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Controls" component={SmsCommands}
        options={{
          title: '',
          tabBarLabel: "Controls",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="apple-keyboard-command" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={Settings} 
      options={{
        title: '',
        tabBarLabel: "Settings",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cog" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        title: '',
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-box" color={color} size={size} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

// Custom header Title
function LogoTitle() {
  return (
    <View style={{ padding: 20 }}>
      <Avatar
        source={require('./assets/images/profile.jpg')}
        size={50}
        onPress={() => alert("You are about to open Profile page")}
        label='Avatar'
      />
    </View>

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
      <StatusBar style="light" />
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
