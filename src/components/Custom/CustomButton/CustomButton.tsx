import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  onClick?: any;
  className?: string;
  disabled?: boolean;
  style?: any;
  id?: string;
  children?: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "ghost"
    | "link"
    | "outline"
    | "secondary";
};

const CustomButton = (props: Props) => {
  return (
    <Button
      id={props.id}
      style={props.style}
      disabled={props.disabled}
      onClick={props.onClick}
      className={cn(props.className)}
      variant={props.variant}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
