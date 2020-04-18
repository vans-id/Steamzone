import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shared/Header';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#171A21',
        },
        // headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header
                navigation={navigation}
                title='SteamZone'
              />
            ),
          };
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
  );
}
