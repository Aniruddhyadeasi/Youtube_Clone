import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <LoginForm onSuccess={(user) => console.log('Logged in:', user)} />
    </div>
  );
};

export default LoginPage;
