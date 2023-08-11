import { View, Text } from 'react-native';
import React from 'react';

import ArrowUp from '../../assets/arrow-right-up.svg';
import ArrowDown from '../../assets/arrow-left-down.svg';
import styles from './styles';

const SIZE = 18;

interface Props {
  percent: string;
}

const PercentChange = ({ percent }: Props) => {
  const isUpward = Number(percent) > 0;
  return (
    <View style={[styles.container, !isUpward && styles.containerRed]}>
      {isUpward ? <ArrowUp width={SIZE} height={SIZE} /> : <ArrowDown width={SIZE} height={SIZE} />}
      <Text style={styles.percent}>{percent}%</Text>
    </View>
  );
};

export default PercentChange;
