import {waitFor} from '@testing-library/react-native';
import {renderHook} from '@testing-library/react-hooks';

import {useGetAllBanks} from './useGetAllBanks';

const mockData = [
  {
    age: 11,
    bankName: 'Banco 1',
    url: 'https://testimage.com',
    description: 'Banco 1 Es Para Todos',
  },
  {
    age: 22,
    bankName: 'Banco 2',
    url: 'https://testimage.com',
    description: 'Banco 2 Creando Oportunidades',
  },
];
describe('useGetAllBanks hook', () => {
  it('should fetch all banks', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useGetAllBanks());

    await waitForNextUpdate();

    await waitFor(() => {
      expect(result.current.data).toEqual(mockData);
    });
  });
});
