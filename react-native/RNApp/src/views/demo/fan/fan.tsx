import React, { useEffect, useRef } from 'react';
import { StyleSheet, Image, ImageBackground, Animated } from 'react-native';
import { RatioUtils } from '@utils';
import Res from './res';

const { convertX: cx } = RatioUtils;

interface Props {
  switchVal: boolean;
  fanSpeed: number;
}

const Fan: React.FC<Props> = ({ switchVal, fanSpeed }) => {
  const rotateRef = useRef(0);
  const currentSpeedRef = useRef(0);
  const speedRef = useRef(0);

  const frameId = useRef(0);
  const rotateAnimation = useRef(new Animated.Value(0));

  useEffect(() => {
    if (!switchVal) {
      speedRef.current = 0;
    } else {
      speedRef.current = 3 + fanSpeed * 2;
    }
    const runRotate = () => {
      let currentSpeed = currentSpeedRef.current;
      const speed = speedRef.current;
      if (speed === 0 && currentSpeed === 0) {
        return;
      }
      if (speed < currentSpeed) {
        currentSpeed -= 0.1;
      } else if (speed > currentSpeed) {
        currentSpeed += 0.1;
      }
      currentSpeed = Math.round(currentSpeed * 10) / 10;
      rotateRef.current += currentSpeed;
      rotateAnimation.current.setValue(rotateRef.current % 360);
      currentSpeedRef.current = currentSpeed;
      frameId.current = requestAnimationFrame(runRotate);
    };

    if (switchVal && speedRef.current !== 0) {
      frameId.current && cancelAnimationFrame(frameId.current);
      runRotate();
    }
  }, [switchVal, fanSpeed]);
  return (
    <ImageBackground source={Res.fanPlate} style={styles.fanPlateStyle}>
      <Animated.View
        style={[
          styles.leafActiveBox,
          {
            transform: [
              {
                rotate: rotateAnimation.current.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}>
        <Image source={Res.fanBlade} style={styles.fanBladeStyle} />
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  fanPlateStyle: {
    width: cx(375),
    height: cx(375),
  },
  fanBladeStyle: {
    width: cx(375),
    height: cx(375),
  },
  fanCap: {
    width: cx(68),
    height: cx(68),
    position: 'absolute',
    left: cx(154),
    bottom: cx(152),
  },
  leafActiveBox: {
    width: cx(375),
    height: cx(375),
  },
});

export default Fan;
