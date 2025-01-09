import React from 'react';
import { Bell, Upload, Search } from 'lucide-react';

const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-10">
    <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
      {/* Navigation */}
      <div className="flex items-center space-x-4">
        <a href="/" className="text-xl font-bold">MyTube</a>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-4 py-2 w-96"
          />
          <Search className="absolute right-2 top-2 text-gray-500" />
        </div>
      </div>

      {/* User Section */}
      <div className="flex items-center space-x-4">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <Upload className="h-4 w-4" />
          <span>Upload</span>
        </button>
        <button className="relative">
          <Bell className="h-6 w-6 text-gray-500" />
        </button>
        <img
          src="/api/placeholder/32/32"
          alt="User Avatar"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  </header>
);

export default Header;