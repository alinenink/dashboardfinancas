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
  // Preparar os dados para o gráfico de barras
  const chartData = {
    labels: months, // Meses para a comparação (ex: ['Janeiro', 'Fevereiro', 'Março'])
    datasets: categories.map((category, index) => ({
      label: category, // Nome da categoria (ex: "Alimentação")
      data: data[index], // Dados para cada categoria
      backgroundColor: `rgba(${index * 50}, ${index * 80}, ${
        index * 100
      }, 0.6)`, // Cor dinâmica para cada barra
      borderColor: `rgba(${index * 50}, ${index * 80}, ${index * 100}, 1)`,
      borderWidth: 1,
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
      <h3 className="text-xl font-bold mb-4">Comparação Mensal</h3>
        <Bar data={chartData} options={chartOptions} width={500} height={200} />
    </div>
  );
};

export default MonthlyExpensesChart;
