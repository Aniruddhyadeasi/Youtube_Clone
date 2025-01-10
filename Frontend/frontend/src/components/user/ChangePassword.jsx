import React, { useState } from 'react';

const ChangePassword = () => {
  const [formData, setFormData] = useState({ currentPassword: '', newPassword: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/v1/users/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Password updated successfully!');
    } else {
      alert('Failed to update password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h2 className="text-lg font-semibold">Change Password</h2>
      <div className="mt-4">
        <input
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          onChange={handleChange}
          className="block w-full border px-4 py-2 rounded mt-2"
        />
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          onChange={handleChange}
          className="block w-full border px-4 py-2 rounded mt-2"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded mt-4"
        >
          Update Password
        </button>
      </div>
    </form>
  );
};

export default ChangePassword;
