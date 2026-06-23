import type React from "react";

interface ColourWrapperProps {
  children: React.ReactNode;
  colour: string;
  opacity?: number;
}

const twColorBuilder = (color: string, opacity: number = 500) => {
  return `bg-${color}-${opacity}`;
};

const ColourWrapper: React.FC<ColourWrapperProps> = ({
  children,
  colour,
  opacity,
}) => {
  return <div className={twColorBuilder(colour, opacity)}>{children}</div>;
};

export default ColourWrapper;
