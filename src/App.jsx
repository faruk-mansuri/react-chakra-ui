import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import { RootLayout, Dashboard, Create, Profile, Error } from './pages';

// loader
import { loader as dashBoardLoader } from './pages/Dashboard';

// action
import { action as createAction } from './pages/Create';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Dashboard />, loader: dashBoardLoader },
      { path: 'create', element: <Create />, action: createAction },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
