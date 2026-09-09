import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen';
import TutorialScreen from './screens/TutorialScreen';
import SolverScreen from './screens/SolverScreen';
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
            } else if (route.name === 'Tutorial') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'Solver') {
              iconName = focused ? 'puzzle' : 'puzzle-outline';
            } else if (route.name === 'Visualizer') {
              iconName = focused ? 'cube' : 'cube-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: '#999',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#e0e0e0',
            borderTopWidth: 1,
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Tutorial"
          component={TutorialScreen}
          options={{
            tabBarLabel: 'Learn',
          }}
        />
        <Tab.Screen
          name="Solver"
          component={SolverScreen}
          options={{
            tabBarLabel: 'Solve',
          }}
        />
        <Tab.Screen
          name="Visualizer"
          component={VisualizerScreen}
          options={{
            tabBarLabel: 'View',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
