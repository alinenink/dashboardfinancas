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
import { useTheme } from "./ThemeContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

interface MonthlyExpensesLineChartProps {
  months: string[];
  categories: string[];
  data: number[][];
}

const pastelColors = [
  "#F8B4B4", // Rosa pastel
  "#A3D9A5", // Verde pastel
  "#F9E79F", // Amarelo pastel
  "#AFCDEA", // Azul pastel
  "#C8A2C8", // Roxo pastel
];

const MonthlyExpensesLineChart: React.FC<MonthlyExpensesLineChartProps> = ({
  months,
  categories,
  data,
}) => {
  const { isDarkMode } = useTheme();
  const [chartOptions, setChartOptions] = useState<any>({});

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
          display: true, // Mostrar a legenda para identificar as tendências
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

    setChartOptions(options);
  }, [isDarkMode]);

  const chartData = {
    labels: months, // Mostra todos os meses
    datasets: categories.map((category, index) => ({
      label: category, // Nome da categoria para a legenda
      data: data.map((month) => month[index]), // Valores de tendência ao longo dos meses
      borderColor: pastelColors[index],
      backgroundColor: pastelColors[index],
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: pastelColors[index],
      tension: 0.3, // Suaviza as linhas para mostrar tendências
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
