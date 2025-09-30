
import { useLoaderData, Link, useNavigate } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../contexts/auth/authContext.js';

export default function Dashboard() {
  const loaderData = useLoaderData();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/')
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Dashboard</h2>
      <p>Welcome, {loaderData.user.email}!</p>
      <p>User ID: {loaderData.user.uid}</p>

      <nav style={{ margin: '20px 0' }}>
        <Link to="/profile" style={{ marginRight: '10px' }}>
          Profile
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div>
        <h3>Your Protected Content</h3>
        <p>This content is only visible to authenticated users.</p>
      </div>
    </div>
  );
}