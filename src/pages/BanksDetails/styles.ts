import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(20),
    lineHeight: resText(100),
    marginBottom: resPixel(-24),
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
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    lineHeight: resText(19),
  },
  usersText: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(14),
    lineHeight: resText(22),
    marginTop: resPixel(6),
  },
  sectionTwo: {
    color: '#9B9898',
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    lineHeight: resText(19),
    marginTop: resPixel(10),
  },
  descriptionText: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(14),
    lineHeight: resText(20),
    marginTop: resPixel(10),
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
    paddingBottom: resPixel(20),
  },
});
