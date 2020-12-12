import React from 'react';

import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import TextBase from './TextBase';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

export default function HomeNavItem({
  icon = 'Ionicons',
  name,
  size = 24,
  color = '#585858',
  text,
  onPress,
  borderBottom = true,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.navItem}>
        <View style={styles.navIcon}>
          {icon === 'Ionicons' ? (
            <Icon name={name} size={size} color={color} />
          ) : (
            <MaterialCommunityIcon name={name} size={size} color={color} />
          )}
        </View>
        <View style={styles.navTextContainer}>
          <TextBase style={styles.navText}>{text}</TextBase>
        </View>
        <View style={styles.navArrow}>
          <Icon name="ios-arrow-forward" size={size} color={color} />
        </View>
      </View>
      {borderBottom && <View style={styles.borderBottom} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  navItem: {
    height: 72,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIcon: {
    width: 44,
  },
  navTextContainer: {
    flex: 1,
  },

  navText: {
    fontSize: 16,
  },
  navArrow: {
    width: 30,
    alignItems: 'flex-end',
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
