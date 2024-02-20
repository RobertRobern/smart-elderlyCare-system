# FAMILYCARE APP

The general objectives of the Smart Elderly Care System is to enhance the overall well-being and quality of life for elderly individuals through the integration of advanced technologies.

## Docs
React Native Gesture Handler - https://docs.swmansion.com/react-native-gesture-handler/docs/
MapView - https://docs.expo.dev/versions/latest/sdk/map-view/

# Map

MapView - npx expo install react-native-maps
library - npm i google-map-react

# Online tool to generate color Palettes
coolors - https://coolors.co/0c7c59-07070a-006992-b8b8d1-001d4a

# Safe area
npx expo install react-native-safe-area-context

By default, React Navigation supports safe areas and uses react-native-safe-area-context as a peer dependency.

Use useSafeAreaInsets hook from react-native-safe-area-context instead of SafeAreaView component
Don't wrap your whole app in SafeAreaView, instead apply the styles to content inside your screens
Apply only specific insets using the useSafeAreaInsets hook for more control

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

``function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text style={{ fontSize: 28 }}>Content is in safe area.</Text>
    </View>
  );
}``

# component library of choice
React Native UI Lib - https://wix.github.io/react-native-ui-lib/

## Setup
npm install react-native-ui-lib
guide - https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/

## What is React Native Reanimated set up
Guide - https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/
(causes error at compile time) -> npm install react-native-reanimated |


# Charts
npm install --save chart.js react-chartjs-2
https://react-chartjs-2.js.org/

# tabs
npm install @react-navigation/bottom-tabs