import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir a Sidebar no mobile */}
      <button
        className="fixed top-4 left-4 z-30 bg-blue-400 text-white p-2 rounded-md shadow-md hover:bg-blue-300 transition md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`sidebar fixed top-0 left-0 h-full bg-white dark:bg-gray-800 shadow-lg z-20 transition-all duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } md:relative md:translate-x-0 md:opacity-100 md:w-[15%]`}
      >
        {/* Conteúdo da Sidebar */}
        <nav className="space-y-6 pt-20 md:pt-8 px-6">
          <a href="#" className="sidebar-link">
            Visão Geral
          </a>
          <a href="#" className="sidebar-link">
            Relatórios
          </a>
          <a href="#" className="sidebar-link">
            Configurações
          </a>
        </nav>
      </aside>

      {/* Overlay para fechar no mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-12 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
