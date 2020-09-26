import Course from '../components/Course';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default class instructor_courses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> instructor_courses </Text>
      </View>
    );
  }
}
