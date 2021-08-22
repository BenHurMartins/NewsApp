import {Dimensions} from 'react-native';

export const DEVICE_HEIGHT = Dimensions.get('screen').height;
export const DEVICE_WIDTH = Dimensions.get('screen').width;
export const DEVICE_WIDTH90 = DEVICE_WIDTH * 0.9;
export const DEVICE_WIDTH80 = DEVICE_WIDTH * 0.8;
export const DEVICE_WIDTH60 = DEVICE_WIDTH * 0.6;
export const DEVICE_WIDTH30 = DEVICE_WIDTH * 0.3;
export const DEVICE_WIDTH25 = DEVICE_WIDTH * 0.25;
export const DEVICE_WIDTH10 = DEVICE_WIDTH * 0.1;
export const WINDOWS_WIDTH = Dimensions.get('window').width;

export const FONT_SIZE_BIG = DEVICE_WIDTH * 0.05;
export const FONT_SIZE_REGULAR = DEVICE_WIDTH * 0.04;
export const FONT_SIZE_SMALL = DEVICE_WIDTH * 0.03;
