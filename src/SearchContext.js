import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);

  if (context === undefined)
    throw new Error('SearchContext was use outside of the SearchProvider');

  return context;
}

export { SearchProvider, useSearch };
