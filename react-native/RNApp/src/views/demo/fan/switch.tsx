import React, { FC } from 'react';
import { StyleSheet, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import { RatioUtils } from '@utils';
import Res from './res';

const { convertX: cx } = RatioUtils;

interface Props {
  switchVal: boolean;
  setSwitchVal: any;
}

const Switch: FC<Props> = ({ switchVal, setSwitchVal }) => {
  return (
    <TouchableOpacity onPress={() => setSwitchVal(!switchVal)}>
      <ImageBackground source={Res.blueSwitchDown} style={styles.blueSwitchDownStyle}>
        <Image source={Res.blueSwitchUp} style={styles.blueSwitchUpStyle} />
        <View style={[styles.colorCircle, { backgroundColor: switchVal ? '#6291ED' : '#8D9094' }]} />
        <Image source={Res.blueSwitchUp} style={styles.blueSwitchUpStyle} />
        <Image source={Res.switchIcon} style={styles.switchIconStyle} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blueSwitchDownStyle: {
    width: cx(60),
    height: cx(60),
  },
  blueSwitchUpStyle: {
    width: cx(60),
    height: cx(60),
    zIndex: 2,
    position: 'absolute',
    top: cx(0),
    left: cx(0),
  },
  colorCircle: {
    width: cx(60),
    height: cx(60),
    borderRadius: cx(30),
    position: 'absolute',
    top: cx(0),
    left: cx(0),
    zIndex: 1,
  },
  switchIconStyle: {
    width: cx(39),
    height: cx(39),
    position: 'absolute',
    top: cx(10),
    left: cx(10.5),
    zIndex: 3,
  },
});

export default Switch;
