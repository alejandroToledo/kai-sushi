import Link from 'next/link';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'terciary' | 'disabled';
  className?: string;
  children: React.ReactNode;
}

export default function Button({ 
  href, 
  variant = 'primary', 
  className = '', 
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-6 py-2 transition-all duration-200";
  
  const variants = {
    primary: "border border-[#E14735] text-[#E14735] hover:bg-[#E14735] hover:text-white",
    secondary: "border border-white text-white hover:bg-white hover:text-[#E14735]",
    terciary: "border border-[#E14735] text-white bg-[#E14735] ",
    disabled: "border border-gray-400 text-gray-400 cursor-not-allowed"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
} 