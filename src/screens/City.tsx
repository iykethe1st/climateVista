import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';
import {AntDesign} from '@expo/vector-icons';
import IconText from '../components/iconText';

export default function City() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/hd-city.jpeg')}
        style={styles.imageLayout}>
        <Text style={[styles.cityName, styles.cityText]}>Chicago</Text>
        <Text style={[styles.countryName, styles.cityText]}>USA</Text>
        {/* <Text>City</Text> */}
        <View style={styles.populationWrapper}>
          <IconText
            iconName={'user'}
            iconColor={'black'}
            bodyText={'8000'}
            bodyTextStyle={styles.populationText}
          />
        </View>

        <View style={styles.riseSetWrapper}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            bodyText={'10:46:58am'}
            bodyTextStyle={styles.riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            bodyText={'17:51:28pm'}
            bodyTextStyle={styles.riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  populationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'black',
  },
  riseSetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
});
