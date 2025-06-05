import { Suspense, ErrorBoundary } from '@suspensive/react';
import { SuspenseQuery } from '@suspensive/react-query';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { EnrollProfileCompleteView } from './EnrollProfileCompleteView';
import { EnrollProfileCompleteSkeleton } from './EnrollProfileCompleteSkeleton';
import { ErrorFallback } from './ErrorFallback';
import { userQueryOptions } from '../api/user.query';

export function EnrollProfileCompletePage() {
  const { userId } = useParams();

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary fallback={ErrorFallback} onReset={reset}>
          <Suspense fallback={<EnrollProfileCompleteSkeleton />}>
            <SuspenseQuery {...userQueryOptions(Number(userId))}>
              {({ data }) => <EnrollProfileCompleteView user={data} />}
            </SuspenseQuery>
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
