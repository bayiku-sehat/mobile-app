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

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

export default function HomeNavItem({
  icon = 'Ionicons',
  name,
  size = 30,
  text,
  onPress,
  borderBottom = true,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.navItem}>
        <View style={styles.navIcon}>
          {icon === 'Ionicons' ? (
            <Icon name={name} size={size} />
          ) : (
            <MaterialCommunityIcon name={name} size={size} />
          )}
        </View>
        <View style={styles.navTextContainer}>
          <Text style={styles.navText}>{text}</Text>
        </View>
        <View style={styles.navArrow}>
          <Icon name="ios-arrow-forward" size={size} />
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
    width: 50,
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
