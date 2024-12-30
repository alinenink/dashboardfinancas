import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeTransaction } from "../redux/slices/transactionsSlice";

const TransactionHistory: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const categories = [...new Set(transactions.map((t) => t.category).filter(Boolean))];
  const months = [
    { value: "1", label: "Janeiro" },
    { value: "2", label: "Fevereiro" },
    { value: "3", label: "Março" },
    { value: "4", label: "Abril" },
    { value: "5", label: "Maio" },
    { value: "6", label: "Junho" },
    { value: "7", label: "Julho" },
    { value: "8", label: "Agosto" },
    { value: "9", label: "Setembro" },
    { value: "10", label: "Outubro" },
    { value: "11", label: "Novembro" },
    { value: "12", label: "Dezembro" },
  ];

  const filteredTransactions = transactions.filter((transaction) => {
    const transactionMonth = new Date(transaction.date).getMonth() + 1;
    return (
      (!selectedCategory || transaction.category === selectedCategory) &&
      (!selectedType || transaction.type === selectedType) &&
      (!selectedMonth || transactionMonth === Number(selectedMonth))
    );
  });

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-2">Histórico</h2>
      <p className="text-gray-500 mb-4">Gerencie suas transações e acompanhe seus gastos e rendas registrados.</p>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex-1">
          <label htmlFor="category" className="text-sm font-bold text-gray-600 dark:text-gray-200">
            Categoria
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg mt-2"
          >
            <option value="">Todas</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="type" className="text-sm font-bold text-gray-600 dark:text-gray-200">
            Tipo
          </label>
          <select
            id="type"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg mt-2"
          >
            <option value="">Todos</option>
            <option value="Renda">Renda</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="month" className="text-sm font-bold text-gray-600 dark:text-gray-200">
            Mês
          </label>
          <select
            id="month"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="w-full p-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg mt-2"
          >
            <option value="">Todos</option>
            {months.map((month) => (
              <option key={month.value} value={month.value}>
                {month.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tabela */}
      {filteredTransactions.length === 0 ? (
        <p className="text-gray-500">Nenhuma transação encontrada.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr>
                <th className="border-b pb-2 text-left">Valor</th>
                <th className="border-b pb-2 text-left">Categoria</th>
                <th className="border-b pb-2 text-left">Data</th>
                <th className="border-b pb-2 text-left">Tipo</th>
                <th className="border-b pb-2 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border-b p-2">
                    {Number(transaction.value).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td className="border-b p-2">{transaction.category || "-"}</td>
                  <td className="border-b p-2">{transaction.date}</td>
                  <td className="border-b p-2">
                    {transaction.type === "Renda" ? "Renda" : "Despesa"}
                  </td>
                  <td className="border-b p-2">
                    <button
                      onClick={() => dispatch(removeTransaction(transaction.id))}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg disabled:opacity-50"
          >
            Anterior
          </button>
          <span className="text-gray-600 dark:text-gray-300">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg disabled:opacity-50"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
