import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '/src/routes/Root';
import { HomePage } from './pages/HomePage/';
import { AboutUsPage } from './pages/AboutUsPage/';
import { UkrainianCirclePage } from './pages/UkrainianCirlcePage/';
import { ErrorPage } from './pages/ErrorPage/';
import { OlexandraShymanova } from './pages/TeamPages/OlexandraShymanova';
import { MariyaVynnytska } from './pages/TeamPages/MariyaVynnytska';
import { IrynaRoyenko } from './pages/TeamPages/IrynaRoyenko';
import { MarynaYakhno } from './pages/TeamPages/MarynaYakhno';
import { MeetingWithTheSoulPage } from './pages/MeetingWithTheSoulPage/MeetingWithTheSoulPage';
import { DonatePage } from './pages/DonatePage/DonatePage';

const router = createBrowserRouter([
  {
    path: '/',

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
            path: 'about-us',
            element: <AboutUsPage />,
          },
          {
            path: 'projects',
            children: [
              {
                path: 'ukrainian-circle',
                element: <UkrainianCirclePage />,
              },
              {
                path: 'meetings-with-the-soul',
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
            path: 'donate',
            element: <DonatePage />,
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
