export default function Header() {
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  };

  return (
    <header className="header">
      <h1 className="header-title">Finanças Pessoais</h1>
      <button
        onClick={toggleTheme}
        className="button button-secondary"
      >
        Toggle Theme
      </button>
    </header>
  );
}
