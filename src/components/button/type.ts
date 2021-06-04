import React from "react";

// todo
// export type Color = "primary" | "secondary" | "error" | "success" | "warning";
export type Variant = "filled" | "oulined" | "no-border";
export type Size = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: Variant;
  // color?: Color;
  color?: string;
  children: React.ReactChildren | string | number;
  onClick?: (e: any) => void;
  className?: string;
  size?: Size;
  round?: boolean;
}
