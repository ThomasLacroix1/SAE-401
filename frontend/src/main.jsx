import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, {moviesLoader} from './routes/root.jsx';
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    loader: moviesLoader,
    // children: [
    //   {
    //     path: '/buy',
    //     element: <Buy />,
    //     loader: buyLoader
    //   },
    //   {
    //     path: '/team/:teamName',
    //     element: <OurTeams />,
    //     loader: ourTeamsLoader
    //   }
    // ]
  },
  {
    path: '/about',
    element: <About />
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}