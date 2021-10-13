import * as React from 'react';

import { Button, View, Text } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>Type {route?.params?.type}</Text>
      <Button title="Go to Details... again" onPress={() => navigation.push('DetailsScreen')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} />
    </View>
  );
}
