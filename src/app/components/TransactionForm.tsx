import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../redux/slices/transactionsSlice";

const TransactionForm: React.FC = () => {
  const [form, setForm] = useState({
    value: "",
    category: "",
    date: "",
    type: "Renda",
  });
  const dispatch = useDispatch();

  // Data máxima e mínima permitidas
  const today = new Date();
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(today.getFullYear() - 5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validação do valor
    const numericValue = parseFloat(form.value.replace(/[^0-9,-]+/g, "").replace(",", "."));
    if (isNaN(numericValue) || numericValue <= 0) {
      alert("Por favor, insira um valor válido.");
      return;
    }
  
    const newTransaction = {
      id: Date.now().toString(),
      value: numericValue, // Certifique-se de que é um número
      category: form.type === "Despesa" ? form.category : null,
      date: form.date,
      type: form.type,
    };
  
    dispatch(addTransaction(newTransaction));
    setForm({ value: "", category: "", date: "", type: "Renda" });
  };
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setForm({
      ...form,
      type,
      category: type === "Renda" ? "" : form.category, // Limpa a categoria se for "Renda"
    });
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    const formattedValue = (parseFloat(value) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setForm({ ...form, value: formattedValue });
  };

  return (
    <div className="card p-6">
      {/* Título do Formulário */}
      <h2 className="text-xl font-bold mb-4">Inserir Transação</h2>
      
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {/* Campo Valor */}
        <div className="flex flex-col gap-2">
          <label htmlFor="value" className="font-bold">
            Valor
          </label>
          <input
            type="text"
            id="value"
            value={form.value}
            onChange={handleValueChange}
            className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o valor"
            required
          />
        </div>

        {/* Campo Categoria */}
        {form.type === "Despesa" && (
          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-bold">
              Categoria
            </label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required={form.type === "Despesa"}
            >
              <option value="">Selecione</option>
              <option>Alimentação</option>
              <option>Aluguel</option>
              <option>Transporte</option>
              <option>Lazer</option>
              <option>Saúde</option>
              <option>Educação</option>
            </select>
          </div>
        )}

        {/* Campo Data */}
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="font-bold">
            Data
          </label>
          <input
            type="date"
            id="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            max={today.toISOString().split("T")[0]} // Limita à data atual
            min={fiveYearsAgo.toISOString().split("T")[0]} // Limita a 5 anos atrás
            required
          />
        </div>

        {/* Campo Tipo */}
        <div className="flex flex-col gap-2">
          <label htmlFor="type" className="font-bold">
            Tipo
          </label>
          <select
            id="type"
            value={form.type}
            onChange={handleTypeChange}
            className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option>Renda</option>
            <option>Despesa</option>
          </select>
        </div>

        {/* Botão Adicionar */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
