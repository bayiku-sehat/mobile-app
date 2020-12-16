import React from 'react';

import {View, TextInput} from 'react-native';
import {t} from 'react-native-tailwindcss';

import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar({onChange, placeholder, ...props}) {
  return (
    <View style={[t.pL4, t.bgWhite, t.roundedFull, t.wFull, t.mB5, t.shadowXl]}>
      <View style={[t.flexRow, t.itemsCenter]}>
        <Icon name="ios-search" size={20} style={[t.textGray500, t.mR2]} />
        <TextInput
          onChange={onChange}
          placeholder={placeholder}
          props={{...props}}
        />
      </View>
    </View>
  );
}
