import React from 'react';
import UserProfile from '../components/user/UserProfile';
import ChangePassword from '../components/user/ChangePassword';

const UserProfilePage = ({ user }) => {
  return (
    <div className="p-4">
      <UserProfile user={user} />
      <div className="mt-6">
        <ChangePassword onSubmit={(data) => console.log('Password changed:', data)} />
      </div>
    </div>
  );
};

export default UserProfilePage;
