import React, {ReactNode, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const CollapsibleView = ({
  children,
  isCollapsed,
}: {
  children: ReactNode;
  isCollapsed: boolean;
}) => {
  const [collapsibleContentHeight, setCollapsibleContentHeight] = useState(0);
  const height = useSharedValue(0);

  const collapsableStyle = useAnimatedStyle(() => {
    height.value = isCollapsed
      ? withTiming(0, {duration: 300})
      : withTiming(collapsibleContentHeight, {duration: 200});

    return {
      height: height.value,
      overflow: 'hidden',
    };
  }, [isCollapsed, collapsibleContentHeight]);

  return (
    <Animated.View style={collapsableStyle}>
      <View
        style={styles.collapsibleContainer}
        onLayout={e => {
          setCollapsibleContentHeight(e.nativeEvent.layout.height);
        }}>
        {children}
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  collapsibleContainer: {position: 'absolute', width: '100%'},
});
