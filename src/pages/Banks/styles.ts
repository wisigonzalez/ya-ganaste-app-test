import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {IS_ANDROID} from '../../constants';
import {resPixel, resText} from '../../utils';

export const BanksStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: resPixel(20),
    paddingRight: resPixel(20),
    backgroundColor: Colors.white,
  },
  welcomeText: {
    color: Colors.black,
    fontFamily: 'Avenir',
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(20) : resText(18),
    lineHeight: IS_ANDROID ? resText(30) : resText(27),
  },
  welcomeName: {
    color: Colors.black,
    fontFamily: 'Avenir',
    marginTop: resPixel(-8),
    fontSize: IS_ANDROID ? resText(16) : resText(14),
    lineHeight: IS_ANDROID ? resText(30) : resText(27),
  },
  sectionOne: {
    color: '#9B9898',
    fontFamily: 'Avenir',
    marginTop: resPixel(10),
    lineHeight: resText(19),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(14) : resText(12),
  },
  cardContainer: {
    marginTop: resPixel(20),
  },
  sectionTwo: {
    color: '#9B9898',
    fontFamily: 'Avenir',
    marginTop: resPixel(25),
    lineHeight: resText(19),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(14) : resText(12),
  },
  listContainer: {
    flex: 1,
    marginTop: resPixel(24),
  },
});
