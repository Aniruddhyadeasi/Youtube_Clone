import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((result) => (
        <div key={result._id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{result.title}</h3>
          <p className="text-sm text-gray-600">{result.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
