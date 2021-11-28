import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Components" onPress={() => navigation.navigate('Components')} />
      <Button title="APIs" onPress={() => navigation.navigate('APIs')} />
      <Button title="Navigation" onPress={() => navigation.navigate('Navigation')} />
      <Button title="Demo" onPress={() => navigation.navigate('Demo')} />
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
