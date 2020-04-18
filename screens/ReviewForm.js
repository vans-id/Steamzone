import React from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  Text,
  View,
} from 'react-native';
import { globalStyles } from '../styles/Global';
import { Formik } from 'formik';

export default function ReviewForm() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: '',
          body: '',
          rating: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Game Title'
              onChangeText={props.handleChange(
                'title'
              )}
              value={props.values.title}
            />
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder='Game Review'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            />
            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange(
                'rating'
              )}
              value={props.values.rating}
              keyboardType='numeric'
            />
            <Button
              title='submit'
              color='#ff1744'
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
