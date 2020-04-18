import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
          name='Home'
          component={HomeStack}
        />
        <Drawer.Screen
          name='About'
          component={AboutStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
