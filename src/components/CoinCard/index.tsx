import { Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './styles';
import { Coin } from '../../interfaces';
import PercentChange from '../PercentChange';
import { icons } from '../../constants/icons';
import { RoutesParamList } from '../../constants/routesParamList';
import Routes from '../../constants/routes';

const CoinCard = ({ id, name, symbol, price_usd, percent_change_1h: percentChange }: Coin) => {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesParamList>>();
  return (
    <TouchableOpacity
      style={styles.container}
      testID="coin-card"
      onPress={() => navigation.navigate(Routes.Detail, { id })}>
      <View style={styles.infoContainer}>
        <View style={styles.infoWithIcon}>
          <Image style={styles.icon} source={icons[symbol] ? icons[symbol] : icons.BTC} />
          <View style={styles.info}>
            <Text style={styles.title}>{symbol}/USD</Text>
            <Text>{name}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.price}>${price_usd}</Text>
          <PercentChange percent={percentChange} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinCard;
