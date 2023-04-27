import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Banks} from './Banks';
import {BanksType} from '../types';
import {incomesGenerator} from '../../utils';
import {useGetAllBanks} from '../../hooks/useGetAllBanks';

const BanksLoad = () => {
  const navigation = useNavigation();
  const [banks, setBanks] = useState<Array<BanksType>>([]);

  const {data: allBanks} = useGetAllBanks();

  useEffect(() => {
    setBanks(allBanks);
  }, [allBanks]);

  const incomes = incomesGenerator();

  return <Banks navigation={navigation} banks={banks} incomes={incomes} />;
};

export {BanksLoad};
