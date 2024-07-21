import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button/Button";

interface SidebarItemProps {
  icon?: ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
}

interface SidebarProps {
  items: SidebarItemProps[];
  variant?: "light" | "dark" | "transparent";
  size?: "sm" | "md" | "lg";
  position?: "left" | "right";
  isCollapsible?: boolean;
  isCollapsed?: boolean;
  onCollapseToggle?: () => void;
  logo?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  href,
  onClick,
}) => {
  const content = (
    <Button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
      {icon && <span className="text-gray-500">{icon}</span>}
      <span>{label}</span>
    </Button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <div onClick={onClick}>{content}</div>;
};

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  variant = "light",
  size = "md",
  position = "left",
  isCollapsible = false,
  isCollapsed = false,
  onCollapseToggle,
  logo,
  footer,
  className,
}) => {
  const sidebarClasses = cn(
    "flex flex-col",
    {
      "bg-white text-gray-800": variant === "light",
      "bg-gray-800 text-white": variant === "dark",
      "bg-transparent": variant === "transparent",
      "w-64": size === "md" && !isCollapsed,
      "w-80": size === "lg" && !isCollapsed,
      "w-48": size === "sm" && !isCollapsed,
      "w-16": isCollapsed,
      "left-0": position === "left",
      "right-0": position === "right",
    },
    className
  );

  return (
    <aside className={sidebarClasses}>
      {logo && <div className="p-4">{logo}</div>}

      {isCollapsible && (
        <button onClick={onCollapseToggle} className="p-2">
          {isCollapsed ? ">" : "<"}
        </button>
      )}

      <nav className="flex-grow">
        {items.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </nav>

      {footer && <div className="mt-auto p-4">{footer}</div>}
    </aside>
  );
};
