import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from '../screens/About';
import Header from '../shared/Header';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#171A21',
        },
        headerTintColor: '#fff',
        // headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name='About'
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header
                navigation={navigation}
                title='About'
              />
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
}
