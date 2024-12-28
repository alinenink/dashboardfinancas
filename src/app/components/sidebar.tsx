import React, { useState } from "react";
import { AiOutlineDashboard, AiOutlineForm } from "react-icons/ai";
import Link from "next/link"; // Importa o Link do Next.js

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const categories = ["Alimentação", "Transporte", "Saúde", "Lazer", "Educação"];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [periodType, setPeriodType] = useState("Ultimo Mês");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    console.log({
      selectedMonth,
      selectedCategory,
      periodType,
      startDate,
      endDate,
    });
  };

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
        <div className="flex justify-center mt-[5rem] mb-8">
          <div className="wrapped-circle">
            <img
              src="/logo4.png"
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Bloco das opções */}
        <nav className="space-y-6 pt-18 md:pt-16 px-6 mb-[7rem]">
          {/* Link para Visão Geral */}
          <Link href="/dashboard" className="flex items-center text-lg font-bold text-gray-700 dark:text-gray-100">
              <AiOutlineDashboard className="mr-2" />
              Visão Geral
          </Link>
          {/* Link para Inserir Dados */}
          <Link href="/transactions" className="flex items-center text-lg font-bold text-gray-700 dark:text-gray-100">
              <AiOutlineForm className="mr-2" />
              Inserir Dados
          </Link>
        </nav>

        {/* Filtros */}
        <div className="px-6 mt-6 space-y-4">
          {/* Filtro: Período Fixo */}
          <div>
            <label
              htmlFor="periodo-fixo"
              className="text-sm font-bold dark:text-gray-200"
            >
              Período Fixo
            </label>
            <select
              id="periodo-fixo"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full mt-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            >
              <option value="">Selecione o mês</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro: Tipo de Gasto */}
          <div>
            <label
              htmlFor="tipo-gasto"
              className="text-sm font-bold dark:text-gray-200"
            >
              Tipo de Gasto
            </label>
            <select
              id="tipo-gasto"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full mt-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            >
              <option value="">Selecione</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro: Período Personalizado */}
          <div>
            <label
              htmlFor="periodo-personalizado"
              className="text-sm font-bold dark:text-gray-200"
            >
              Período
            </label>
            <select
              id="periodo-personalizado"
              value={periodType}
              onChange={(e) => setPeriodType(e.target.value)}
              className="w-full mt-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            >
              <option value="Ultimo Mês">Último Mês</option>
              <option value="Ultimos 3 meses">Últimos 3 meses</option>
              <option value="Personalizado">Personalizado</option>
            </select>
            {periodType === "Personalizado" && (
              <div className="mt-2 flex gap-4">
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                />
              </div>
            )}
          </div>

          {/* Botão de filtro */}
          <div className="mt-4 text-center">
            <button
              onClick={handleFilter}
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            >
              Filtrar
            </button>
          </div>
        </div>
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
