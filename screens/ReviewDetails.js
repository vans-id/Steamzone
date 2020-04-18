import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import {
  globalStyles,
  images,
} from '../styles/Global';
import Card from '../shared/Card';

export default function ReviewDetails({ route }) {
  const { title, rating, body } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content}>{body}</Text>
        <View style={styles.rating}>
          <Text style={styles.content}>
            SteamZone rating :{' '}
          </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 16,
  },
  content: {
    fontSize: 16,
    color: '#BFBDBB',
    lineHeight: 30,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#BFBDBB',
  },
});
