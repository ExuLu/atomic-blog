import { createContext, useContext, useMemo, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');

  const value = useMemo(() => ({ searchQuery, setSearchQuery }), [searchQuery]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);

  if (context === undefined)
    throw new Error('SearchContext was use outside of the SearchProvider');

  return context;
}

export { SearchProvider, useSearch };
