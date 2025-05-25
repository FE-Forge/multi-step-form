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
  },
});

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export function Button({ children, className, variant = 'solid', level, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ className, variant, level }))} {...props}>
      {children}
    </button>
  );
}
