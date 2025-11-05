import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "filter";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  disabled = false,
  className = "",
  icon,
  active = false,
}) => {
  const baseStyles = "font-medium transition-all rounded-lg";

  const variants = {
    primary:
      "w-full bg-blue-600 text-white py-4 text-lg hover:bg-blue-700 hover:shadow-lg",
    secondary: "flex items-center gap-2 text-blue-600 hover:text-blue-800",
    filter: active
      ? "flex items-center gap-2 px-6 py-3 bg-green-600 text-white shadow-md"
      : "flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {icon && icon}
      {children}
    </button>
  );
};
