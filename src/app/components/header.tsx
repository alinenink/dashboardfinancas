export default function Header() {
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 w-full min-h-[15%] bg-gradient-to-r from-blue-700 to-blue-500 dark:from-gray-800 dark:to-gray-700 text-white flex items-center justify-between px-8 shadow-md z-10">
      <h1 className="text-lg font-bold ml-[22%]">Finanças Pessoais</h1>
      <button
        onClick={toggleTheme}
        className="bg-gray-800 text-white py-1 px-4 rounded hover:bg-gray-700 transition"
      >
        Toggle Theme
      </button>
    </header>
  );
}
