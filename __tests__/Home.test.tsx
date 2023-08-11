import React from 'react';

import Home from '../src/screens/Home';
import { render, fireEvent, waitFor, act, screen } from '../src/utils/test-utils';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn()
    })
  };
});

jest.useFakeTimers();
describe('Home testing', () => {
  test('snapshot', async () => {
    render(<Home />);
    expect(screen.toJSON()).toMatchSnapshot();
    expect(await screen.findByText('Bitcoin')).toBeTruthy();
  });

  test('renders coin cards correctly', async () => {
    const { findAllByTestId } = render(<Home />);
    const renderedCoinCards = await findAllByTestId('coin-card');
    expect(renderedCoinCards).toHaveLength(2);
  });

  test('filters coins based on search input', async () => {
    const { getByTestId, findAllByTestId } = render(<Home />);
    const searchBar = getByTestId('input');

    await act(async () => {
      fireEvent.changeText(searchBar, 'SHIB');
      await waitFor(() => expect(searchBar.props.value).toBe('SHIB'));

      jest.runAllTimers();
      const filteredCoins = await findAllByTestId('coin-card');
      expect(filteredCoins).toHaveLength(1);
    });
  });
});
