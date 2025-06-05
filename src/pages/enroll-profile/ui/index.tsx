import { ErrorBoundary, type ErrorBoundaryFallbackProps } from '@suspensive/react';
import { EnrollProfileProvider } from '../model/enroll-profile.context';
import { EnrollProfileView } from './EnrollProfileView';

export function EnrollProfilePage() {
  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <EnrollProfileProvider>
        <EnrollProfileView />
      </EnrollProfileProvider>
    </ErrorBoundary>
  );
}

function ErrorFallback({ error, reset }: ErrorBoundaryFallbackProps) {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-2xl font-bold">Error</h2>
      <p className="text-sm text-muted-foreground">{error.message}</p>
      <button className="text-sm text-blue-500" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
