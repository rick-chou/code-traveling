import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="ActivityIndicator" onPress={() => navigation.navigate('ActivityIndicator')} />
      <Button title="FlatList" onPress={() => navigation.navigate('FlatList')} />
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
