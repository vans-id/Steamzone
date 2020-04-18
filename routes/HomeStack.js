import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#171A21',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            title: 'SteamZone',
          }}
        />
        <Stack.Screen
          name='ReviewDetails'
          component={ReviewDetails}
          options={{
            title: 'Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
