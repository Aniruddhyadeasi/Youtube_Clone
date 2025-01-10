import React from 'react';
import SearchBar from '../components/search/SearchBar';
import SearchResults from '../components/search/SearchResults';

const SearchPage = () => {
  const [results, setResults] = React.useState([]);

  const handleSearch = async (query) => {
    // Mock API call
    const mockResults = [
      { id: 1, title: `Result for "${query}" 1`, description: 'Sample description' },
      { id: 2, title: `Result for "${query}" 2`, description: 'Another sample description' },
    ];
    setResults(mockResults);
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default SearchPage;
