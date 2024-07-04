import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent",
  {
    variants: {
      variant: {
        default: "bg-white bg-opacity-20 text-white hover:bg-opacity-30",
        primary: "bg-blue-500 bg-opacity-50 text-white hover:bg-opacity-60",
        danger: "bg-red-500 bg-opacity-50 text-white hover:bg-opacity-60",
      },
      size: {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {}

const GlassButton: React.FC<GlassButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(
        glassButtonVariants({ variant, size }),
        "backdrop-filter backdrop-blur-md",
        className
      )}
      {...props}
    />
  );
};

export { GlassButton, glassButtonVariants };
