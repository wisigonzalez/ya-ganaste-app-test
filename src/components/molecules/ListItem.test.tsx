import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {ListItem} from './ListItem';

const mockHandleOnPress = jest.fn();
const mockData = {
  age: 11,
  bankName: 'Banco 1',
  url: 'https://testimage.com',
  description: 'Banco 1 Es Para Todos',
};

describe('ListItem component', () => {
  it('should renders correctly', () => {
    const {getByTestId} = render(
      <ListItem item={mockData} handleOnPress={mockHandleOnPress} />,
    );

    expect(getByTestId(`item-id-${mockData.age}`)).toBeDefined();
  });

  it('should calls handleOnPress when item is pressed', () => {
    const {getByTestId} = render(
      <ListItem item={mockData} handleOnPress={mockHandleOnPress} />,
    );

    fireEvent.press(getByTestId(`item-id-${mockData.age}`));

    expect(mockHandleOnPress).toHaveBeenCalled();
  });
});
