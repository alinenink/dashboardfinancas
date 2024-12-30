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

  const today = new Date();
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(today.getFullYear() - 5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numericValue = parseFloat(
      form.value.replace(/[^0-9,-]+/g, "").replace(",", ".")
    );
    if (isNaN(numericValue) || numericValue <= 0) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    const newTransaction = {
      id: Date.now().toString(),
      value: numericValue,
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
      category: type === "Renda" ? "" : form.category,
    });
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = (parseFloat(value) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    setForm({ ...form, value: formattedValue });
  };

  return (
    <div className="card p-6">
      <div className="mb-6 text-left">
        <h2 className="text-xl font-bold">Inserir Transação</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Aqui você pode registrar seus gastos e sua renda selecionando a data e
          categoria desejadas.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center gap-4 w-full"
      >
        {/* Campo Valor */}
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="value" className="font-bold block mb-1">
            Valor
          </label>
          <input
            type="text"
            id="value"
            value={form.value}
            onChange={handleValueChange}
            className="w-full h-[44px] p-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Digite o valor"
            required
          />
        </div>

        {/* Campo Data */}
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="date" className="font-bold block mb-1">
            Data
          </label>
          <input
            type="date"
            id="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full h-[44px] p-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            max={today.toISOString().split("T")[0]}
            min={fiveYearsAgo.toISOString().split("T")[0]}
            required
          />
        </div>

        {/* Campo Tipo */}
        <div className="flex-1 min-w-[150px]">
          <label htmlFor="type" className="font-bold block mb-1">
            Tipo
          </label>
          <select
            id="type"
            value={form.type}
            onChange={handleTypeChange}
            className="w-full h-[44px] p-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option>Renda</option>
            <option>Despesa</option>
          </select>
        </div>

        {/* Campo Categoria */}
        {form.type === "Despesa" && (
          <div className="flex-1 min-w-[150px]">
            <label htmlFor="category" className="font-bold block mb-1">
              Categoria
            </label>
            <select
              id="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full h-[44px] p-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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

        {/* Botão Adicionar */}
        <div className="relative flex-1 min-w-[150px] flex items-end top-[1.3vh]">
          {" "}
          <button
            type="submit"
            className="w-full h-[44px] bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 p-2 button-gradient"
          >
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
