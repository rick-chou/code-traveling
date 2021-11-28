import React, { useEffect, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Image, View, Animated } from 'react-native';
import { RatioUtils } from '@utils';
import Res from './res';
import RangeIcons from './range';
import { modeTypeConfig } from './config';

const { convertX: cx } = RatioUtils;

interface itemType {
  icon: 'iconNormalMode' | 'iconNaturalMode' | 'iconSleepMode' | 'iconTurnHead' | 'iconMute' | 'iconNonMute';
  modeType: string;
}

const ModeSelector: React.FC = () => {
  const tabsBgMoveAnim = useRef(new Animated.Value(0)).current;
  const [currentModeType, setCurrentModeType] = useState('ordinary');

  useEffect(() => {
    let val = 0;
    modeTypeConfig.map((item, index) => {
      if (item.modeType === currentModeType) {
        val = index * 121;
      }
      return 0;
    });
    tabsBgMoveAnim.stopAnimation();
    Animated.timing(tabsBgMoveAnim, {
      toValue: cx(val),
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [currentModeType]);
  return (
    <View style={styles.containerStyle}>
      <ImageBackground source={Res.buttonImageBg} style={styles.buttonImageBgStyle}>
        <Animated.View
          style={[
            styles.modeActiveBgBox,
            {
              transform: [{ translateX: tabsBgMoveAnim }],
            },
          ]}>
          <Image source={Res.buttonChecked} style={styles.buttonCheckedStyle} />
        </Animated.View>
        <View style={styles.modeIconsBox}>
          {modeTypeConfig.map(item => (
            <RangeIcons
              key={item.icon}
              icon={item.icon}
              modeType={item.modeType}
              currentModeType={currentModeType}
              setCurrentModeType={setCurrentModeType}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: cx(5),
  },
  buttonImageBgStyle: {
    position: 'relative',
    width: cx(312),
    height: cx(70),
    marginLeft: cx(32),
  },
  buttonCheckedStyle: {
    width: cx(108),
    height: cx(108),
    zIndex: 1,
    opacity: 0.3,
  },
  modeIconsBox: {
    height: cx(70),
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: cx(20),
    marginRight: cx(20),
  },
  modeActiveBgBox: {
    position: 'absolute',
    top: -cx(19),
    left: -cx(18),
  },
});

export default ModeSelector;
