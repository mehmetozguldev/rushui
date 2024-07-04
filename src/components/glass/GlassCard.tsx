import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  glowColor?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  className,
  title,
  children,
  glowColor = "rgba(255, 255, 255, 0.1)",
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 rounded-3xl border border-white border-opacity-20 shadow-lg p-6 overflow-hidden",
        className
      )}
      style={{
        boxShadow: `0 0 20px ${glowColor}`,
      }}
      {...props}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      )}
      {children}
    </div>
  );
};

export { GlassCard };
