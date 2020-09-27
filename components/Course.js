import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Image, Card} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Course = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Content')}>
      <View style={{flexDirection: 'row', margin: 10, marginBottom: 1}}>
        <Image
          source={require('./React.jpeg')}
          style={{
            width: '45%',
            borderWidth: 1,
            borderColor: 'black',
            height: 140,
          }}
        />
        <View
          style={{
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 17,
              width: 170,
              color: 'black',
            }}
            numberOfLines={3}>
            React Native - The Practical Guide[2020]
          </Text>
          <Text style={{fontSize: 12, color: 'black'}}>
            {' '}
            Academind By Maximillan{' '}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Course;
