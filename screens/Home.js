import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { globalStyles } from '../styles/Global';
import {
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: 'Resident Evil 3 (Remake)',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Subnautica : Below Zero',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Green Hell',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                'ReviewDetails',
                item
              )
            }
          >
            <Text style={globalStyles.titleText}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
