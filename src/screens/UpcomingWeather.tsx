import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        id: 500,
        main: 'Wind',
        description: 'light rain',
        icon: '10d',
      },
    ],
  },

  {
    dt_txt: '2022-08-31 16:00:00',

    main: {
      temp: 296.31,
      feels_like: 296.07,
      temp_min: 296.2,
      temp_max: 296.31,
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d',
      },
    ],
  },

  {
    dt_txt: '2022-09-03 15:00:00',
    main: {
      temp: 294.14,
      feels_like: 293.99,
      temp_min: 4.14,
      temp_max: 9.14,
    },
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04d',
      },
    ],
  },
];

const UpcomingWeather = () => {
  const renderItem = ({item}) => (
    <ListItem
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
      condition={item.weather[0].main}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/hd-clouds.jpeg')}
        style={styles.image}>
        <Text>UpcomingWeather</Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#0ABFC9',
  },

  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
