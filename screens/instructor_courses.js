import Course from '../components/Course';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FAB} from 'react-native-paper';

class InstructorCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>  </Text>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Create Course')}
        />
      </View>
    );
  }
}

export default function (props) {
  const navigation = useNavigation();

  return <InstructorCourses {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
