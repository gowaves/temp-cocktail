import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Landing,
  About,
  Newsletter,
  Error,
  HomeLayout,
  Cocktail,
  SinglePageError,
} from './pages';

import { loader as landingLoader } from './pages/Landing.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
      },
      {
        path: 'about',
        element: <About />,
        children: [
          {
            path: 'company',
            element: <h1>Company details found here</h1>,
          },
          {
            path: 'person',
            element: <h1>Person details found here</h1>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
