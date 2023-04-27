import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {ListItemProps} from './types';
import {ListItemStyles} from './styles';
import {dateFormmatter} from '../../utils';

export const ListItem = ({item, handleOnPress}: ListItemProps): JSX.Element => {
  const style = ListItemStyles;
  const today = new Date().toISOString();

  const {age, url, bankName} = item;

  return (
    <TouchableOpacity onPress={handleOnPress} testID={`item-id-${age}`}>
      <View style={style.container}>
        <View style={style.leftContentSide}>
          <View>
            <Image
              style={style.image}
              source={{uri: url}}
              resizeMode="stretch"
            />
          </View>
          <View>
            <Text style={style.title}>{bankName}</Text>
            <Text style={style.date}>{dateFormmatter(today)}</Text>
          </View>
        </View>
        <Text style={style.arrow}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};
