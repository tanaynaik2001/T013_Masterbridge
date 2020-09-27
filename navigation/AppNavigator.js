import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from '../screens/Signup';
import LoginStudent from '../screens/LoginStudent';
import LoginInstructor from '../screens/LoginInstructor';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Courses from '../screens/Courses';
import Analytics from '../screens/Analytics';
import CourseDetails from '../screens/CourseDetails';
import Quiz from '../screens/Quiz';
import VideoScreen from '../screens/VideoScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import InstructorCourses from '../screens/instructor_courses';
import InstructorVideoScreen from '../screens/InstructorVideoScreen';
import InstructorCourseDetails from '../screens/InstructorCourseDetails';
import InstructorQuiz from '../screens/InstructorQuiz';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Content = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Video') {
            return (
              <MaterialIcons name="ondemand-video" size={28} color={color} />
            );
          } else if (route.name === 'Details') {
            return <Ionicons name="md-document" size={28} color={color} />;
          } else if (route.name === 'Quiz') {
            return (
              <MaterialIcons name="speaker-notes" size={28} color={color} />
            );
          } else {
            return <Ionicons name="trending-up" size={28} color={color} />;
          }
        },
      })}
      initialRouteName="Video">
      <Tab.Screen name="Video" component={VideoScreen} />
      <Tab.Screen name="Details" component={CourseDetails} />
      <Tab.Screen name="Quiz" component={Quiz} />
      <Tab.Screen name="Analytics" component={Analytics} />
    </Tab.Navigator>
  );
};

const StudentHomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Courses" component={Courses} />
      <Stack.Screen name="Content" component={Content} />
    </Stack.Navigator>
  );
};

const InstructorHomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InstructorCourses" component={InstructorCourses} />
      <Stack.Screen name="Create Course" component={InstructorCreateContent} />
    </Stack.Navigator>
  );
};

const InstructorCreateContent = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name === 'Upload Video') {
            return (
              <MaterialIcons name="ondemand-video" size={28} color={color} />
            );
          } else if (route.name === 'Upload Details') {
            return <Ionicons name="md-document" size={28} color={color} />;
          } else if (route.name === 'Upload Quiz') {
            return (
              <MaterialIcons name="speaker-notes" size={28} color={color} />
            );
          } else {
            return <Ionicons name="trending-up" size={28} color={color} />;
          }
        },
      })}
      initialRouteName="Upload Details">
      <Tab.Screen name="Upload Details" component={InstructorCourseDetails} />
      <Tab.Screen name="Upload Video" component={InstructorVideoScreen} />
      <Tab.Screen name="Upload Quiz" component={InstructorQuiz} />
      <Tab.Screen name="Analytics" component={Analytics} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="LoginStudent" component={LoginStudent} />
        <Stack.Screen name="LoginInstructor" component={LoginInstructor} />
        <Stack.Screen name="StudentHomescreen" component={StudentHomeScreen} />
        <Stack.Screen
          name="InstructorHomescreen"
          component={InstructorHomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
