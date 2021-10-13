import React, { useEffect } from 'react';
import { Keyboard, TextInput, StyleSheet } from 'react-native';

const Example = () => {
  useEffect(() => {
    const keyboardDidShowSubscription = Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    const keyboardDidHideSubscription = Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      keyboardDidShowSubscription.remove();
      keyboardDidHideSubscription.remove();
    };
  }, []);

  const _keyboardDidShow = () => {
    console.log('Keyboard Shown');
  };

  const _keyboardDidHide = () => {
    console.log('Keyboard Hidden');
  };

  return <TextInput style={s.input} placeholder="Click here ..." onSubmitEditing={Keyboard.dismiss} />;
};

const s = StyleSheet.create({
  input: {
    margin: 60,
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
});

export default Example;
