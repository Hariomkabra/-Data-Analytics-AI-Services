import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  type = 'button',
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm shadow-primary-500/20',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 shadow-sm shadow-secondary-500/20',
    outline: 'border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  if (href) {
    // External link
    if (href.startsWith('http')) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={classes}
        >
          {children}
        </a>
      );
    }
    // Internal link
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  // Regular button
  return (
    <button 
      type={type} 
      className={classes} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;