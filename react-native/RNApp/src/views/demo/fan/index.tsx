import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, View, Animated, Easing } from 'react-native';
import { RatioUtils } from '@utils';
import Switch from './switch';
import Button from './range';
import Slider from './slider';
import ModeSelector from './selector';
import Fan from './fan';

const { convertX: cx } = RatioUtils;

const Home: React.FC = () => {
  const [switchVal, setSwitchVal] = useState(false);
  const [fanSpeed, setFanSpeed] = useState(1);

  const switchMoveAnim = useRef(new Animated.Value(0)).current;
  const viewOpacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let val = -80;
    let opc = 0;
    if (switchVal) {
      val = 0;
      opc = 1;
    }
    switchMoveAnim.stopAnimation();
    Animated.timing(switchMoveAnim, {
      toValue: cx(val),
      duration: 300,
      useNativeDriver: false,
    }).start();

    viewOpacityAnim.stopAnimation();
    Animated.timing(viewOpacityAnim, {
      toValue: opc,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [switchVal]);

  return (
    <View style={{ flex: 1, backgroundColor: switchVal ? '#E3EEF6' : '#DDE0E4' }}>
      <ScrollView style={{ flex: 1 }}>
        <Fan switchVal={switchVal} fanSpeed={fanSpeed} />
        <Animated.View
          style={{
            opacity: viewOpacityAnim,
          }}>
          <View style={styles.numberSliderBoxStyle}>
            <Slider sliderMaxValue={7} sliderMinValue={0} title={'定时'} />
            <Slider sliderMaxValue={3} sliderMinValue={1} title={'风速'} setFanSpeed={setFanSpeed} />
          </View>
          <ModeSelector />
        </Animated.View>
        <View style={styles.bottomButtonsBoxStyle}>
          <Animated.View
            style={{
              opacity: viewOpacityAnim,
            }}>
            <Button sourceCode="iconTurnHead" />
          </Animated.View>
          <Animated.View
            style={[
              {
                transform: [{ translateY: switchMoveAnim }],
              },
            ]}>
            <Switch switchVal={switchVal} setSwitchVal={setSwitchVal} />
          </Animated.View>
          <Animated.View
            style={{
              opacity: viewOpacityAnim,
            }}>
            <Button sourceCode="iconMute" />
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  numberSliderBoxStyle: {
    marginTop: -cx(13),
  },
  bottomButtonsBoxStyle: {
    width: cx(275),
    height: cx(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: cx(32),
    marginLeft: cx(50),
  },
  countdownBoxStyle: {
    position: 'absolute',
    top: cx(10),
    left: cx(113),
  },
  switchActiveBox: {
    position: 'absolute',
    top: cx(530),
    left: cx(158),
    zIndex: 1,
  },
});

export default Home;
