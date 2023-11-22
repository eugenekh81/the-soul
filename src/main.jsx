import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '/src/routes/Root';
import { HomePage } from './pages/HomePage/';
import { UkrainianCirclePage } from './pages/UkrainianCirlcePage/';
import { ErrorPage } from './pages/ErrorPage/';
import { OlexandraShymanova } from './pages/TeamPages/OlexandraShymanova';
import { MariyaVynnytska } from './pages/TeamPages/MariyaVynnytska';
import { IrynaRoyenko } from './pages/TeamPages/IrynaRoyenko';
import { MarynaYakhno } from './pages/TeamPages/MarynaYakhno';
import { MeetingWithTheSoulPage } from './pages/MeetingWithTheSoulPage/MeetingWithTheSoulPage';

const router = createBrowserRouter([
  {
    path: '/',
    /* element: <Navigate to='en' replace={true} />, */
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':lang',
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'projects',
            children: [
              {
                path: 'ukrainian-circle',
                element: <UkrainianCirclePage />,
              },
              {
                path: 'meeting-with-the-soul',
                element: <MeetingWithTheSoulPage />,
              },
            ],
          },
          {
            path: 'team',
            children: [
              {
                path: 'olexandra-shymanova',
                element: <OlexandraShymanova />,
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

          {
            path: '*',
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
