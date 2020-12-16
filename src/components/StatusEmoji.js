import React from 'react';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';

export default function StatusEmoji({value, size, color}) {
  switch (value) {
    case -1:
      return (
        <FA5Icon name="frown" color={color ? color : '#ffbd15'} size={size} />
      );

    case -2:
      return (
        <FA5Icon
          name="sad-tear"
          color={color ? color : '#f0680e'}
          size={size}
        />
      );
    case -3:
      return (
        <FA5Icon name="sad-cry" color={color ? color : '#f03333'} size={size} />
      );
    case 0:
      return (
        <FA5Icon
          name="smile-beam"
          color={color ? color : 'green'}
          size={size}
        />
      );
  }
}
