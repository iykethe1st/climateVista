import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CurrentWeather from './src/screens/CurrentWeather';
import UpcomingWeather from './src/screens/UpcomingWeather';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CurrentWeather /> */}
      <UpcomingWeather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
