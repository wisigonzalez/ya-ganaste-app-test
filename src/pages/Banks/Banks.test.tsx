import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Banks} from './Banks';

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
const mockIncomes = 765345;
const mockNavigation = {
  navigate: jest.fn(),
};

describe('Bank page', () => {
  it('should renders correctly', () => {
    const {getByTestId} = render(
      <Banks
        navigation={mockNavigation}
        banks={mockData}
        incomes={mockIncomes}
      />,
    );

    expect(getByTestId('container-id')).toBeDefined();
  });

  it('should calls navigation when item list is pressed', () => {
    const {getByTestId} = render(
      <Banks
        navigation={mockNavigation}
        banks={mockData}
        incomes={mockIncomes}
      />,
    );

    fireEvent.press(getByTestId(`item-id-${mockData[1].age}`));

    expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
  });
});
