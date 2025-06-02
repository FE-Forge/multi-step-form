import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { EnrollProfileProvider } from '@/pages/enroll-profile/model/enroll-profile.context';
import { EnrollProfilePage } from '@/pages/enroll-profile';
import { EnrollProfileSummaryPage } from '@/pages/enroll-profile-summary';

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
    path: '/enroll-profile-summary',
    element: (
      <EnrollProfileProvider>
        <EnrollProfileSummaryPage />
      </EnrollProfileProvider>
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
