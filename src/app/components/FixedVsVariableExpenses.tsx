import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const FixedVsVariableExpenses: React.FC = () => {
  // Selecionar dados do Redux
  const allTransactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const filteredTransactions = useSelector(
    (state: RootState) => state.transactions.filteredTransactions
  );

  // Determinar se há filtros aplicados
  const transactionsToUse =
    filteredTransactions.length > 0 ? filteredTransactions : allTransactions;

  // Caso não haja transações, evitar cálculo
  if (!transactionsToUse || transactionsToUse.length === 0) {
    return (
      <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg card-h">
        <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
          Gastos Fixos vs Variáveis
        </h3>
        <p className="text-center text-gray-500">Nenhum dado disponível</p>
      </div>
    );
  }

  // Categorias fixas e variáveis padrão
  const fixedCategories = ["Aluguel", "Educação"];
  const variableCategories = ["Alimentação", "Transporte", "Lazer", "Saúde"];

  let fixedTotal = 0;
  let variableTotal = 0;

  // Variáveis para capturar as novas categorias de despesa
  const newVariableCategories: Set<string> = new Set();

  transactionsToUse.forEach((transaction) => {
    if (transaction.type === "Despesa") {
      if (fixedCategories.includes(transaction.category || "")) {
        fixedTotal += transaction.value;
      } else if (variableCategories.includes(transaction.category || "")) {
        variableTotal += transaction.value;
      } else {
        // Categoria não definida como fixa ou variável, então é tratada como variável
        newVariableCategories.add(transaction.category || "");
        variableTotal += transaction.value;
      }
    }
  });

  // Dados para o gráfico
  const chartData = {
    labels: ["Gastos Fixos", "Gastos Variáveis"],
    datasets: [
      {
        data: [fixedTotal, variableTotal],
        backgroundColor: ["#A3D9A5", "#F8B4B4"],
        borderColor: ["#A3D9A5", "#F8B4B4"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.label}: R$ ${context.raw.toFixed(2)}`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg card-h">
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Gastos Fixos vs Variáveis
      </h3>

      <div className="flex-grow flex justify-center items-center">
        <div className="w-[70%] h-[70%]">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-3">
        <div className="flex items-center">
          <div
            className="w-4 h-4 rounded-full mr-2"
            style={{ backgroundColor: "#A3D9A5" }}
          ></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Gastos Fixos
          </span>
        </div>
        <div className="flex items-center">
          <div
            className="w-4 h-4 rounded-full mr-2"
            style={{ backgroundColor: "#F8B4B4" }}
          ></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Gastos Variáveis
          </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
          <strong>Gastos Fixos:</strong> R$ {fixedTotal.toFixed(2)}
        </div>
        <div className="text-sm font-medium text-gray-800 dark:text-gray-100">
          <strong>Gastos Variáveis:</strong> R$ {variableTotal.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default FixedVsVariableExpenses;
