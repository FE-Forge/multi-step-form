import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { EnrollProfilePage } from '@/pages/enroll-profile';
import { EnrollProfileCompletePage } from '@/pages/enroll-profile-complete';

const router = createBrowserRouter([
  {
    path: '/enroll-profile',
    element: <Navigate to="/enroll-profile/1" replace />,
  },
  {
    path: '/enroll-profile/:step',
    element: <EnrollProfilePage />,
  },
  {
    path: '/enroll-profile-complete/:userId',
    element: <EnrollProfileCompletePage />,
  },
  {
    path: '*',
    element: <Navigate to="/enroll-profile" replace />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
