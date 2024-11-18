import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

// Registrando os elementos do Chart.js necessários
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const MonthlyExpensesLineChart = ({ months, categories, data }) => {
  // Preparar os dados para o gráfico de linha
  const chartData = {
    labels: months, // Meses para a comparação (ex: ['Janeiro', 'Fevereiro', 'Março'])
    datasets: categories.map((category, index) => ({
      label: category, // Nome da categoria (ex: "Alimentação")
      data: data[index], // Dados para cada categoria
      fill: false, // Não preenche a área abaixo da linha
      borderColor: `rgba(${index * 50}, ${index * 80}, ${index * 100}, 1)`, // Cor dinâmica para cada linha
      tension: 0.1, // Suavização da linha
      borderWidth: 2,
    })),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="card flex flex-col items-center justify-center text-center sm:items-center sm:text-left card-pie">
      <div className="flex justify-center">
        <Line data={chartData} options={chartOptions} width={1500} height={250} />
      </div>
    </div>
  );
};

export default MonthlyExpensesLineChart;
