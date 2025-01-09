import React from 'react';
import ForgotPassword from '../components/auth/ForgotPassword';

const ForgotPasswordPage = () => (
  <div>
    <ForgotPassword onSuccess={() => console.log('Password reset email sent')} />
  </div>
);

export default ForgotPasswordPage;