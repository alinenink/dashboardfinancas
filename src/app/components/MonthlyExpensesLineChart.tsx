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
import { useTheme } from "@/app/components/ThemeContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

interface MonthlyExpensesLineChartProps {
  months: string[];
  categories: string[];
  data: number[][];
}

const pastelColors = [
  "#F8B4B4",
  "#A3D9A5",
  "#F9E79F",
  "#AFCDEA",
  "#C8A2C8",
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
      maintainAspectRatio: true, // Mantém o gráfico dentro do card
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: any) => `R$ ${context.raw}`,
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

    setChartOptions(options);
  }, [isDarkMode]);

  const visibleMonths = months.slice(0, 3);
  const visibleData = data.slice(0, 3);

  const chartData = {
    labels: visibleMonths,
    datasets: categories.map((category, index) => ({
      label: category,
      data: visibleData.map((month) => month[index]),
      borderColor: pastelColors[index],
      backgroundColor: pastelColors[index],
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: pastelColors[index],
    })),
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh] overflow-hidden">
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Comparação Mensal de Gastos
      </h3>

      <div className="flex-grow overflow-hidden">
        <Line data={chartData} options={chartOptions} />
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

export default MonthlyExpensesLineChart;
