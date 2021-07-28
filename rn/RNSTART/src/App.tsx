import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30 }}>RN START</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }
});

export default App;
