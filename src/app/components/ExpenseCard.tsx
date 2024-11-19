import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

interface ExpenseDataItem {
  label: string;
  value: number;
}

interface ExpenseCardProps {
  title: string;
  data: ExpenseDataItem[];
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ title, data }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const pastelColors = [
    "#F8B4B4", // Rosa pastel
    "#A3D9A5", // Verde pastel
    "#F9E79F", // Amarelo pastel
    "#AFCDEA", // Azul pastel
    "#C8A2C8", // Roxo pastel
  ];

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: pastelColors.slice(0, data.length),
        borderColor: pastelColors.slice(0, data.length),
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
          label: (context: any) => {
            const percentage = (
              (context.raw / total) *
              100
            ).toFixed(2);
            return `${context.label}: R$ ${context.raw} (${percentage}%)`;
          },
        },
      },
      legend: {
        display: false, // Legendas personalizadas serão usadas
      },
    },
    cutout: "70%", // Gráfico de Doughnut com centro maior
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh]">
      {/* Título do card */}
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        {title}
      </h3>

      {/* Conteúdo do card: gráfico e legendas */}
      <div className="flex items-center justify-between h-full">
        {/* Gráfico */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-[80%] h-[80%]">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Legendas */}
        <div className="w-1/2 flex flex-col justify-center gap-2">
          {data.map((item, index) => {
            const percentage = ((item.value / total) * 100).toFixed(2);
            return (
              <div key={item.label} className="flex items-center">
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{
                    backgroundColor: pastelColors[index],
                  }}
                ></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}: {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
