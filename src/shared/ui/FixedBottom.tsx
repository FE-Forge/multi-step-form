import { cn } from '@/shared/utils';
import { GlobalPortal } from './GlobalPortal';

export function FixedBottom({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <GlobalPortal.Consumer>
      <div className="fixed left-0 bottom-0 w-full">
        <div className={cn('pt-0 py-5 pb-[18px] max-w-[360px] mx-auto', className)}>{children}</div>
      </div>
    </GlobalPortal.Consumer>
  );
}
