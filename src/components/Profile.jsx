
import { useLoaderData, Link, useNavigate } from 'react-router';
import { useContext } from 'react';
import AuthContext from '../contexts/auth/authContext.js';

export default function Profile() {
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
      <h2>Profile</h2>

      <nav style={{ margin: '20px 0' }}>
        <Link to="/dashboard" style={{ marginRight: '10px' }}>
          Dashboard
        </Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      <div>
        <h3>User Information</h3>
        <p><strong>Email:</strong> {loaderData.user.email}</p>
        <p><strong>User ID:</strong> {loaderData.user.uid}</p>
        <p><strong>Display Name:</strong> {loaderData.user.displayName || 'Not set'}</p>
      </div>
    </div>
  );
}