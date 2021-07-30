import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Touchable from './components/Touchable';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Touchable />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
