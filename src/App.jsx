import React from 'react';
import { AuthProvider } from './context/AuthContext';
import LoginForm from './components/LoginForm';
import BlogPost from './components/BlogPost';
import Protected from './components/Protected';

function App() {
  return (
    <AuthProvider>
      <LoginForm />
      <Protected />
      <BlogPost title="First Blog" content="Welcome to my blog app!" />
    </AuthProvider>
  );
}

export default App;
