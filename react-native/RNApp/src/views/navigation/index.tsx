import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Details" onPress={() => navigation.navigate('DetailsScreen', { type: 'article' })} />
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
