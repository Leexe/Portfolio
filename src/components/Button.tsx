import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "px-3 py-3 rounded-2xl border border-neutral-700 bg-neutral-900" +
    "hover:bg-neutral-800 hover:border-neutral-500 text-neutral-200" +
    "font-medium text-sm transition-all";

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button onClick={onClick} className={`${baseStyles} ${className}`}>
        {children}
      </button>
    );
  }
}
