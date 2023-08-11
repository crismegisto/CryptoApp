import { SafeAreaView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { FlashList, ListRenderItem } from '@shopify/flash-list';

import { useFetchCoinsQuery } from '../../services/apiSlice';
import CoinCard from '../../components/CoinCard';
import { Coin, ListKeyExtractor } from '../../interfaces';
import SearchBar from '../../components/SearchBar';
import { isStringMatch } from '../../utils/strings';
import styles from './styles';

const Home = () => {
  const { data: coins = [] } = useFetchCoinsQuery();
  const [query, setQuery] = useState('');

  const filteredCoins = useMemo<Coin[]>(
    () => coins.filter(({ symbol, name }) => isStringMatch(query, symbol) || isStringMatch(query, name)),
    [coins, query]
  );

  const renderItem: ListRenderItem<Coin> = ({ item }) => <CoinCard {...item} />;

  const keyExtractor: ListKeyExtractor<Coin> = ({ id }) => String(id);
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={(text: string | null) => setQuery(String(text))} />
      <FlashList
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={query ? filteredCoins : coins}
        estimatedItemSize={100}
      />
    </SafeAreaView>
  );
};

export default Home;
