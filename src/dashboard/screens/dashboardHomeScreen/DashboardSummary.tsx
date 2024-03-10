import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useDashboardSummary} from '../../hooks/useDashboardSummary';
import {Holding} from '../../types/dashboardTypes';
import {formatPrice} from '../../../utils/stockUtils';
import {CollapsibleView} from '../../../components/CollapsibleView';

export const DashboardSummary = ({holdings}: {holdings: Holding[]}) => {
  const [iconName, setIconName] = useState<'triangle-up' | 'triangle-down'>(
    'triangle-up',
  );
  const [isCollapsed, setIsCollapsed] = useState(true);

  const {currentValue, investedAmount, oneDayPnl, totalPnl} =
    useDashboardSummary(holdings);

  const listItems: {key: string; value: string}[] = [
    {key: 'Current value:', value: formatPrice(currentValue)},
    {key: 'Total investment:', value: formatPrice(investedAmount)},
    {key: 'Todays Profit & Loss: ', value: formatPrice(oneDayPnl)},
  ];

  useEffect(() => {
    setIconName(isCollapsed ? 'triangle-up' : 'triangle-down');
  }, [isCollapsed]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.iconContainer}
        onPress={() => {
          setIsCollapsed(collapsed => !collapsed);
        }}>
        <Icon name={iconName} style={styles.icon} size={32} />
      </TouchableOpacity>

      <CollapsibleView isCollapsed={isCollapsed}>
        <View style={styles.summaryList}>
          {listItems.map(item => (
            <View style={styles.row} key={item.key}>
              <Text style={styles.label}>{item.key}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          ))}
        </View>
      </CollapsibleView>

      <View style={styles.row}>
        <Text style={styles.label}>Profit & Loss:</Text>
        <Text style={styles.value}>{formatPrice(totalPnl)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    paddingTop: 2,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#b8b8b8',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  iconContainer: {width: '100%'},
  icon: {
    color: '#721479',
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  value: {
    fontSize: 14,
    color: 'black',
  },
  summaryList: {marginBottom: 16},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    marginVertical: 4,
  },
});
