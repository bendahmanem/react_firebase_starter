import AuthContextProvider from "./contexts/auth/authProvider.jsx";
import AuthForm from "./components/Auth/AuthForm";
import "./App.css";
import TestComponent from "./components/TestComponent.jsx";

function App() {
  return (
    <AuthContextProvider>
      <div>
        <h1>Firebase Email Authentication</h1>
        <AuthForm />
      </div>
    </AuthContextProvider>
  );
}

export default App;
