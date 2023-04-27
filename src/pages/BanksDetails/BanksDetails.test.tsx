import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {BanksDetails} from './BanksDetails';

const mockData = {
  age: 11,
  bankName: 'Banco 1',
  url: 'https://testimage.com',
  description: 'Banco 1 Es Para Todos',
};
const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe('Movements Details page', () => {
  it('should renders correctly', () => {
    const {getByTestId} = render(
      <BanksDetails navigation={mockNavigation} bank={mockData} />,
    );

    expect(getByTestId('container-id')).toBeDefined();
  });

  it('should calls handleOnPress when button is pressed', () => {
    const {getByTestId} = render(
      <BanksDetails navigation={mockNavigation} bank={mockData} />,
    );

    fireEvent.press(getByTestId('button-id'));

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
