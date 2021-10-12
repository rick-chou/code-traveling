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
      <Button title="ImageBackground" onPress={() => navigation.navigate('ImageBackground')} />
      <Button title="KeyboardAvoidingView" onPress={() => navigation.navigate('KeyboardAvoidingView')} />
      <Button title="Modal" onPress={() => navigation.navigate('Modal')} />
      <Button title="RefreshControl" onPress={() => navigation.navigate('RefreshControl')} />
      <Button title="StatusBar" onPress={() => navigation.navigate('StatusBar')} />
      <Button title="TouchableHighlight" onPress={() => navigation.navigate('TouchableHighlight')} />
      <Button title="TouchableOpacity" onPress={() => navigation.navigate('TouchableOpacity')} />
      <Button title="TouchableWithoutFeedback" onPress={() => navigation.navigate('TouchableWithoutFeedback')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 80,
  },
});
