import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { EnrollProfilePage } from '@/pages/enroll-profile';
import { EnrollProfileCompletePage } from '@/pages/enroll-profile-complete';
import { NotFound } from '@/shared/ui/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/enroll-profile?step=1" replace />,
  },
  {
    path: '/enroll-profile',
    element: <EnrollProfilePage />,
  },
  {
    path: '/enroll-profile-complete/:userId',
    element: <EnrollProfileCompletePage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
