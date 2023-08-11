import { View, Text } from 'react-native';
import React from 'react';

import styles from './styles';

interface Props {
  label: string;
  description: string | number;
  dollarSign?: boolean;
  percentSign?: boolean;
}
const RowDetail = ({ label, description, dollarSign, percentSign }: Props) => {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.label}>{label} </Text>
      <Text>
        {dollarSign && '$'}
        {description}
        {percentSign && '%'}
      </Text>
    </View>
  );
};

export default RowDetail;
