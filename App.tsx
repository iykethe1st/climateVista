import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CurrentWeather from './src/components/currentWeather/CurrentWeather';

export default function App() {
  return (
    <View style={styles.container}>
      <CurrentWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
