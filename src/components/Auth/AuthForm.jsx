import { useState, useContext } from 'react';
import AuthContext from '../../contexts/auth/authContext';

export default function AuthForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');

    const { user, login, register, logout, loading } = useContext(AuthContext);

    const handleSubmit = async (e) => {
      e.preventDefault();
        setError('');

        try {
            if (isLogin) {
                await login(email, password);
            } else {
                await register(email, password);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return (
            <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
                <h2>Welcome!</h2>
                <p>Email: {user.email}</p>
                <p>User ID: {user.uid}</p>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>

            {error && (
                <div style={{ color: 'red', marginBottom: '10px' }}>
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px' }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
                >
                    {loading ? 'Processing...' : (isLogin ? 'Login' : 'Register')}
                </button>
            </form>

            <p>
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                >
                    {isLogin ? 'Register' : 'Login'}
                </button>
            </p>
        </div>
    );
}