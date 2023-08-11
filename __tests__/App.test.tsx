import 'react-native';
import React from 'react';

import AppNavigator from '../src/components/AppNavigator';
import { fireEvent, render, screen, act, waitFor } from '../src/utils/test-utils';

jest.useFakeTimers();
test('navigation to Detail', async () => {
  render(<AppNavigator />);
  const coinCards = await screen.findAllByTestId('coin-card');
  await act(async () => {
    fireEvent(coinCards[0], 'press');
  });
  await waitFor(() => expect(screen.getByText('Volume')).toBeTruthy());
});
