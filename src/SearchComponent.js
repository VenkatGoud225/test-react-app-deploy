// components/SearchComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
        'https://api.cognitive.microsoft.com/bing/v7.0/search?q=${searchTerm}',
        {
          headers: {
            'Ocp-Apim-Subscription-Key': '73529b7a4994ytec8d4ca6c33049',
          },
        }
      );
      
      setSearchResults(response.data.webPages.value);

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter your search query"/>
      <button onClick={handleSearch}>Search</button>
      
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              {result.name}
            </a>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchComponent;
