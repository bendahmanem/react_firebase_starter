
import { redirect } from 'react-router';
import { auth } from '../firebase/firebase.config.js';

export const authMiddleware = async ({ request }, next) => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      unsubscribe();

      if (!user) {
        resolve(redirect('/'));
        return;
      }

      // User is authenticated, continue with the navigation
      const response = await next();
      resolve(response);
    });
  });
};

export const guestMiddleware = async ({ request }, next) => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      unsubscribe();

      if (user) {
        resolve(redirect('/dashboard'));
        return;
      }

      // User is not authenticated, continue with the navigation
      const response = await next();
      resolve(response);
    });
  });
};