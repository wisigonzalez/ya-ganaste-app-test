import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {List} from './List';
import {ROUTES} from '../../navigators/routes';

const mockNavigation = {
  navigate: jest.fn(),
};
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

describe('List component', () => {
  it('should renders flatlist correctly', () => {
    const {getByTestId} = render(
      <List navigation={mockNavigation} data={mockData} />,
    );

    expect(getByTestId('flatlist-id')).toBeDefined();
  });

  it('should navigates to movements details when item is pressed', () => {
    const {getByTestId} = render(
      <List navigation={mockNavigation} data={mockData} />,
    );

    fireEvent.press(getByTestId(`item-id-${mockData[1].age}`));

    expect(mockNavigation.navigate).toHaveBeenCalledWith(ROUTES.BANKS_DETAILS, {
      bank: mockData[1],
    });
  });
});
