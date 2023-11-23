import BottomSheet from '@gorhom/bottom-sheet';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

export default function App() {
  const animValue = useSharedValue(0);

  useEffect(() => {
    animValue.value = withRepeat(withTiming(1, { duration: 1000 }), 5);
  }
  , []);

  const animStyle = useAnimatedStyle(() => {
    return {
      // width: animValue.value * 255,
      transform: [{ translateX: animValue.value * 255 }],
    };
  }
  );


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Animated.View style={[styles.block, animStyle]} />
      <BottomSheet
        // ref={bottomSheetRef}
        index={1}
        snapPoints={[100, 200]}
        // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  block: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
