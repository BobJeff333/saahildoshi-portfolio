import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium tracking-[-0.01em] transition duration-200",
  {
    variants: {
      variant: {
        default: "bg-accentneongreen text-primary hover:bg-[#e3ad72]",
        outline:
          "border border-white/20 bg-transparent text-primary-foreground hover:border-accentneongreen/70 hover:text-accentneongreen",
      },
      size: {
        default: "px-5 py-3 text-sm",
        lg: "px-6 py-3.5 text-sm",
        sm: "px-3.5 py-2 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
