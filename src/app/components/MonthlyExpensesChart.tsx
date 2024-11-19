import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useTheme } from "./ThemeContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface MonthlyExpensesChartProps {
  months: string[];
  categories: string[];
  data: number[][];
}

const MonthlyExpensesChart: React.FC<MonthlyExpensesChartProps> = ({
  months,
  categories,
  data,
}) => {
  const { isDarkMode } = useTheme();

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `R$ ${context.raw}`,
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

  // Configuração dos dados do gráfico
  const pastelColors = [
    "#F8B4B4",
    "#A3D9A5",
    "#F9E79F",
    "#AFCDEA",
    "#C8A2C8",
  ];

  const visibleMonths = months.slice(0, 3);
  const visibleData = data.slice(0, 3);

  const chartData = {
    labels: visibleMonths,
    datasets: categories.map((category, index) => ({
      label: category,
      data: visibleData.map((month) => month[index]),
      backgroundColor: pastelColors[index],
      borderColor: pastelColors[index],
      borderWidth: 1,
    })),
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh]">
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Comparação Mensal
      </h3>

      <div className="flex-grow">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {categories.map((category, index) => (
          <div key={category} className="flex items-center">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{
                backgroundColor: pastelColors[index],
              }}
            ></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyExpensesChart;
