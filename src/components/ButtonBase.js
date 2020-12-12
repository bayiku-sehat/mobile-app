import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

TouchableOpacity.defaultProps = { activeOpacity: 0.8 }

const ButtonBase = ({
  onPress,
  title,
  size,
  backgroundColor,
  accessibilityLabel,
  // width,
  ...props
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.appButtonContainer,
      size && {
        paddingHorizontal:
          size === 'sm' ? 8 : size === 'lg' ? 14 : size === 'xl' ? 18 : '',
        paddingVertical:
          size === 'sm' ? 8 : size === 'lg' ? 10 : size === 'xl' ? 14 : '',
        elevation:
          size === 'sm' ? 8 : size === 'lg' ? 9 : size === 'xl' ? 10 : '',
      },
      // width && { width },
      backgroundColor && { backgroundColor },
      (accessibilityLabel = { accessibilityLabel }),
      { ...props },
    ]}
  >
    <Text style={[styles.appButtonText, size === 'sm' && { fontSize: 14 }]}>
      {title}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  appButtonContainer: {
    elevation: 8,
    // backgroundColor: '#841584',
    backgroundColor: '#1E88E5',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 16,
    color: '#fff',
    // fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
})

export default ButtonBase
