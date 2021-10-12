import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

const image = {
  uri: 'https://camo.githubusercontent.com/f2cd36a1f0a3ba2808e2cf942cb7325bac511218a6bd9878aec5b8dd1f954013/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f4c75636b7943686f753731302f626c6f672d696d616765732f62672d696d616765732f626733382e6a706567',
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
