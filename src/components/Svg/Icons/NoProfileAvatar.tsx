import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <path
                                    fill="#ea4c4c"
                                    d="M9.7 39.7c1.6 2.5 2.7 4.3 3.9 5.9 1 1.3 2.3 2.6 3.7 3.4 4.7 2.9 8.6.8 8.7-4.7.1-5.9-.4-11.7-.2-17.6.2-8.5 2-16.5 6.9-23.7.6-.9 1.3-1.6 2.4-3-2 13.6 4.6 23.2 11.7 32.7 4.2 5.6 8.6 11.2 12.1 17.2 11.1 19.3-1 40.7-19 45.3C17.7 100.9-.4 83.8 0 64.2c.1-8.1 2.6-15.3 7.5-21.7.7-.9 1.3-1.7 2.2-2.8z"
                                /></Svg>
  );
};

export default Icon;
