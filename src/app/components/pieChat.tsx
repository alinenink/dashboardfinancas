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
  // Preparar os dados para o gráfico de doughnut
  const chartData = {
    labels: data.map((item) => item.label), // Exemplo: ['Alimentação', 'Transporte', 'Lazer']
    datasets: [
      {
        label: "Gastos Principais",
        data: data.map((item) => item.value), // Exemplo: [200, 100, 50]
        backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C00"], // Cores para o gráfico de doughnut
        borderColor: ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8C00"], // Bordas
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    cutout: "80%", // Tamanho do furo no meio (70% do tamanho do gráfico, você pode ajustar conforme necessário)
  };

  return (
    <div className="card flex flex-col items-center justify-center text-center sm:items-center sm:text-left card-pie">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex justify-center">
        <Doughnut data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default ExpenseCard;
