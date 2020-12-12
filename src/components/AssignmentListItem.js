import React from 'react';

import {View, TouchableOpacity, StyleSheet} from 'react-native';
import TextBase from './TextBase';

import Icon from 'react-native-vector-icons/Ionicons';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';

export default function AssignmentListItem({
  name,
  address,
  status,
  age,
  updatedAt,
  borderBottom = true,
}) {
  return (
    <View
      style={[styles.assignmentListItem, borderBottom && styles.borderBottom]}>
      <View style={styles.status}>
        {status === -1 ? (
          <FA5Icon name="frown" color="#ffbd15" size={32} />
        ) : status === -2 ? (
          <FA5Icon name="sad-tear" color="#f0680e" size={32} />
        ) : status === -3 ? (
          <FA5Icon name="sad-cry" color="#f03333" size={32} />
        ) : (
          <FA5Icon name="smile-beam" color="green" size={32} />
        )}
      </View>
      <TouchableOpacity style={{flex: 1}}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <TextBase bold size={16}>
              {name},
            </TextBase>
            <TextBase style={{marginLeft: 6}}>{address}</TextBase>
          </View>
          <TextBase>1 jam 25 menit</TextBase>
        </View>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="ios-person-add-outline" color="#1E88E5" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  assignmentListItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },

  status: {
    marginRight: 24,
  },
  actions: {
    justifyContent: 'center',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});
