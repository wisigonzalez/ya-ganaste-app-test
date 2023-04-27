import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {resPixel, resText} from '../../utils';

export const BanksStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: resPixel(20),
    paddingRight: resPixel(20),
    paddingBottom: resPixel(20),
    backgroundColor: Colors.white,
  },
  welcomeText: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(18),
    lineHeight: resText(27),
  },
  welcomeName: {
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(14),
    marginTop: resPixel(-8),
    lineHeight: resText(27),
  },
  sectionOne: {
    color: '#9B9898',
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    marginTop: resPixel(10),
    lineHeight: resText(19),
  },
  cardContainer: {
    marginTop: resPixel(20),
  },
  sectionTwo: {
    color: '#9B9898',
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    marginTop: resPixel(25),
    lineHeight: resText(19),
  },
  listContainer: {
    flex: 1,
    marginTop: resPixel(24),
  },
});
