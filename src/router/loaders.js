import { redirect } from "react-router"; 
import { auth } from "../firebase/firebase.config";


// Helper function to check current auth state
const getCurrentUser = () => {
  return new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    });
  });
};

// Protected route loader - requires authentication
export const authLoader = async () => {
  const user = await getCurrentUser();

  if (!user) {
    throw redirect('/');
  }

  return {
    user: {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }
  };
};

// Public route loader - redirects if already authenticated
export const publicLoader = async () => {
  const user = await getCurrentUser();

  if (user) {
    throw redirect('/dashboard');
  }

  return null;
};