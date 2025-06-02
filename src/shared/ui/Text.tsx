import { cva } from 'class-variance-authority';
import type { HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/shared/utils';

export interface BaseProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  children?: ReactNode;
  level: 't1' | 't2' | 'b1' | 'error';
  required?: boolean;
}

type TextProps = BaseProps & HTMLAttributes<HTMLSpanElement>;

const textVariants = cva('', {
  variants: {
    level: {
      t1: 'text-[18px] font-bold',
      t2: 'text-[16px] font-bold',
      b1: 'text-[14px] font-normal',
      error: 'text-red-500 text-[12px]',
    },
  },
});

export function Text({ as, children, level = 't1', required = false, className, ...props }: TextProps) {
  const Component = as || 'span';
  return (
    <Component className={cn(textVariants({ level, className }))} {...props}>
      {children} {required && <span className="text-red-500">*</span>}
    </Component>
  );
}
