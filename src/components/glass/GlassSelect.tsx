import { ChevronDown } from "lucide-react";
import React from "react";

interface GlassSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{ value: string; label: string }>;
}

export const GlassSelect: React.FC<GlassSelectProps> = ({
  label,
  options,
  className,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-white text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <select
        className={`appearance-none bg-white bg-opacity-20 backdrop-blur-lg rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
