import { Badge } from "@/components/badge/Badge";
import ComponentShowcase from "@/components/hero/ComponentShowcase";
import React from "react";

export default function page() {
  return (
    <ComponentShowcase
      title="Badge"
      description="A customizable badge component"
      component={
        <div className="flex items-start gap-3">
          <Badge>New Version</Badge>
          <Badge variant="destructive">New Version</Badge>
          <Badge variant="gradient">New Version</Badge>
          <Badge variant="outline">New Version</Badge>
          <Badge variant="secondary">New Version</Badge>
          <Badge variant="info">New Version</Badge>
          <Badge variant="success">New Version</Badge>
          <Badge variant="warning">New Version</Badge>
        </div>
      }
      code={{
        react: `import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning:
          "border-transparent bg-yellow-500 text-white hover:bg-yellow-600",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
        gradient:
          "border-transparent text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
      },
      size: {
        default: "text-xs",
        sm: "text-[10px] px-2 py-[2px]",
        lg: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };

`,
        vue: `<badge>Click me</badge>`,
        angular: `<badge>Click me</badge>`,
      }}
      usage={`<Badge>New Version</Badge>
<Badge variant="destructive">New Version</Badge>
<Badge variant="gradient">New Version</Badge>
<Badge variant="outline">New Version</Badge>
<Badge variant="secondary">New Version</Badge>
<Badge variant="info">New Version</Badge>
<Badge variant="success">New Version</Badge>
<Badge variant="warning">New Version</Badge>`}
    />
  );
}
