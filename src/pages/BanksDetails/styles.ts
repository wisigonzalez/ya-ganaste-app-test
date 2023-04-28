import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {IS_ANDROID} from '../../constants';
import {resPixel, resText} from '../../utils';

export const BanksDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CFD6FF',
  },
  containerTwo: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  titleContainer: {
    height: resPixel(120),
    marginLeft: resPixel(20),
    justifyContent: 'flex-end',
  },
  bank: {
    color: Colors.black,
    fontFamily: 'Avenir',
    lineHeight: resText(100),
    marginBottom: resPixel(-24),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(22) : resText(20),
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: resPixel(19),
    justifyContent: 'center',
  },
  image: {
    borderRadius: 10,
    width: resPixel(350),
    height: resPixel(350),
  },
  sectionOne: {
    color: '#9B9898',
    fontFamily: 'Avenir',
    lineHeight: resText(19),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(14) : resText(12),
  },
  usersText: {
    color: Colors.black,
    fontFamily: 'Avenir',
    marginTop: resPixel(6),
    lineHeight: resText(22),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(16) : resText(14),
  },
  sectionTwo: {
    color: '#9B9898',
    fontFamily: 'Avenir',
    lineHeight: resText(19),
    marginTop: resPixel(10),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(14) : resText(12),
  },
  descriptionText: {
    color: Colors.black,
    fontFamily: 'Avenir',
    marginTop: resPixel(10),
    fontWeight: IS_ANDROID ? '900' : '800',
    fontSize: IS_ANDROID ? resText(16) : resText(14),
    lineHeight: IS_ANDROID ? resText(24) : resText(20),
  },
  listContainer: {
    flex: 1,
    marginTop: resPixel(19),
    paddingLeft: resPixel(20),
    paddingRight: resPixel(20),
  },
  buttonContainer: {
    paddingLeft: resPixel(20),
    paddingRight: resPixel(20),
    justifyContent: 'flex-end',
    paddingBottom: resPixel(16),
  },
});
