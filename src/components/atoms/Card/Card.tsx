import React from 'react';
import {View, Text} from 'react-native';

import {CardProps} from './types';
import {CardStyles} from './styles';
import {numberFormatter} from '../../../utils';

const Card = ({title = '', value = 0, unit = '$'}: CardProps): JSX.Element => {
  const styles = CardStyles;

  return (
    <View testID="card-id" style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>
        {numberFormatter(value)} {unit}
      </Text>
    </View>
  );
};

export {Card};
