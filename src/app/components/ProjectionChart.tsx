import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { useTheme } from "./ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const ProjectionChart: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  const actualMonths = ["Outubro", "Novembro", "Dezembro"];
  const futureMonths = ["Próximo Mês 1", "Próximo Mês 2", "Próximo Mês 3"];

  // Filtrar despesas reais dos últimos três meses
  const actualExpenses = actualMonths.map((month, index) => {
    const expensesForMonth = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const transactionMonth = transactionDate.getMonth();
      return (
        transaction.type === "Despesa" &&
        transactionMonth === 9 + index // Outubro começa no índice 9
      );
    });

    const total = expensesForMonth.reduce((sum, t) => sum + t.value, 0);
    return total;
  });

  // Calcular média e projeções futuras
  const average =
    actualExpenses.reduce((sum, value) => sum + value, 0) /
    actualExpenses.length;

  const projectedExpenses = futureMonths.map((_, index) => {
    return average * (1 + (index + 1) * 0.05); // Incremento de 5% por mês
  });

  // Dados do gráfico
  const chartData = {
    labels: [...actualMonths, ...futureMonths],
    datasets: [
      {
        label: "Gastos Reais",
        data: actualExpenses,
        borderColor: "#A3D9A5",
        backgroundColor: "#A3D9A5",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#A3D9A5",
        tension: 0.3,
      },
      {
        label: "Projeção de Gastos",
        data: [...Array(actualExpenses.length).fill(null), ...projectedExpenses],
        borderColor: "#F8B4B4",
        backgroundColor: "#F8B4B4",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#F8B4B4",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  };

  const { isDarkMode } = useTheme(); // Obtendo o estado do tema

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
        labels: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937",
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
        Projeção de Gastos
      </h3>

      <div className="flex-grow">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-3">
        <div className="flex items-center">
          <div
            className="w-4 h-4 rounded-full mr-2"
            style={{ backgroundColor: "#A3D9A5" }}
          ></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Gastos Reais
          </span>
        </div>
        <div className="flex items-center">
          <div
            className="w-4 h-4 rounded-full mr-2"
            style={{ backgroundColor: "#F8B4B4" }}
          ></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Projeção de Gastos
          </span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        Com base nos gastos passados, a média mensal de despesas é de R${" "}
        {average.toFixed(2)}.
      </div>
    </div>
  );
};

export default ProjectionChart;
