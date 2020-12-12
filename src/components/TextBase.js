/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function TextBase({
  children,
  style,
  size,
  color = '#686868',
  bold = false,
  light = false,
  ...props
}) {
  console.log(props, '<<<< props textbase');
  return (
    <Text
      style={[
        styles.textDefault,
        {fontSize: size ? size : 14},
        {fontWeight: bold ? '700' : '500'},
        {color: light ? '#888' : color},
        {...props},
        style,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textDefault: {
    fontSize: 14,
  },
});
