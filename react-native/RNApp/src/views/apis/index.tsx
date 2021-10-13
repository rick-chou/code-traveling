import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Alert" onPress={() => navigation.navigate('Alert')} />
      <Button title="Animated" onPress={() => navigation.navigate('Animated')} />
      <Button title="AppState" onPress={() => navigation.navigate('AppState')} />
      <Button title="Dimensions" onPress={() => navigation.navigate('Dimensions')} />
      <Button title="Keyboard" onPress={() => navigation.navigate('Keyboard')} />
      <Button title="Platform" onPress={() => navigation.navigate('Platform')} />
      <Button title="Share" onPress={() => navigation.navigate('Share')} />
      <Button title="Transforms" onPress={() => navigation.navigate('Transforms')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 100,
  },
});
