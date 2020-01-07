// @flow

import React from 'react';
import { Image } from 'react-native';
import * as flags from './flags';

const Flag = ({ size = 64, code, type = 'shiny', style }) => {
  const flag = flags[type][`icons${size}`][code];
  const unknownFlag = flags[type][`icons${size}`]['unknown'];

  return <Image source={flag || unknownFlag} style={[{ width: size, height: size }, style]} />;
};

export default Flag;
