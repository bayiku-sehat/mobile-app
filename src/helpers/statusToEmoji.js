import React from 'react';

import FA5Icon from 'react-native-vector-icons/FontAwesome5';

export default function statusToEmoji({value, style, index}) {
  console.log({value});
  switch (value) {
    case -1:
      return <FA5Icon name="frown" color="#ffbd15" size={18} />;

    case -2:
      return <FA5Icon name="sad-tear" color="#f0680e" size={18} />;
    case -3:
      return <FA5Icon name="sad-cry" color="#f03333" size={18} />;
    case 0:
      return <FA5Icon name="smile-beam" color="green" size={18} />;
  }
}
