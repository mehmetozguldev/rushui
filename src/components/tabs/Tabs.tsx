import React, { useState } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabsVariants = cva("flex", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export interface TabItem {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {
  items: TabItem[];
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, orientation, items, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
      <div ref={ref} {...props}>
        <div className={cn(tabsVariants({ orientation, className }))}>
          {items.map((item, index) => (
            <button
              key={index}
              className={cn(
                "px-4 py-2 font-medium",
                orientation === "vertical" ? "text-left" : "text-center",
                activeTab === index
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-500 hover:text-gray-700",
                orientation === "horizontal"
                  ? activeTab === index
                    ? "border-b-2"
                    : "border-b"
                  : activeTab === index
                  ? "border-l-2"
                  : "border-l",
                item.disabled && "opacity-50 cursor-not-allowed"
              )}
              onClick={() => !item.disabled && setActiveTab(index)}
              disabled={item.disabled}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="mt-4">{items[activeTab].content}</div>
      </div>
    );
  }
);
Tabs.displayName = "Tabs";

export { Tabs, tabsVariants };
