import React from 'react';

import {View, Image, StyleSheet} from 'react-native';

import TextBase from './TextBase';

export default function PjCard({pj}) {
  return (
    <View style={styles.pjItem}>
      <View style={styles.photoPJContainer}>
        <Image
          style={styles.avatarPJ}
          source={{
            uri: pj.foto,
          }}
        />
      </View>
      <View style={{marginLeft: 10, justifyContent: 'center'}}>
        <TextBase bold size={16}>
          {pj.nama}
        </TextBase>
        <TextBase>{pj.role}</TextBase>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pjItem: {flexDirection: 'row', paddingVertical: 10, width: '47%'},

  photoPJContainer: {
    height: 44,
    width: 44,
    borderRadius: 100,
    overflow: 'hidden',
  },

  avatarPJ: {
    height: 44,
    width: 44,
  },
});
