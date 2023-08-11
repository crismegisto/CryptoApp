import { View, Text, Image } from 'react-native';
import React from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RoutesParamList } from '../../constants/routesParamList';
import { useFetchSpecifCoinQuery } from '../../services/apiSlice';
import { Coin } from '../../interfaces';
import { icons } from '../../constants/icons';
import RowDetail from '../../components/RowDetail';
import styles from './styles';

const Detail = () => {
  const { params } = useRoute<RouteProp<RoutesParamList>>();
  const { data = {} as Coin, isLoading } = useFetchSpecifCoinQuery(params?.id || '90');

  const {
    rank,
    name,
    symbol,
    price_usd: price,
    percent_change_1h: $1h,
    percent_change_7d: $7h,
    percent_change_24h: $24h,
    market_cap_usd: marketCap,
    volume24: volume,
    csupply
  } = data;

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <RowDetail label="#" description={rank} />
          <RowDetail label="Name" description={name} />
          <RowDetail label="Symbol" description={symbol} />
          <RowDetail label="Price" description={price} dollarSign />
          <RowDetail label="1h%" description={$1h} percentSign />
          <RowDetail label="7h%" description={$7h} percentSign />
          <RowDetail label="24h%" description={$24h} percentSign />
          <RowDetail label="Volume" description={volume} dollarSign />
          <RowDetail label="Market Cap" description={marketCap} dollarSign />
          <RowDetail label="Circulation Supply" description={csupply} dollarSign />
        </View>
        <Image style={styles.icon} source={icons[symbol] ? icons[symbol] : icons.BTC} />
      </View>
    </View>
  );
};

export default Detail;
