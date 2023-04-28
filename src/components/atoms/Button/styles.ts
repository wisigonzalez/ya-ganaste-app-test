import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {IS_ANDROID} from '../../../constants';
import {resPixel, resText} from '../../../utils';

export const ButtonStyles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: resPixel(50),
    justifyContent: 'center',
    backgroundColor: '#334FFA',
  },
  text: {
    fontWeight: '900',
    color: Colors.white,
    textAlign: 'center',
    fontFamily: 'Avenir',
    lineHeight: resText(22),
    fontSize: IS_ANDROID ? resText(16) : resText(14),
  },
});
