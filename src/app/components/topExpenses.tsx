import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

// Registrar os elementos do Chart.js necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

interface TopExpensesChartProps {
  expenses: { category: string; amount: number }[];
  highestExpense: { category: string; amount: number };
  increasePercentage: number;
}

const TopExpensesChart: React.FC<TopExpensesChartProps> = ({
  expenses,
  highestExpense,
  increasePercentage,
}) => {
  // Paleta de cores pastel padronizada
  const pastelColors = [
    "#F8B4B4", // Rosa pastel
    "#A3D9A5", // Verde pastel
    "#F9E79F", // Amarelo pastel
    "#AFCDEA", // Azul pastel
    "#C8A2C8", // Roxo pastel
  ];

  // Dados do gráfico
  const chartData = {
    labels: expenses.map((expense) => expense.category),
    datasets: [
      {
        label: "Gastos",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: pastelColors.slice(0, expenses.length),
        borderColor: pastelColors.slice(0, expenses.length),
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
          label: (context: any) => `R$ ${context.raw}`,
        },
      },
      legend: {
        display: false, // Remove a legenda padrão
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg h-[36vh]">
      {/* Título do card */}
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Top 5 Gastos do Mês
      </h3>

      {/* Gráfico */}
      <div className="flex-grow">
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Legendas personalizadas */}
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {expenses.map((expense, index) => (
          <div key={expense.category} className="flex items-center">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{
                backgroundColor: pastelColors[index],
              }}
            ></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {expense.category}
            </span>
          </div>
        ))}
      </div>

      {/* Insights */}
      <div className="mt-4">
        <div className="bg-blue-100 text-blue-800 p-2 rounded-md mb-2">
          <strong>Maior Gasto:</strong> {highestExpense.category}: R${" "}
          {highestExpense.amount.toFixed(2)}
        </div>
        <div className="bg-green-100 text-green-800 p-2 rounded-md">
          <strong>Aumento Total em Relação ao Mês Anterior:</strong> O total dos
          gastos aumentou em {increasePercentage.toFixed(2)}% em comparação ao
          mês anterior.
        </div>
      </div>
    </div>
  );
};

export default TopExpensesChart;
