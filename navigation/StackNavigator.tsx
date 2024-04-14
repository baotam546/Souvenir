import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';

const Stack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name='home'
                component={HomeScreen}
            />
            <Stack.Screen
                name='about'
                component={About}
            />
        </Stack.Navigator>
    )

}
const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name='search'
            component={SearchScreen}
        />
    </Stack.Navigator>
  )
}

export {SearchStackNavigator, MainStackNavigator }