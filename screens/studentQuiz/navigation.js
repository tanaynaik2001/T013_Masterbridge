import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QuizIndex from './QuizIndex';
import Quiz from './quiz';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName="QuizIndex" headerMode="none">
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="QuizIndex" component={QuizIndex} />
    </Stack.Navigator>
  );
}
