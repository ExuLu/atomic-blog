import { useEffect, useState } from 'react';

import { PostProvider } from './PostContext';

import Header from './components/Header';
import Main from './components/Main';
import Archive from './components/Archive';
import Footer from './components/Footer';
import DarkModeButton from './components/DarkModeButton';

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle('fake-dark-mode');
    },
    [isFakeDark]
  );

  return (
    <section>
      <DarkModeButton isFakeDark={isFakeDark} setIsFakeDark={setIsFakeDark} />
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

export default App;
