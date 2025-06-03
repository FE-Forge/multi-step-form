import { cn } from '@/shared/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * 스케레톤 높이
   */
  height: string | number;
  /**
   * 스케레톤 너비
   */
  width?: string | number;
}

export function Skeleton({ width = '100%', height, className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn('animate-pulse bg-gray-200 rounded-md bg-[length:200%_100%]', className)}
      style={{
        width,
        height,
      }}
      {...props}
    />
  );
}
Skeleton.displayName = 'Skeleton';
