import React, { FC } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RatioUtils } from '@utils';
import IconFont from '@components/iconfont';
import Res from './res';

const { convertX: cx } = RatioUtils;
const { icons } = Res;

interface Props {
  icon: keyof typeof icons;
  modeType: string;
  currentModeType: string;
  setCurrentModeType: any;
}

const Range: FC<Props> = ({ icon, modeType, currentModeType, setCurrentModeType }) => {
  return (
    <TouchableOpacity style={styles.iconsBoxStyle} onPress={() => setCurrentModeType(modeType)}>
      <IconFont
        d={icons[icon]}
        size={cx(32)}
        color={currentModeType === modeType ? '#6291ED' : '#B3C2D1'}
        useART={false}
      />
      <Image source={Res[icon]} style={styles.iconsUpStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconsBoxStyle: {
    width: cx(32),
    height: cx(32),
  },
  iconsUpStyle: {
    width: cx(32),
    height: cx(32),
    position: 'absolute',
    top: cx(0),
    left: cx(0),
  },
});

export default Range;
