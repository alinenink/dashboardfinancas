import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir a Sidebar no mobile */}
      <button
        className="fixed top-4 left-4 z-30 bg-blue-500 text-white p-2 rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`sidebar transform ${
          isOpen
            ? "translate-x-0 top-[8px] left-[158px] w-[37%]"  // Quando aberto
            : "-translate-x-full"  // Quando fechado
        } transition-transform duration-300 ease-in-out fixed z-20 md:relative md:translate-x-0`}
      >
        {/* Adicione espaçamento extra ao conteúdo */}
        <nav className="space-y-4 pt-16 md:pt-4">
          <a
            href="#"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Visão Geral
          </a>
          <a
            href="#"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Relatórios
          </a>
          <a
            href="#"
            className="block text-blue-600 dark:text-blue-400 hover:underline"
          >
            Configurações
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
