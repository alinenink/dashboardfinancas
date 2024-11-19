import React from "react";
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

// Registrar os elementos do Chart.js necessários
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

interface MonthlyExpensesLineChartProps {
  months: string[];
  categories: string[];
  data: number[][];
}

const MonthlyExpensesLineChart: React.FC<MonthlyExpensesLineChartProps> = ({
  months,
  categories,
  data,
}) => {
  // Paleta de cores pastel padronizada
  const pastelColors = [
    "#F8B4B4", // Rosa pastel
    "#A3D9A5", // Verde pastel
    "#F9E79F", // Amarelo pastel
    "#AFCDEA", // Azul pastel
    "#C8A2C8", // Roxo pastel
  ];

  // Limitar para os três primeiros meses
  const visibleMonths = months.slice(0, 3);
  const visibleData = data.slice(0, 3);

  // Dados do gráfico
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
        display: false, // Remove a legenda padrão
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg h-[36vh]">
      {/* Título do card */}
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Comparação Mensal de Gastos
      </h3>

      {/* Gráfico */}
      <div className="flex-grow">
        <Line data={chartData} options={chartOptions} />
      </div>

      {/* Legendas personalizadas */}
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
