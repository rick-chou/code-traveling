import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { FAB } from 'react-native-elements';

import DATA from '@utils/data';

const Item = ({ title }: { title: string }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const App = () => {
  const renderItem = ({ item }: { item: typeof DATA[number] }) => <Item title={item.name} />;
  const ref = React.useRef(null) as any;

  const scrollTo = () => {
    ref.current.scrollToIndex({ index: 0 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} ref={ref} />
      <FAB title="top" placement="right" onPress={scrollTo} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
