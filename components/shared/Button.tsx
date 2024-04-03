import React from "react";
import "keen-slider/keen-slider.min.css";

interface buttonProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  title,
  className,
  style,
  variant,
  icon,
  onClick,
}: buttonProps) => {
  return (
    <button
      className={`${className} text-2xl flex mx-auto justify-center items-center gap-x-4 py-2 px-3 font-yekan ${
        variant === "primary" && "button_primary"
      }  ${variant === "secondary" && "button_secondary"}`}
      style={style}
      onClick={onClick}
    >
      {title}
      <span>{icon}</span>
    </button>
  );
};

export default Button;
