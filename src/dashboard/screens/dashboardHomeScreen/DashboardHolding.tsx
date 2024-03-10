import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Holding} from '../../types/dashboardTypes';
import {formatPrice, getHoldingPnL} from '../../../utils/stockUtils';

export const DashboardHolding = ({holding}: {holding: Holding}) => {
  const {symbol, quantity, ltp, avgPrice} = holding;
  const pnl = getHoldingPnL(quantity, avgPrice, ltp);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.symbol, styles.topText]}>{symbol}</Text>
        <Text style={styles.text}>{quantity}</Text>
      </View>

      <View style={styles.rightView}>
        <Text style={[styles.text, styles.topText]}>
          LTP: <Text style={styles.bold}>{formatPrice(ltp)}</Text>
        </Text>
        <Text style={styles.text}>
          P/L: <Text style={styles.bold}>{formatPrice(pnl)}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingRight: 16,
    marginLeft: 16,
    borderBottomWidth: 1,
    borderColor: '#b8b8b8',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  rightView: {alignItems: 'flex-end'},
  topText: {marginBottom: 8},
  symbol: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  bold: {fontWeight: 'bold'},
});
