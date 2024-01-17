import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';

export default function IconText({
  iconName,
  iconColor,
  bodyText,
  bodyTextStyle,
}) {
  return (
    <View>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[styles.textTheme, bodyTextStyle]}>{bodyText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
});
