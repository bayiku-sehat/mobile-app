import React from 'react';

import {View, TouchableOpacity, StyleSheet} from 'react-native';
import TextBase from './TextBase';

import Icon from 'react-native-vector-icons/Ionicons';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';

export default function CaseListItem({
  name,
  address,
  status,
  age,
  updatedAt,
  borderBottom = true,
}) {
  return (
    <View style={[styles.caseListItem, borderBottom && styles.borderBottom]}>
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
            <TextBase style={{marginLeft: 6}}>{age} bulan</TextBase>
          </View>
          <TextBase>Last updated: {updatedAt}</TextBase>
        </View>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="ios-add" color="#1E88E5" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  caseListItem: {
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
