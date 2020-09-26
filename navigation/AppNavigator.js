import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import LoginStudent from '../screens/LoginStudent';
import LoginInstructor from '../screens/LoginInstructor';

const MyStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator headerMode="none">
        <MyStack.Screen name="SignUp" component={Signup} />
        <MyStack.Screen name="LoginStudent" component={LoginStudent} />
        <MyStack.Screen name="LoginInstructor" component={LoginInstructor} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
