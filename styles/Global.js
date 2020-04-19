import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#1B2838',
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#58C0F4',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 8,
    lineHeight: 30,
    color: '#BFBDBB',
  },
  input: {
    borderWidth: 1,
    borderColor: '#5CC0F4',
    color: '#fff',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: '#ff8a80',
    marginBottom: 10,
    marginTop: 6,
    marginLeft: 6,
  },
});

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  },
};
