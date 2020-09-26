import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
