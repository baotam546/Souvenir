import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'

const Stack = createStackNavigator()
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

export {SearchStackNavigator }