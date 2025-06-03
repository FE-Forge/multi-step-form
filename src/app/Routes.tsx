import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { EnrollProfileProvider } from '@/pages/enroll-profile/model/enroll-profile.context';
import { EnrollProfilePage } from '@/pages/enroll-profile';
import { EnrollProfileCompletePage } from '@/pages/enroll-profile-complete';

const router = createBrowserRouter([
  {
    path: '/enroll-profile',
    element: <Navigate to="/enroll-profile/1" replace />,
  },
  {
    path: '/enroll-profile/:step',
    element: (
      <EnrollProfileProvider>
        <EnrollProfilePage />
      </EnrollProfileProvider>
    ),
  },
  {
    path: '/enroll-profile-complete/:userId',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <EnrollProfileCompletePage />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/enroll-profile" replace />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
