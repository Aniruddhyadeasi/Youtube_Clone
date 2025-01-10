import React from 'react';
import SignupForm from '../components/auth/SignupForm';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <SignupForm onSuccess={(user) => console.log('Signed up:', user)} />
    </div>
  );
};

export default SignupPage;