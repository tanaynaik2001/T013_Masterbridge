import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
const Analytics = () => {
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [75, 80, 90, 85, 95, 80],
      },
    ],
  };

  return (
    <View>
      <Text
        style={{
          margin: 30,
          textAlign: 'center',
          fontSize: 25,
          fontStyle: 'italic',
        }}>
        Performance Report
      </Text>
      <LineChart
        data={data1}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisInterval={10}
        chartConfig={{
          backgroundColor: 'white',
          color: 'white',
          backgroundGradientFrom: '#ffa64d',
          backgroundGradientTo: '#ffa64d',
          decimalPlaces: 3, // optional, defaults to 2dp
          color: (opacity = 0.3) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa64d',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default Analytics;
