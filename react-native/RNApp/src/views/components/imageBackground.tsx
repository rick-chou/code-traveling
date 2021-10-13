import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

import RES from '@res';

const image = {
  uri: RES.bg,
};

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      <ScrollView>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
        <Text style={styles.text}>Inside</Text>
      </ScrollView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
