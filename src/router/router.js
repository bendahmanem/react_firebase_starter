
import { createBrowserRouter } from 'react-router';
import App from '../App.jsx';
import AuthForm from '../components/Auth/AuthForm.jsx';
import Dashboard from '../components/Dashboard.jsx';
import Profile from '../components/Profile.jsx';
import { authLoader, publicLoader } from './loaders.js';
import { authMiddleware, guestMiddleware } from './middleware.js';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        Component: AuthForm,
        middleware: [guestMiddleware],
        loader: publicLoader,
      },
      {
        path: 'dashboard',
        Component: Dashboard,
        middleware: [authMiddleware],
        loader: authLoader,
      },
      {
        path: 'profile',
        Component: Profile,
        middleware: [authMiddleware],
        loader: authLoader,
      },
    ],
  },
]);