import React from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {RowItem} from '../../components/RowItem';

export default ({navigation}) => (

  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Space',
          
          color: '#36b1f0',
        })
      }
    /> 
    <RowItem
      name="Computers"
      color="#49475B"
      onPress={() =>
        navigation.navigate('Quiz', {
          title: 'Computers',
        
          color: '#49475B',
        })
      }
    />
  </ScrollView>
);
