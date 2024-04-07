import React from "react";
import { Props } from "./_icon.interface";

const FaxIcon: React.FC<Props> = ({
  fill = "#FFEC40",
  color,
  stroke,
  width = "1.5rem",
  height = "1.5rem",
  className,
  opacity,
  ...props
}) => (
  <svg
    {...props}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47 49"
    style={{
      fill: `${fill} !important`,
      color: `${color}`,
      stroke: `${stroke}`,
      width: `${width}`,
      height: `${height}`,
      opacity: `${opacity}`,
    }}
  >
    <path
      d="M15.6667 0V9.8H11.75V5.88H0V41.16H3.91667V43.12C3.91667 46.3442 6.57021 49 9.79167 49C13.0131 49 15.6667 46.3442 15.6667 43.12V41.16H47V9.8H39.1667V0H15.6667ZM19.5833 3.92H35.25V13.72H19.5833V3.92ZM3.91667 9.8H7.83333V37.24H3.91667V9.8ZM11.75 13.72H15.6667V17.64H39.1667V13.72H43.0833V37.24H11.75V13.72ZM17.625 21.56V25.48H21.5417V21.56H17.625ZM25.4583 21.56V25.48H29.375V21.56H25.4583ZM33.2917 21.56V25.48H37.2083V21.56H33.2917ZM17.625 29.4V33.32H21.5417V29.4H17.625ZM25.4583 29.4V33.32H29.375V29.4H25.4583ZM33.2917 29.4V33.32H37.2083V29.4H33.2917ZM7.83333 41.16H11.75V43.12C11.75 44.2078 10.8785 45.08 9.79167 45.08C8.70479 45.08 7.83333 44.2078 7.83333 43.12V41.16Z"
      fill={fill}
    />
  </svg>
);

export default FaxIcon;
