import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements/dist/buttons/Button';

function App() {
  const dynamicHeight = useRef(new Animated.Value(0)).current; // 定义 dynamicHeight 动画变量
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const startViewAnimation = () => {
    // 配置动画和定义执行方法
    let targetHeight = 80;
    if (dynamicHeight._value === 80) {
      // 根据高度判断是否已展开
      targetHeight = 0; // 已展开的话，则需要将 View 收起，高度回到初始值 0
    }
    Animated.timing(
      // 定义弹性动画
      dynamicHeight, // 改变的动画变量
      {
        toValue: targetHeight, // 目标值，也就是动画值变化后的最终值
        duration: 300, // 动画持续时长
        useNativeDriver: false,
      },
    ).start();
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Button title="点击展开" onPress={startViewAnimation} titleStyle={{ color: '#000' }} />
        </View>

        <Animated.View
          style={{ backgroundColor: 'blue', justifyContent: 'space-around', height: dynamicHeight }} // 将高度是设为动画值，即用动画值改变 style （height）
        />
      </View>

      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});

export default App;
