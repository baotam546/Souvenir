import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from './StackNavigator';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{

        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
          header: () => <Header />,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator