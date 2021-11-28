import React, { useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { RatioUtils } from '@utils';
import Slider from '@components/slider';
import Res from './res';

const { convertX: cx } = RatioUtils;

interface Props {
  sliderMaxValue: number;
  sliderMinValue: number;
  title: string;
  setFanSpeed?: any;
}

const CustomSlider: React.FC<Props> = ({ sliderMaxValue, sliderMinValue, title, setFanSpeed }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const renderMinimumTrack = () => {
    return <Image source={Res.sliderBg} style={styles.UnSliderBgStyle} />;
  };
  const renderMaximumTrack = () => {
    return <Image source={Res.UnSliderBg} style={styles.UnSliderBgStyle} />;
  };
  const renderThumb = () => {
    return <Image source={Res.numberSliderIcon} style={styles.numberSliderIconStyle} />;
  };
  const handleValueChange = (value: number) => {
    setSliderValue(Math.round(value));
    setFanSpeed(Math.round(value));
  };
  return (
    <View style={styles.sliderBoxStyle}>
      <Slider.Horizontal
        theme={{
          width: 312,
          height: 10,
          trackRadius: 5,
          trackHeight: 10,
          thumbSize: 26,
          thumbRadius: 26,
        }}
        maximumValue={sliderMaxValue}
        minimumValue={sliderMinValue}
        stepValue={1}
        style={styles.sliderStyle}
        value={sliderValue}
        canTouchTrack={true}
        thumbTintColor="transparent"
        onSlidingComplete={handleValueChange}
        onValueChange={handleValueChange}
        renderMaximumTrack={renderMaximumTrack}
        renderMinimumTrack={renderMinimumTrack}
        renderThumb={renderThumb}
      />
      <View style={styles.sliderWordBoxStyle}>
        <Text>{title}</Text>
        <Text>{sliderValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderBoxStyle: {
    marginBottom: cx(24),
  },
  sliderStyle: {
    width: cx(312),
    marginLeft: cx(32),
  },
  UnSliderBgStyle: {
    width: cx(312),
    height: cx(10),
  },
  numberSliderIconStyle: {
    width: cx(70),
    height: cx(70),
    position: 'absolute',
    left: -cx(25),
    top: -cx(21),
  },
  sliderWordBoxStyle: {
    width: cx(312),
    marginLeft: cx(32),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CustomSlider;
