import React from 'react';
import {render} from '@testing-library/react-native';

import {Card} from './Card';
import {numberFormatter} from '../../../utils';

const mockData = {
  title: 'Test card title',
  value: 5000,
};

describe('Card component', () => {
  it('should renders correctly', () => {
    const {getByTestId} = render(
      <Card title={mockData.title} value={mockData.value} />,
    );

    expect(getByTestId('card-id')).toBeDefined();
  });

  it('should renders value with format', () => {
    const {getByText} = render(
      <Card title={mockData.title} value={mockData.value} />,
    );

    const formattedValue = numberFormatter(mockData.value);

    expect(getByText(`${formattedValue} $`)).toBeDefined();
  });
});
