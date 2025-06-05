import { Button } from '@/shared/ui';

interface ErrorFallbackProps {
  error: Error;
  reset: () => void;
}

export function ErrorFallback({ error, reset }: ErrorFallbackProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-semibold text-red-500">오류가 발생했습니다</h2>
        <p className="text-sm text-muted-foreground">{error.message}</p>
      </div>
      <Button onClick={reset} variant="outline">
        다시 시도
      </Button>
    </div>
  );
}
