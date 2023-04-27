import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {BanksDetails} from './BanksDetails';

const BanksDetailsLoad = (props: any) => {
  const navigation = useNavigation();
  const {bank} = props?.route?.params;

  return <BanksDetails navigation={navigation} bank={bank} />;
};

export {BanksDetailsLoad};
