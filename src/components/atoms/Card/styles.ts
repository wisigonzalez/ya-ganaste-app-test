import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {IS_ANDROID} from '../../../constants';
import {resPixel, resText} from '../../../utils';

export const CardStyles = StyleSheet.create({
  container: {
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
    shadowRadius: 4,
    borderRadius: 20,
    shadowOpacity: 0.5,
    minWidth: resPixel(286),
    minHeight: resPixel(143),
    marginLeft: resPixel(28),
    marginRight: resPixel(28),
    shadowColor: Colors.black,
    backgroundColor: '#334FFA',
  },
  title: {
    color: Colors.white,
    fontFamily: 'Avenir',
    marginTop: resPixel(21),
    lineHeight: resText(22),
    marginLeft: resPixel(19),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(15) : resText(13),
  },
  value: {
    fontWeight: '900',
    color: Colors.white,
    alignSelf: 'center',
    fontFamily: 'Avenir',
    marginTop: resPixel(7),
    minWidth: resPixel(191),
    lineHeight: resText(44),
    fontSize: IS_ANDROID ? resText(29) : resText(26),
  },
});
