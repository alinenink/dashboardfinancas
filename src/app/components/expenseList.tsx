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

// Definição dos tipos das props
interface MonthlyExpensesLineChartProps {
  months: string[]; // Array de strings representando os meses
  categories: string[]; // Array de strings representando as categorias
  data: number[][]; // Array de arrays de números, representando os dados das categorias ao longo dos meses
}

const MonthlyExpensesLineChart: React.FC<MonthlyExpensesLineChartProps> = ({
  months,
  categories,
  data,
}) => {
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
    labels: months, // Meses para a comparação
    datasets: categories.map((category, index) => ({
      label: category,
      data: data[index],
      borderColor: pastelColors[index % pastelColors.length], // Cor da linha
      backgroundColor: pastelColors[index % pastelColors.length], // Cor dos pontos
      tension: 0.3, // Suavização da linha
      borderWidth: 2,
      pointRadius: 4,
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
          color: "currentColor", // Ajusta cor das labels no eixo X
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Cor do grid para Dark Mode
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "currentColor", // Ajusta cor das labels no eixo Y
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
        Comparação Mensal de Gastos
      </h3>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default MonthlyExpensesLineChart;
