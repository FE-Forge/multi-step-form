import type { ButtonHTMLAttributes } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/shared/utils';

const buttonVariants = cva('w-full p-2 rounded-md cursor-pointer', {
  variants: {
    variant: {
      solid: 'bg-blue-500 text-white border-none',
      outline: 'border border-gray-300 active:border-blue-500 active:text-blue-500',
    },
    level: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-200 text-black',
    },
    disabled: {
      true: 'bg-gray-300 text-gray-500 cursor-not-allowed',
    },
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  disabled?: boolean;
}

export function Button({ children, className, variant = 'solid', level, disabled, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ className, variant, level, disabled }))} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
