import { Suspense } from 'react';

import { EnrollProfileCompleteView } from './EnrollProfileCompleteView';
import { EnrollProfileCompleteSkeleton } from './EnrollProfileCompleteSkeleton';

export function EnrollProfileCompletePage() {
  return (
    <Suspense fallback={<EnrollProfileCompleteSkeleton />}>
      <EnrollProfileCompleteView />
    </Suspense>
  );
}
