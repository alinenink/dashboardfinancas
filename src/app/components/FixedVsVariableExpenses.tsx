import React from "react";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const FixedVsVariableExpenses: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  // Obter os últimos três meses disponíveis no Redux
  const lastThreeMonths = [...new Set(transactions.map((t) => {
    const date = new Date(t.date);
    return `${date.getFullYear()}-${date.getMonth() + 1}`;
  }))]
    .sort()
    .slice(-3);

  // Categorizar despesas por fixas e variáveis
  const fixedCategories = ["Aluguel", "Educação"];
  const variableCategories = ["Alimentação", "Transporte", "Lazer", "Saúde"];

  let fixedTotal = 0;
  let variableTotal = 0;

  lastThreeMonths.forEach((month) => {
    const [year, monthIndex] = month.split("-").map(Number);

    transactions.forEach((transaction) => {
      const transactionDate = new Date(transaction.date);
      const transactionYear = transactionDate.getFullYear();
      const transactionMonth = transactionDate.getMonth() + 1;

      if (
        transaction.type === "Despesa" &&
        transactionYear === year &&
        transactionMonth === monthIndex
      ) {
        if (fixedCategories.includes(transaction.category || "")) {
          fixedTotal += transaction.value;
        } else if (variableCategories.includes(transaction.category || "")) {
          variableTotal += transaction.value;
        }
      }
    });
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
