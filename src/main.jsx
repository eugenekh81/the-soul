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
import { OleksandraShymanova } from './pages/TeamPages/OleksandraShymanova';
import { MariyaVynnytska } from './pages/TeamPages/MariyaVynnytska';
import { IrynaRoyenko } from './pages/TeamPages/IrynaRoyenko';
import { MarynaYakhno } from './pages/TeamPages/MarynaYakhno';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='en' replace={true} />,
  },
  {
    path: '/:lang',
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
            path: 'oleksandra-shymanova',
            element: <OleksandraShymanova />,
          },
          {
            path: 'mariya-vynnytska',
            element: <MariyaVynnytska />,
          },
          {
            path: 'iryna-royenko',
            element: <IrynaRoyenko />,
          },
          {
            path: 'maryna-yakhno',
            element: <MarynaYakhno />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
