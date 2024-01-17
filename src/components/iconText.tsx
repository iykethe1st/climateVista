import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Feather} from '@expo/vector-icons';

export default function IconText({
  iconName,
  iconColor,
  bodyText,
  bodyTextStyle,
}) {
  const {container, textTheme} = styles;

  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[textTheme, bodyTextStyle]}>{bodyText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  textTheme: {
    fontWeight: 'bold',
  },
});
