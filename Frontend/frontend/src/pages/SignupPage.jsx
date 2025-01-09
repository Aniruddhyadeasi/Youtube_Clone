import React from 'react';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => (
  <div>
    <SignupForm onSuccess={(user) => console.log('Signed up:', user)} />
  </div>
);

export default SignupPage;