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
  // Paleta de cores pastel
  const pastelColors = [
    "#F8B4B4", // Rosa pastel
    "#A3D9A5", // Verde pastel
    "#F9E79F", // Amarelo pastel
    "#AFCDEA", // Azul pastel
    "#C8A2C8", // Roxo pastel
  ];

  // Preparar os dados para o gráfico de linha
  const chartData = {
    labels: months, // Meses para a comparação (ex: ['Janeiro', 'Fevereiro', 'Março'])
    datasets: categories.map((category, index) => ({
      label: category, // Nome da categoria (ex: "Alimentação")
      data: data[index], // Dados para cada categoria
      fill: false, // Não preenche a área abaixo da linha
      borderColor: pastelColors[index % pastelColors.length], // Cor pastel para a linha
      pointBackgroundColor: pastelColors[index % pastelColors.length], // Cor do ponto
      tension: 0.3, // Suavização da linha
      borderWidth: 2,
    })),
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
          color: "currentColor", // Ajusta a cor para o tema Light/Dark
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "currentColor", // Ajusta a cor das labels no eixo X
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Cor do grid no Dark Mode
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "currentColor", // Ajusta a cor das labels no eixo Y
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Cor do grid no Dark Mode
        },
      },
    },
  };

  return (
    <div className="card flex flex-col items-center justify-center text-center">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Comparação Mensal de Gastos
      </h3>
      <div className="flex justify-center">
        <Line data={chartData} options={chartOptions} width={1500} height={250} />
      </div>
    </div>
  );
};

export default MonthlyExpensesLineChart;
