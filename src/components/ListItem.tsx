import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';

const ListItem = ({dt_txt, min, max, condition}) => {
  const {item, temp, date} = styles;

  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color={'#737676'} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
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
    borderWidth: 5,
    backgroundColor: '#B8E3E5',
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
