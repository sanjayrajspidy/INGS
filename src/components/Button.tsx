import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glass';
  className?: string;
  isMagnetic?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  isMagnetic = false,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current || !isMagnetic) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Limit pull distance
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full text-sm px-6 py-2.5 focus:outline-none cursor-pointer focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 shadow-[0_4px_20px_rgba(255,255,255,0.15)]",
    secondary: "border border-white/10 bg-neutral-900/80 text-white hover:bg-neutral-800 hover:border-white/20",
    glass: "glass-panel-light text-white hover:bg-white/5 border border-white/5",
  };

  return (
    <motion.button
      ref={buttonRef as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={isMagnetic ? { x: position.x, y: position.y } : {}}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props as any}
    >
      {children}
    </motion.button>
  );
};
