import React from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';

export const Page = ({
  children,
  isError,
  isLoading,
  onRetry,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
  onRetry?: () => void;
  edges?: Readonly<('top' | 'left' | 'right' | 'bottom')[]>;
}) => {
  return isLoading ? (
    <View style={styles.loaderContainer}>{<ActivityIndicator />}</View>
  ) : isError ? (
    <View style={styles.errorContainer}>
      <Text>Something went wrong</Text>
      {onRetry && <Button title="Retry" onPress={onRetry} />}
    </View>
  ) : (
    children
  );
};

const styles = StyleSheet.create({
  loaderContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
});
