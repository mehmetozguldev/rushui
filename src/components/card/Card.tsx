import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("rounded-lg shadow-sm", {
  variants: {
    variant: {
      default: "bg-white border",
      elevated: "bg-white shadow-md",
      ghost: "bg-transparent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  footer?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, title, footer, children, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {title && <div className="px-4 py-3 border-b font-medium">{title}</div>}
        <div className="p-4">{children}</div>
        {footer && <div className="px-4 py-3 border-t">{footer}</div>}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card, cardVariants };
