
import { Outlet } from 'react-router';
import AuthContextProvider from './contexts/auth/authProvider.jsx';
import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <div>
        <h1>Firebase React Router Email auth :) </h1>
        <nav>
          {/* Navigation will be handled by individual components */}
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </AuthContextProvider>
  );
}

export default App;