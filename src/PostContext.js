import { createContext, useContext, useMemo, useState } from 'react';

import createRandomPost from './utils/createRandomPost';
import { useSearch } from './SearchContext';

const PostContext = createContext();

function PostProvider({ children }) {
  const { searchQuery } = useSearch();

  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(
    () => ({
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
    }),
    [searchedPosts]
  );

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);

  if (context === undefined)
    throw new Error('PostContext was use outside of the PostProvider');

  return context;
}

export { PostProvider, usePosts };
