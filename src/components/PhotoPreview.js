import React from 'react';

import {View, Image, Text, StyleSheet} from 'react-native';

export default function PhotoPreview({uri, overlay, remaining}) {
  return (
    <>
      <View style={styles.imagePreviewListItem}>
        {overlay && (
          <View style={styles.overlayContainer}>
            <View style={styles.overlay} />
            <Text style={styles.textOverlay}>+{remaining}</Text>
          </View>
        )}
        <Image style={styles.imagePreview} source={{uri}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imagePreviewList: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around',
    width: '100%',
  },

  imagePreviewListItem: {
    borderRadius: 6,
    overflow: 'hidden',
  },

  overlayContainer: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    position: 'absolute',
  },

  overlay: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0F427D',
    position: 'absolute',
    opacity: 0.65,
  },

  textOverlay: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  imagePreview: {
    height: 64,
    aspectRatio: 1,
  },
});
