import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Image" onPress={() => navigation.navigate('Animated/Image')} />
      <Button title="ScrollView" onPress={() => navigation.navigate('Animated/ScrollView')} />
      <Button title="Text" onPress={() => navigation.navigate('Animated/Text')} />
      <Button title="View" onPress={() => navigation.navigate('Animated/View')} />
      <Button title="FlatList" onPress={() => navigation.navigate('Animated/FlatList')} />
      <Button title="SectionList" onPress={() => navigation.navigate('Animated/SectionList')} />
      <Button title="2D" onPress={() => navigation.navigate('Animated/2D')} />
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
