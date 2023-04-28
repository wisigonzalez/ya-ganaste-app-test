import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Banks} from './Banks';
import {BanksType} from '../types';
import {useGetAllBanks} from '../../hooks/useGetAllBanks';
import {getKey, setKey, incomesGenerator} from '../../utils';

const BanksLoad = () => {
  const incomes = incomesGenerator();
  const navigation = useNavigation();
  const [hasKey, setHasKey] = useState(false);
  const [banks, setBanks] = useState<BanksType[]>([]);

  useEffect(() => {
    const getDataFromLocal = async () => {
      const value = await getKey('banks');
      if (value !== null) {
        const valueParsed = JSON.parse(value);
        if (valueParsed?.length > 0) {
          setHasKey(true);
        }
      }
    };

    getDataFromLocal();
  }, []);

  const {data: allBanks} = useGetAllBanks(hasKey);

  useEffect(() => {
    if (!hasKey) {
      setBanks(allBanks);
      if (allBanks?.length > 0) {
        const setDataOnLocal = async () => {
          await setKey('banks', JSON.stringify(allBanks));
        };

        setDataOnLocal();
      }
    } else {
      const getDataFromLocal = async () => {
        const value = await getKey('banks');
        if (value !== null) {
          const valueParsed = JSON.parse(value);
          if (valueParsed?.length > 0) {
            setBanks(valueParsed);
          }
        }
      };

      getDataFromLocal();
    }
  }, [allBanks, hasKey]);

  return <Banks navigation={navigation} banks={banks} incomes={incomes} />;
};

export {BanksLoad};
