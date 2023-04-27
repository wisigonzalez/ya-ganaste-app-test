import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Button} from './Button';

const mockHandleOnPress = jest.fn();
const mockText = 'Test button text';

describe('Button component', () => {
  it('should renders correctly', () => {
    const {getByTestId} = render(
      <Button text={mockText} handleOnPress={mockHandleOnPress} />,
    );

    expect(getByTestId('button-id')).toBeDefined();
  });

  it('should calls handleOnPress when button is pressed', () => {
    const {getByTestId} = render(
      <Button text={mockText} handleOnPress={mockHandleOnPress} />,
    );

    fireEvent.press(getByTestId('button-id'));

    expect(mockHandleOnPress).toHaveBeenCalled();
  });
});
