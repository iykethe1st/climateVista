import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CurrentWeather from './src/components/CurrentWeather';
import UpcomingWeather from './src/components/UpcomingWeather';

export default function App() {
  return (
    <View style={styles.container}>
      <CurrentWeather />
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
