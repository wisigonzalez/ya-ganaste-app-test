import {StyleSheet} from 'react-native';

import {resPixel, resText} from '../../utils';

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
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(12),
    lineHeight: resText(19),
  },
  date: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(10),
    marginTop: resPixel(10),
    lineHeight: resText(16),
  },
  arrow: {
    fontWeight: '900',
    fontStyle: 'normal',
    fontFamily: 'Avenir',
    fontSize: resText(14),
    marginTop: resPixel(2),
    lineHeight: resText(19),
    marginLeft: resPixel(20),
  },
});
