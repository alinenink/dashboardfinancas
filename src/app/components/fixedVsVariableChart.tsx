import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

interface FixedVsVariableExpensesProps {
  fixed: number;
  variable: number;
}

const FixedVsVariableExpenses: React.FC<FixedVsVariableExpensesProps> = ({
  fixed,
  variable,
}) => {
  // Dados do gráfico
  const chartData = {
    labels: ["Gastos Fixos", "Gastos Variáveis"],
    datasets: [
      {
        data: [fixed, variable],
        backgroundColor: ["#A3D9A5", "#F8B4B4"], // Verde pastel e Rosa pastel
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
        display: false, // Remove a legenda padrão
      },
    },
  };

  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg h-[36vh]">
      {/* Título do card */}
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Gastos Fixos vs Variáveis
      </h3>

      {/* Gráfico */}
      <div className="flex-grow flex justify-center items-center">
        <div className="w-[80%] h-[80%]">
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Legendas personalizadas */}
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

      {/* Insights */}
      <div className="mt-4">
        <div className="text-sm text-gray-700">
          <strong>Gastos Fixos:</strong> R$ {fixed.toFixed(2)}
        </div>
        <div className="text-sm text-gray-700">
          <strong>Gastos Variáveis:</strong> R$ {variable.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default FixedVsVariableExpenses;
