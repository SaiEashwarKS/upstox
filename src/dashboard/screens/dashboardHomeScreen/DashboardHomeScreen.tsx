import React from 'react';
import {getDashboard} from '../../services/dashboardServices';
import {useQuery} from '@tanstack/react-query';
import {FlashList} from '@shopify/flash-list';
import {DashboardHolding} from './DashboardHolding';
import {Holding} from '../../types/dashboardTypes';
import {Page} from '../../../components/Page';
import {StyleSheet, View} from 'react-native';
import {DashboardSummary} from './DashboardSummary';

const keyExtractor = (item: Holding, index: number) => index.toString();

export const DashboardHomeScreen = () => {
  const {isLoading, data, isError, refetch} = useQuery({
    queryKey: ['todos'],
    queryFn: getDashboard,
  });

  return (
    <Page isError={isError} isLoading={isLoading} onRetry={refetch}>
      <View style={styles.holdingsContainer}>
        <FlashList
          data={
            [
              ...(data?.data?.userHolding ?? []),
              ...(data?.data.userHolding ?? []),
            ] ?? []
          }
          contentContainerStyle={styles.holdignsContentContainer}
          renderItem={({item}) => <DashboardHolding holding={item} />}
          keyExtractor={keyExtractor}
          estimatedItemSize={73.6}
        />
      </View>

      <DashboardSummary holdings={data?.data.userHolding ?? []} />
    </Page>
  );
};

const styles = StyleSheet.create({
  holdingsContainer: {flex: 1},
  holdignsContentContainer: {
    paddingBottom: 24,
  },
});
