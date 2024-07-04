import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const alertVariants = cva("p-4 rounded-md", {
  variants: {
    variant: {
      info: "bg-blue-200 text-blue-800",
      success: "bg-green-200 text-green-800",
      warning: "bg-yellow-200 text-yellow-800",
      error: "bg-red-200 text-red-800",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string;
  onClose?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, title, children, onClose, ...props }, ref) => {
    return (
      <div
        className={cn(alertVariants({ variant, className }))}
        ref={ref}
        role="alert"
        {...props}
      >
        <div className="flex justify-between items-start">
          <div>
            {title && <h3 className="font-medium mb-1">{title}</h3>}
            <div>{children}</div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="ml-4 text-gray-400 hover:text-gray-600"
            >
              <XIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    );
  }
);
Alert.displayName = "Alert";

export { Alert, alertVariants };
