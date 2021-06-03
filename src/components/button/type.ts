import React from "react";

export type Color = "primary" | "secondary" | "error" | "success" | "warning";
export type Variant = "filled" | "oulined";

export interface ButtonProps {
  variant?: Variant;
  color?: Color;
  children: React.ReactChildren | string | number;
  onClick?: (e: any) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  round?: boolean;
}
