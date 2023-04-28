import {useEffect, useState} from 'react';

import {BankType} from './types';
import getENV from '../../enviroment';
import apiProvider from '../providers';

const {API_URL} = getENV();

export const useGetAllBanks = (hasKey: boolean) => {
  const [data, setData] = useState<BankType[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    if (!hasKey) {
      const fetchData = async () => {
        try {
          const response = await apiProvider.get(`${API_URL}/banks`);
          setData(response?.data as Array<BankType>);
          setIsLoading(false);
        } catch (error) {
          console.log('useGetAllBanks hook', error);
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [hasKey]);

  return {data, isLoading};
};
