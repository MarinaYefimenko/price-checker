import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, variant = "primary", onClick, className }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded text-white font-semibold";
  const variants = {
    primary: "bg-primary hover:bg-green-700",
    secondary: "bg-secondary text-black hover:bg-lime-300",
  };

  return (
    <button onClick={onClick} className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </button>
  );
}
