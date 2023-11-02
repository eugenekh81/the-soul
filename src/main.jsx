import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import { Root } from '/src/routes/Root';
import { HomePage } from './pages/HomePage/';
import { UkrainianCirclePage } from './pages/UkrainianCirlcePage/';
import { ErrorPage } from './pages/ErrorPage/';
import { TeamPage } from './pages/TeamPages/';
import { OleksandraShymanova } from './pages/TeamPages/OleksandraShymanova/';

const router = createBrowserRouter([
  {
    path: '/the-soul',
    element: <Navigate to='en' replace={true} />,
  },
  {
    path: '/the-soul/en',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'ukrainian-circle',
        element: <UkrainianCirclePage />,
      },
      {
        path: 'team',
        children: [
          {
            index: true,
            element: <TeamPage />,
          },
          {
            path: 'oleksandra-shymanova',
            element: <OleksandraShymanova />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
