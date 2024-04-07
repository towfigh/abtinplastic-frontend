import React from "react";
import { Props } from "./_icon.interface";

const CallIcon: React.FC<Props> = ({
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
    viewBox="0 0 49 49"
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
      d="M2.85833 49C2.40463 49 1.92824 48.9891 1.42917 48.9673C0.930093 48.9437 0.453704 48.9093 0 48.8639V32.9389L13.6111 30.2167L21.5056 38.1111C24.9537 36.0241 28.1187 33.5514 31.0007 30.6931C33.8808 27.8347 36.2736 24.7722 38.1792 21.5056L30.4208 13.6792L32.9389 0H48.8639C48.9546 0.453704 49 0.930093 49 1.42917V2.85833C49 8.71111 47.6952 14.416 45.0854 19.9729C42.4776 25.5317 39.0294 30.4662 34.741 34.7764C30.4544 39.0866 25.5326 42.5347 19.9757 45.1208C14.4169 47.7069 8.71111 49 2.85833 49Z"
      fill={fill}
    />
  </svg>
);

export default CallIcon;
