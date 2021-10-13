import React, { useRef } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';

function App() {
  const imageSize = useRef(new Animated.Value(0)).current; // 动画初始值为 0，目标值为 1 。会经过插值转换后应用到 Animated.Image上

  const startImageAnimation = () => {
    //动画开始前先将初始值设为0，否则第一次执行后this.state.imageSize的动画值一直是 1, 不再有效果

    imageSize.setValue(0);
    Animated.timing(imageSize, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const _imageSize = imageSize.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [30, 40, 30],
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={startImageAnimation}>
        <Animated.Image
          source={require('../../../res/heart.png')}
          style={{
            width: _imageSize,
            height: _imageSize, //应用到 Animated.Image 上
            tintColor: '#dc3132',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default App;
