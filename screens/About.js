import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/Global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.paragraph}>
        Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Magni saepe quasi deserunt
        neque reiciendis, adipisci similique eius
        repellendus consequuntur dolores, sint ab,
        soluta quisquam ipsum. Minima quaerat
        voluptates eligendi facilis?
      </Text>
      <Text style={globalStyles.paragraph}>
        Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Magni saepe quasi deserunt
        neque reiciendis, adipisci similique eius
        repellendus consequuntur dolores, sint ab,
        soluta quisquam ipsum. Minima quaerat
        voluptates eligendi facilis?
      </Text>
    </View>
  );
}
