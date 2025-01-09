import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => (
  <div>
    <LoginForm onSuccess={(user) => console.log('Logged in:', user)} />
  </div>
);

export default LoginPage;