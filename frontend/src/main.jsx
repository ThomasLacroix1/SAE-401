import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import Home, {moviesLoader as homeMoviesLoader} from './routes/home.jsx';
import CategoriesNav, {categoryLoader} from './routes/categoriesNav.jsx';
import SearchPage, {moviesLoader as SearchMoviesLoader} from './routes/search.jsx';
import CategoriesPage, {moviesbycatLoader} from './routes/categoriesPage.jsx';
import MoviePage, {movieLoader} from './routes/movie.jsx'
import About from './routes/about.jsx';
import ErrorPage from './ui/ErrorPage';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeMoviesLoader,
      },
      {
        path: '/categories',
        element: <CategoriesNav />,
        loader: categoryLoader,
        children: [
          {
            path: '/categories/:catId',
            element: <CategoriesPage />,
            loader: moviesbycatLoader,
          }
        ]
      },
      {
        path: '/movie/:movId',
        element: <MoviePage />,
        loader: movieLoader,
      },
      {
        path: '/search',
        element: <SearchPage />,
        loader: SearchMoviesLoader,
      },
      
    ]
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