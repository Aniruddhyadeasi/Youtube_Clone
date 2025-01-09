import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 p-4 text-center">
    <p>&copy; {new Date().getFullYear()} MyTube. All rights reserved.</p>
    <div className="mt-2">
      <a href="#" className="text-indigo-400">Privacy Policy</a> | 
      <a href="#" className="text-indigo-400 ml-2">Terms of Service</a>
    </div>
  </footer>
);

export default Footer;