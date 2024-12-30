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
  const allTransactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const filteredTransactions = useSelector(
    (state: RootState) => state.transactions.filteredTransactions
  );

  const { isDarkMode } = useTheme();

  // Determinar transações a usar (filtradas ou padrão)
  const transactionsToUse =
    filteredTransactions.length > 0 ? filteredTransactions : allTransactions;

  // Calcular o mês do último mês ou o mês do filtro
  const today = new Date();
  const lastThreeMonths = [];
  for (let i = 2; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    lastThreeMonths.push(date.getMonth() + 1); // Mês 1-12
  }

  const selectedMonth = filteredTransactions.length
    ? Math.max(
        ...filteredTransactions.map((transaction) => {
          const transactionDate = new Date(transaction.date);
          return transactionDate.getMonth() + 1;
        })
      )
    : lastThreeMonths;

  // Filtrar despesas do mês selecionado ou últimos três meses
  const relevantExpenses = transactionsToUse.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.getMonth() + 1;
    return (
      transaction.type === "Despesa" &&
      (filteredTransactions.length
        ? transactionMonth === selectedMonth
        : lastThreeMonths.includes(transactionMonth))
    );
  });

  // Somar os valores por categoria
  const expensesByCategory: Record<string, number> = {};
  relevantExpenses.forEach((expense) => {
    if (expense.category) {
      if (!expensesByCategory[expense.category]) {
        expensesByCategory[expense.category] = 0;
      }
      expensesByCategory[expense.category] += expense.value;
    }
  });

  // Ordenar e selecionar as 5 maiores despesas
  const topExpenses = Object.entries(expensesByCategory)
    .map(([category, amount]) => ({ category, amount }))
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5);

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
          color: isDarkMode ? "#f3f4f6" : "#1f2937",
          font: { size: 12 },
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937",
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
