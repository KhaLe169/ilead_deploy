import TeamTab from 'pages/toob/team/TeamTab';
import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard/DashboardLayout';
import Objectives from '../pages/Objectives/Objectives';
import DetailObjectives from 'pages/Objectives/Detail';

const loadable = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<>Loading .....</>}>
      <Component {...props} />
    </Suspense>
  );
};

const ToobPageInfo = loadable(lazy(() => import('pages/toob/ToobInfo')));
const ProgressPage = loadable(lazy(() => import('pages/toob//ProgressPage')));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
  },
  {
    path: 'ilead',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <Objectives /> },
      { path: ':id', element: <DetailObjectives /> },
    ],
  },
  {
    path: 'toob',
    element: <DashboardLayout />,
    children: [
      {
        path: 'info',
        element: <ToobPageInfo />,
      },
      { path: 'progress', element: <ProgressPage /> },
      {
        path: 'team', element: <TeamTab />
      }
    ],
  },
]);
