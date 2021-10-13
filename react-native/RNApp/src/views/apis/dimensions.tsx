import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Dimensions, useWindowDimensions } from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const App = () => {
  const [dimensions, setDimensions] = useState({ window, screen });

  const windowHook = useWindowDimensions();

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', onChange);
    return () => {
      subscription.remove();
    };
  });

  return (
    <View style={styles.container}>
      <Text>Dimensions</Text>
      <Text>------------------------------------</Text>
      <Text>{`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`}</Text>
      <Text>{`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`}</Text>
      <Text>------------------------------------</Text>
      <Text>useWindowDimensions</Text>
      <Text>------------------------------------</Text>
      <Text>{`Window Dimensions: height - ${windowHook.height}, width - ${windowHook.width}`}</Text>
      <Text>------------------------------------</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
