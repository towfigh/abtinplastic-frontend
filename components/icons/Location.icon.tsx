import React from "react";
import { Props } from "./_icon.interface";

const LocationIcon: React.FC<Props> = ({
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
    viewBox="0 0 35 51"
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
      d="M17.5 24.225C15.8424 24.225 14.2527 23.5534 13.0806 22.3578C11.9085 21.1623 11.25 19.5408 11.25 17.85C11.25 16.1592 11.9085 14.5377 13.0806 13.3422C14.2527 12.1466 15.8424 11.475 17.5 11.475C19.1576 11.475 20.7473 12.1466 21.9194 13.3422C23.0915 14.5377 23.75 16.1592 23.75 17.85C23.75 18.6872 23.5883 19.5162 23.2742 20.2896C22.9602 21.0631 22.4998 21.7658 21.9194 22.3578C21.3391 22.9498 20.6501 23.4194 19.8918 23.7397C19.1335 24.0601 18.3208 24.225 17.5 24.225ZM17.5 0C12.8587 0 8.40752 1.88062 5.12563 5.22814C1.84374 8.57567 0 13.1159 0 17.85C0 31.2375 17.5 51 17.5 51C17.5 51 35 31.2375 35 17.85C35 13.1159 33.1563 8.57567 29.8744 5.22814C26.5925 1.88062 22.1413 0 17.5 0Z"
      fill={fill}
    />
  </svg>
);

export default LocationIcon;
