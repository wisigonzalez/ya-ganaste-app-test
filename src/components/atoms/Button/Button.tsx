import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {ButtonProps} from './types';
import {ButtonStyles} from './styles';

const Button = ({
  text = 'Boton',
  testId = 'button-id',
  handleOnPress,
}: ButtonProps): JSX.Element => {
  const styles = ButtonStyles;

  return (
    <TouchableOpacity
      testID={testId}
      style={styles.container}
      onPress={handleOnPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export {Button};
