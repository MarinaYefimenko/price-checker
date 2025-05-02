import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({ children, onClick, type = "button", className = "" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition ${className}`}
    >
      {children}
    </button>
  );
}