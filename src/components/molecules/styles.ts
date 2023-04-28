import {StyleSheet} from 'react-native';

import {IS_ANDROID} from '../../constants';
import {resPixel, resText} from '../../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const ListItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: resPixel(15),
  },
  image: {
    borderRadius: 10,
    width: resPixel(55),
    height: resPixel(55),
    marginRight: resPixel(10),
  },
  leftContentSide: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    color: Colors.black,
    fontFamily: 'Avenir',
    lineHeight: resText(19),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(14) : resText(12),
  },
  date: {
    color: Colors.black,
    fontFamily: 'Avenir',
    lineHeight: resText(16),
    fontWeight: IS_ANDROID ? '500' : '400',
    fontSize: IS_ANDROID ? resText(12) : resText(10),
    marginTop: IS_ANDROID ? resPixel(13) : resPixel(10),
  },
  arrow: {
    color: Colors.black,
    fontFamily: 'Avenir',
    marginTop: resPixel(2),
    lineHeight: resText(19),
    marginLeft: resPixel(20),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(19) : resText(14),
  },
});
