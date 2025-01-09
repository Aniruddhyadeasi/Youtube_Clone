import React from 'react';

const Alert = ({ variant, description, onClose }) => {
  const className = {
    destructive: 'bg-red-100 border-red-500 text-red-700',
    success: 'bg-green-100 border-green-500 text-green-700',
    info: 'bg-blue-100 border-blue-500 text-blue-700',
  }[variant];

  return (
    <div
      className={`rounded-md p-4 border-1 ${className}`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <div>
          <span className="font-medium">{variant === 'destructive' ? 'Error' : 'Alert'}</span>
          <p className="text-sm">{description}</p>
        </div>
        {onClose && (
          <button
            type="button"
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;