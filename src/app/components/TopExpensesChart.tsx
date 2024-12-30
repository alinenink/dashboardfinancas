import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useTheme } from "./ThemeContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const pastelColors = [
  "#F8B4B4", // Rosa pastel
  "#A3D9A5", // Verde pastel
  "#F9E79F", // Amarelo pastel
  "#AFCDEA", // Azul pastel
  "#C8A2C8", // Roxo pastel
  "#F5A623", // Laranja pastel (para Aluguel)
];

const TopExpensesChart: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  // Obter o último mês disponível no Redux
  const lastMonth = Math.max(
    ...transactions.map(
      (transaction) => new Date(transaction.date).getMonth() + 1
    )
  );

  const { isDarkMode } = useTheme();

  // Filtrar despesas do último mês
  const lastMonthExpenses = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.getMonth() + 1;
    return transaction.type === "Despesa" && transactionMonth === lastMonth;
  });

  console.log("Despesas do último mês:", lastMonthExpenses);

  // Somar os valores por categoria
  const expensesByCategory: Record<string, number> = {};
  lastMonthExpenses.forEach((expense) => {
    if (expense.category) {
      if (!expensesByCategory[expense.category]) {
        expensesByCategory[expense.category] = 0;
      }
      expensesByCategory[expense.category] += expense.value;
    }
  });

  console.log("Gastos por categoria:", expensesByCategory);

  // Ordenar e selecionar as 5 maiores despesas
  const topExpenses = Object.entries(expensesByCategory)
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

  console.log("Top 5 despesas:", topExpenses);

  // Configurar dados do gráfico
  const chartData = {
    labels: topExpenses.map((expense) => expense.category),
    datasets: [
      {
        label: "Gastos",
        data: topExpenses.map((expense) => expense.amount),
        backgroundColor: pastelColors.slice(0, topExpenses.length),
        borderColor: pastelColors.slice(0, topExpenses.length),
        borderWidth: 1,
      },
    ],
  };

  console.log("Dados do gráfico:", chartData);

  // Configurar opções do gráfico
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `R$ ${context.raw?.toFixed(2)}`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937", // Branco no escuro, preto no claro
          font: { size: 12 },
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937", // Branco no escuro, preto no claro
          font: { size: 12 },
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg card-h">
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Top 5 Gastos do Mês
      </h3>

      <div className="flex-grow">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {topExpenses.map((expense, index) => (
          <div key={expense.category} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{
                backgroundColor: pastelColors[index],
              }}
            ></div>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {expense.category}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-3 space-y-1">
        <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 p-2 rounded-md text-xs leading-tight">
          <strong>Maior Gasto:</strong> {topExpenses[0]?.category || "N/A"}: R${" "}
          {topExpenses[0]?.amount.toFixed(2) || "0.00"}
        </div>
      </div>
    </div>
  );
};

export default TopExpensesChart;
