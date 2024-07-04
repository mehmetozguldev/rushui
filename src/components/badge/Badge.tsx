import React from "react";

type BadgeProps = {
  children?: React.ReactNode;
};

export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="text-xs font-bold px-2 py-1 rounded-full bg-blue-600 text-blue-100">
      {children}
    </span>
  );
};
