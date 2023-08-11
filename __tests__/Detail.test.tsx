import React from 'react';

import Detail from '../src/screens/Detail';
import { render, screen } from '../src/utils/test-utils';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useRoute: () => ({ params: { id: '90' } })
  };
});

jest.useFakeTimers();
test('snapshot', async () => {
  render(<Detail />);
  expect(screen.toJSON()).toMatchSnapshot();
  expect(await screen.findByText('Market Cap')).toBeTruthy();
});
