import ReactDOM from 'react-dom/client';
// import { App } from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '/src/routes/Root';
import { HomePage } from './pages/HomePage.jsx';
import { UkrainianCirclePage } from './pages/UkrainianCirlcePage/UkrainianCirclePage';

const router = createBrowserRouter([
  {
    path: '/the-soul/',
    element: <Root />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: 'ukrainian-circle',
            element: <UkrainianCirclePage />
        }

]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
