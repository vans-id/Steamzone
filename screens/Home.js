import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { globalStyles } from '../styles/Global';
import Card from '../shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Resident Evil 3 (Remake)',
      rating: 5,
      body:
        'Resident Evil 3 is a survival horror game developed and published by Capcom. It is a remake of Resident Evil 3: Nemesis (1999) and follows Jill Valentine and Carlos Oliveira as they attempt to survive a zombie apocalypse while hunted by the intelligent bioweapon Nemesis. It was released on Microsoft Windows, PlayStation 4, and Xbox One on April 3, 2020. It also released alongside an online multiplayer game, Resident Evil: Resistance.',
      key: '1',
    },
    {
      title: 'Subnautica : Below Zero',
      rating: 4,
      body:
        'Dive into a freezing underwater adventure on an alien planet. Set one year after the original Subnautica, Below Zero challenges you to survive a disaster at an alien research station on Planet 4546B. Craft tools, scavenge for supplies, and unravel the next chapter in the Subnautica story.',
      key: '2',
    },
    {
      title: 'Green Hell',
      rating: 3,
      body:
        "Upon completing the tutorial, the first task listed in the players notebook is 'Find Mia', which prompts the player to begin exploring the Amazon rainforest and develop through the story. Many story items can be found throughout the game which add to the background of the story. Using Jake's visions and various story items this page attempts to place the assorted story pieces in to an chronological order.",
      key: '3',
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();

    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{
                ...styles.modalToggle,
                ...styles.modalClose,
              }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

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
            <Card>
              <Text style={globalStyles.titleText}>
                {item.title}
              </Text>
            </Card>
          </TouchableOpacity>
        )}
      />

      <MaterialIcons
        name='add'
        size={24}
        style={{}}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#00E676',
    backgroundColor: '#00E676',
    color: '#0D121A',
    padding: 15,
    borderRadius: 50,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#1B2838',
  },
});
