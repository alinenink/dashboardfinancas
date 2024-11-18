import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Registrando os elementos do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseCard = ({ title, data }) => {
  // Paleta de cores pastel
  const pastelColors = [
    "#F8B4B4", // Rosa pastel
    "#A3D9A5", // Verde pastel
    "#F9E79F", // Amarelo pastel
    "#AFCDEA", // Azul pastel
    "#C8A2C8", // Roxo pastel
  ];

  // Preparar os dados para o gráfico de doughnut
  const chartData = {
    labels: data.map((item) => item.label), // Exemplo: ['Alimentação', 'Transporte', 'Lazer']
    datasets: [
      {
        label: "Gastos Principais",
        data: data.map((item) => item.value), // Exemplo: [200, 100, 50]
        backgroundColor: pastelColors, // Cores pastel para o gráfico de doughnut
        borderColor: pastelColors, // Bordas pastel
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
          color: "currentColor", // Ajusta cor automaticamente para Light/Dark
        },
      },
    },
    cutout: "70%", // Tamanho do furo no meio
  };

  return (
    <div className="card card-pie flex flex-col items-center justify-center text-center h-[47vh]">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <div className="flex justify-center">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ExpenseCard;
