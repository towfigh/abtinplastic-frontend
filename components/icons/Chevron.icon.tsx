import React from "react";
import { Props } from "./_icon.interface";

interface PropsExtra {
  direction: "left" | "right" | "up" | "down";
}

const ChevronIcon: React.FC<Props & PropsExtra> = ({
  fill = "#FFEC40",
  color,
  stroke,
  width = "1rem",
  height = "1rem",
  className,
  opacity,
  direction,
  ...props
}) => (
  <>
    {direction === "left" && (
      <svg
        {...props}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 34"
        style={{
          fill: `${fill} !important`,
          color: `${color}`,
          stroke: `${stroke}`,
          width: `${width}`,
          height: `${height}`,
          opacity: `${opacity}`,
        }}
      >
        <mask id="path-1-inside-1_4_85" fill="white">
          <path d="M17.7781 34L0 17L17.7781 0L20 2.12463L4.44374 17L20 31.8754L17.7781 34Z" />
        </mask>
        <path
          d="M17.7781 34L0 17L17.7781 0L20 2.12463L4.44374 17L20 31.8754L17.7781 34Z"
          fill={fill}
        />
        <path
          d="M17.7781 34L13.6314 38.3365L17.7781 42.3017L21.9248 38.3365L17.7781 34ZM0 17L-4.14668 12.6635L-8.68165 17L-4.14668 21.3365L0 17ZM17.7781 0L21.9248 -4.33648L17.7781 -8.30166L13.6314 -4.33648L17.7781 0ZM20 2.12463L24.1467 6.46111L28.6816 2.12462L24.1467 -2.21186L20 2.12463ZM4.44374 17L0.297066 12.6635L-4.2379 17L0.297066 21.3365L4.44374 17ZM20 31.8754L24.1467 36.2119L28.6817 31.8754L24.1467 27.5389L20 31.8754ZM21.9248 29.6635L4.14668 12.6635L-4.14668 21.3365L13.6314 38.3365L21.9248 29.6635ZM4.14668 21.3365L21.9248 4.33648L13.6314 -4.33648L-4.14668 12.6635L4.14668 21.3365ZM13.6314 4.33648L15.8533 6.46111L24.1467 -2.21186L21.9248 -4.33648L13.6314 4.33648ZM15.8533 -2.21185L0.297066 12.6635L8.59042 21.3365L24.1467 6.46111L15.8533 -2.21185ZM0.297066 21.3365L15.8533 36.2119L24.1467 27.5389L8.59042 12.6635L0.297066 21.3365ZM15.8533 27.5389L13.6315 29.6635L21.9248 38.3365L24.1467 36.2119L15.8533 27.5389Z"
          fill={fill}
          mask="url(#path-1-inside-1_4_85)"
        />
      </svg>
    )}
  </>
);

export default ChevronIcon;
