import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Registrando os elementos do Chart.js necessários
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const MonthlyExpensesChart = ({ months, categories, data }) => {
  // Paleta de cores pastel para as categorias
  const categoryColors = [
    "#F8B4B4", // Alimentação (rosa pastel)
    "#A3D9A5", // Transporte (verde pastel)
    "#F9E79F", // Lazer (amarelo pastel)
    "#AFCDEA", // Saúde (azul pastel)
    "#C8A2C8", // Educação (roxo pastel)
  ];

  // Preparar os dados para o gráfico de barras
  const chartData = {
    labels: months, // Meses para a comparação (ex: ['Janeiro', 'Fevereiro', 'Março'])
    datasets: categories.map((category, index) => ({
      label: category, // Nome da categoria (ex: "Alimentação")
      data: data[index], // Dados para cada categoria
      backgroundColor: categoryColors[index % categoryColors.length], // Cor baseada na paleta pastel
      borderColor: categoryColors[index % categoryColors.length],
      borderWidth: 1,
    })),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color:
            typeof window !== "undefined"
              ? getComputedStyle(document.documentElement).getPropertyValue("--text-color") || "gray"
              : "gray", // Valor padrão se não estiver no browser
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color:
            typeof window !== "undefined"
              ? getComputedStyle(document.documentElement).getPropertyValue("--text-color") || "gray"
              : "gray", // Valor padrão
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Grid discreto para tema escuro
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color:
            typeof window !== "undefined"
              ? getComputedStyle(document.documentElement).getPropertyValue("--text-color") || "gray"
              : "gray", // Valor padrão
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Grid discreto para tema escuro
        },
      },
    },
  };
  
  
  return (
    <div className="card card-pie h-[47vh]">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Comparação Mensal
      </h3>
      <Bar data={chartData} options={chartOptions} width={500} height={200} />
    </div>
  );
};

export default MonthlyExpensesChart;
