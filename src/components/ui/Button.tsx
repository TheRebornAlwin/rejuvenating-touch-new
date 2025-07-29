import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'cta';
  size?: 'default' | 'sm' | 'lg';
  luxury?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', luxury = false, className, children, asChild, ...props }, ref) => {
    const baseClasses = `inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-700 hover:transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm ${luxury ? 'relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000' : ''}`;
    
    const variants = {
      primary: `bg-forest text-gold hover:bg-opacity-90 shadow-lg hover:shadow-xl soft-glow ${luxury ? 'bg-gradient-to-r from-forest to-forest/90' : ''}`,
      cta: `bg-white text-forest border-2 border-white hover:bg-cream hover:border-cream shadow-lg hover:shadow-xl font-bold ${luxury ? 'bg-gradient-to-r from-white to-cream' : ''}`,
      secondary: `border-2 border-forest text-forest hover:bg-forest hover:text-gold shadow-lg hover:shadow-xl ${luxury ? 'border-gradient' : ''}`,
      ghost: `border-2 border-gold text-gold hover:bg-transparent hover:border-forest hover:text-forest backdrop-blur-sm ${luxury ? 'border-gradient' : ''}`
    };
    
    const sizes = {
      sm: "px-6 py-3 text-sm",
      default: "px-12 py-6 text-lg",
      lg: "px-16 py-8 text-xl"
    };

    if (asChild) {
      return (
        <span className={cn(baseClasses, variants[variant], sizes[size], className)}>
          {children}
        </span>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };