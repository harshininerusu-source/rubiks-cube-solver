import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import SolverScreen from './screens/SolverScreen';
import TutorialScreen from './screens/TutorialScreen';
import VisualizerScreen from './screens/VisualizerScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Solver') {
              iconName = focused ? 'puzzle' : 'puzzle-outline';
            } else if (route.name === 'Tutorial') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Visualizer') {
              iconName = focused ? 'cube' : 'cube-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: '#999',
          headerStyle: styles.header,
          headerTintColor: '#fff',
          headerTitleStyle: styles.headerTitle,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Rubik\'s Cube Solver' }}
        />
        <Tab.Screen
          name="Solver"
          component={SolverScreen}
          options={{ title: 'Solver' }}
        />
        <Tab.Screen
          name="Tutorial"
          component={TutorialScreen}
          options={{ title: 'Tutorial' }}
        />
        <Tab.Screen
          name="Visualizer"
          component={VisualizerScreen}
          options={{ title: 'Visualizer' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
