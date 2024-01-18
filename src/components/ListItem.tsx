import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';
import {weatherType} from '../utils/weatherType';
import moment from 'moment';

const ListItem = ({dt_txt, min, max, condition}) => {
  const {item, temp, date} = styles;

  return (
    <View style={item}>
      <Feather
        name={weatherType[condition]?.icon}
        size={50}
        color={'#737676'}
      />
      <View style={styles.dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>

      {/* <Text>{condition}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#B8E3E5',
    borderRadius: 20,
  },
  dateTextWrapper: {
    flexDirection: 'column',
  },
  temp: {
    color: 'black',
    fontSize: 20,
  },
  date: {
    color: 'black',
    fontSize: 15,
  },
});

export default ListItem;
