import React, { useState } from "react";
import { AiOutlineDashboard, AiOutlineForm } from "react-icons/ai";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { filterTransactions } from "../redux/slices/transactionsSlice";

const months = [
  { name: "Janeiro", value: 1 },
  { name: "Fevereiro", value: 2 },
  { name: "Março", value: 3 },
  { name: "Abril", value: 4 },
  { name: "Maio", value: 5 },
  { name: "Junho", value: 6 },
  { name: "Julho", value: 7 },
  { name: "Agosto", value: 8 },
  { name: "Setembro", value: 9 },
  { name: "Outubro", value: 10 },
  { name: "Novembro", value: 11 },
  { name: "Dezembro", value: 12 },
];

const categories = ["Alimentação", "Transporte", "Saúde", "Lazer", "Educação"];

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [periodType, setPeriodType] = useState("Ultimo Mês");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    const today = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    const maxRange = 90; // Máximo de 3 meses
    const maxYears = 5; // Máximo de 5 anos atrás

    // Validação de range de datas
    if (periodType === "Personalizado") {
      if (start > end) {
        alert("A data inicial não pode ser maior que a data final.");
        return;
      }

      const diffInDays = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      if (diffInDays > maxRange) {
        alert("O intervalo máximo é de 3 meses.");
        return;
      }

      const fiveYearsAgo = new Date();
      fiveYearsAgo.setFullYear(today.getFullYear() - maxYears);
      if (start < fiveYearsAgo) {
        alert("O intervalo deve estar dentro dos últimos 5 anos.");
        return;
      }
    }

    // Aplicar filtro no Redux
    dispatch(
      filterTransactions({
        month: selectedMonth || undefined,
        category: selectedCategory || undefined,
        startDate: periodType === "Personalizado" ? startDate : null,
        endDate: periodType === "Personalizado" ? endDate : null,
      })
    );

    setIsOpen(false); // Fechar sidebar no mobile após filtrar
  };

  return (
    <>
      {/* Botão para abrir a Sidebar no mobile */}
      <button
        className="fixed top-4 left-4 z-30 bg-gradient-to-r from-blue-400 to-blue-600 text-white p-2 rounded-md shadow-md hover:from-blue-500 hover:to-blue-700 transition md:hidden"
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
          <Link href="/dashboard" className="flex items-center text-lg font-bold text-gray-700 dark:text-gray-100">
            <AiOutlineDashboard className="mr-2" />
            Visão Geral
          </Link>
          <Link href="/transactions" className="flex items-center text-lg font-bold text-gray-700 dark:text-gray-100">
            <AiOutlineForm className="mr-2" />
            Inserir Dados
          </Link>
        </nav>

        {/* Filtros */}
        <div className="px-6 mt-6 space-y-4">
          <div>
            <label htmlFor="periodo-fixo" className="text-sm font-bold dark:text-gray-200">
              Período Fixo
            </label>
            <select
              id="periodo-fixo"
              onChange={(e) => setSelectedMonth(Number(e.target.value) || null)}
              className="w-full mt-2 p-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            >
              <option value="">Selecione o mês</option>
              {months.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.name}
                </option>
              ))}
            </select>
          </div>   
          <div className="mt-4 text-center">
            <button onClick={handleFilter} className="button-gradient">
              Filtrar
            </button>
          </div>
        </div>
      </aside>

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
