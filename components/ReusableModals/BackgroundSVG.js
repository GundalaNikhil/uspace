import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const BackgroundSVG = ({ width, height }) => (
  <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    <Defs>
      <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <Stop offset="0%" stopColor="#f0f0f0" stopOpacity="1" />
        <Stop offset="100%" stopColor="#e0e0e0" stopOpacity="1" />
      </LinearGradient>
    </Defs>
    <Path
      d={`M0 0 L${width} 0 L${width} ${height} L0 ${height} Z`}
      fill="url(#grad)"
    />
    <Path
      d={`M0 ${height * 0.7} C${width * 0.3} ${height * 0.9} ${width * 0.7} ${
        height * 0.8
      } ${width} ${height} L0 ${height} Z`}
      fill="#007AFF"
      opacity="0.1"
    />
  </Svg>
);

export default BackgroundSVG;
