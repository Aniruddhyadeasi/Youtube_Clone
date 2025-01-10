import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <img
        src={user.avatar || '/placeholder.png'}
        alt="Profile"
        className="h-24 w-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold text-center mt-4">{user.fullName}</h2>
      <p className="text-gray-500 text-center">{user.email}</p>
    </div>
  );
};

export default UserProfile;
