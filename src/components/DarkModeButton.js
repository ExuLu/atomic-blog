export default function DarkModeButton({ isFakeDark, setIsFakeDark }) {
  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className='btn-fake-dark-mode'
    >
      {isFakeDark ? '☀️' : '🌙'}
    </button>
  );
}
