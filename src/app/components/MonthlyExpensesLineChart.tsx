import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useTheme } from "./ThemeContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const pastelColors = [
  "#F8B4B4", // Rosa pastel
  "#A3D9A5", // Verde pastel
  "#F9E79F", // Amarelo pastel
  "#AFCDEA", // Azul pastel
  "#C8A2C8", // Roxo pastel
  "#F5A623", // Laranja pastel (para Aluguel)
];

const MonthlyExpensesLineChart: React.FC = () => {
  const { isDarkMode } = useTheme();

  const allTransactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const filteredTransactions = useSelector(
    (state: RootState) => state.transactions.filteredTransactions
  );
  const { categories } = useSelector((state: RootState) => state.transactions);

  const [chartOptions, setChartOptions] = useState<any>({});

  const transactionsToUse =
    filteredTransactions.length > 0 ? filteredTransactions : allTransactions;

  const calculateProjectionMonths = (startMonth: number) => {
    const months = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(2023, startMonth - 1 + i, 1);
      months.push(
        date.toLocaleString("pt-BR", { month: "long" }).charAt(0).toUpperCase() +
          date.toLocaleString("pt-BR", { month: "long" }).slice(1)
      );
    }
    return months;
  };

  const displayedMonths =
    filteredTransactions.length > 0
      ? calculateProjectionMonths(
          new Date(filteredTransactions[0]?.date).getMonth() + 1
        )
      : calculateProjectionMonths(new Date().getMonth() - 2);

  useEffect(() => {
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: any) => `R$ ${context.raw?.toFixed(2)}`,
          },
        },
        legend: {
          display: true,
          labels: {
            color: isDarkMode ? "#f3f4f6" : "#1f2937",
            font: { size: 12 },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: isDarkMode ? "#f3f4f6" : "#1f2937",
            font: { size: 12 },
          },
          grid: {
            color: isDarkMode
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
          },
        },
        y: {
          ticks: {
            color: isDarkMode ? "#f3f4f6" : "#1f2937",
            font: { size: 12 },
          },
          grid: {
            color: isDarkMode
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
          },
        },
      },
    };

    setChartOptions(options);
  }, [isDarkMode]);

  const monthlyData: Record<string, Record<string, number>> = {};

  displayedMonths.forEach((month) => {
    monthlyData[month] = {};
    categories.forEach((category) => {
      monthlyData[month][category] = 0;
    });
  });

  transactionsToUse
    .filter((tx) => tx.type === "Despesa")
    .forEach((transaction) => {
      const date = new Date(transaction.date);
      const month = date.toLocaleString("pt-BR", { month: "long" });
      const normalizedMonth =
        month.charAt(0).toUpperCase() + month.slice(1);

      if (monthlyData[normalizedMonth] && transaction.category) {
        monthlyData[normalizedMonth][transaction.category] += transaction.value;
      }
    });

  const data = displayedMonths.map((month) =>
    categories.map((category) => monthlyData[month][category] || 0)
  );

  const getColor = (index: number) => {
    return isDarkMode
      ? pastelColors[index] // Mesmas cores no Dark Mode (visíveis no fundo escuro)
      : pastelColors[index]; // Mesmas cores no Light Mode
  };

  const chartData = {
    labels: displayedMonths,
    datasets: categories.map((category, index) => ({
      label: category,
      data: data.map((month) => month[index]),
      borderColor: getColor(index),
      backgroundColor: getColor(index),
      pointBackgroundColor: getColor(index),
      borderWidth: 2,
      pointRadius: 5,
      tension: 0.3,
    })),
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg card-h overflow-hidden">
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Tendências Temporais de Gastos
      </h3>

      <div className="flex-grow overflow-hidden">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        Este gráfico mostra as tendências temporais de gastos ao longo dos meses, ajudando a identificar padrões de aumento ou redução nas categorias.
      </div>
    </div>
  );
};

export default MonthlyExpensesLineChart;
