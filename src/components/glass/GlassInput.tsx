import React from "react";

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const GlassInput: React.FC<GlassInputProps> = ({
  label,
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
      <input
        className={`appearance-none bg-white bg-opacity-20 backdrop-blur-lg rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline ${className}`}
        {...props}
      />
    </div>
  );
};
