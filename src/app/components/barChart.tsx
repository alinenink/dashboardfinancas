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

// Definição do tipo das props
interface MonthlyExpensesChartProps {
  months: string[]; // Array de strings para os meses
  categories: string[]; // Array de strings para as categorias
  data: number[][]; // Array de arrays de números para os dados
}

const MonthlyExpensesChart: React.FC<MonthlyExpensesChartProps> = ({
  months,
  categories,
  data,
}) => {
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

  // Opções do gráfico
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Define explicitamente como "top"
        labels: {
          font: {
            size: 14,
          },
          color: "currentColor", // Ajusta cor automaticamente para Light/Dark
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "currentColor", // Ajusta cor das labels no eixo X automaticamente
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Cor do grid para Dark Mode
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "currentColor", // Ajusta cor das labels no eixo Y automaticamente
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Cor do grid para Dark Mode
        },
      },
    },
  };

  return (
    <div className="card card-pie">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        Comparação Mensal
      </h3>
      <Bar data={chartData} options={chartOptions} width={500} height={200} />
    </div>
  );
};

export default MonthlyExpensesChart;
