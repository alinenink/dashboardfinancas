import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { useTheme } from "@/app/components/ThemeContext"; // Adicionando o import para o ThemeContext

// Registrar os elementos do Chart.js necessários
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

interface ProjectionChartProps {
  months: string[];
  actualExpenses: number[];
}

const ProjectionChart: React.FC<ProjectionChartProps> = ({ months, actualExpenses }) => {
  const { isDarkMode } = useTheme(); // Obtendo o estado do tema

  // Calcular a média de gastos reais
  const average = actualExpenses.reduce((sum, val) => sum + val, 0) / actualExpenses.length;

  // Gerar previsões para os próximos meses
  const futureMonths = ["Próximo Mês 1", "Próximo Mês 2", "Próximo Mês 3"];
  const projectedExpenses = futureMonths.map((_, index) => {
    return average * (1 + (index + 1) * 0.05); // Incremento de 5% por mês
  });

  // Dados do gráfico
  const chartData = {
    labels: [...months, ...futureMonths],
    datasets: [
      {
        label: "Gastos Reais",
        data: actualExpenses,
        borderColor: "#A3D9A5", // Verde pastel
        backgroundColor: "#A3D9A5",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#A3D9A5",
        tension: 0.3,
      },
      {
        label: "Projeção de Gastos",
        data: [...Array(actualExpenses.length).fill(null), ...projectedExpenses],
        borderColor: "#F8B4B4", // Rosa pastel
        backgroundColor: "#F8B4B4",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#F8B4B4",
        borderDash: [5, 5],
        tension: 0.3,
      },
    ],
  };

  // Opções de configuração para o gráfico com base no tema
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => `R$ ${context.raw?.toFixed(2)}`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937", // Branco no escuro, preto no claro
          font: { size: 12 },
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937", // Branco no escuro, preto no claro
          font: { size: 12 },
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg h-[36vh]">
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Projeção de Gastos
      </h3>

      <div className="flex-grow">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-3">
        <div className="flex items-center">
          <div
            className="w-4 h-4 rounded-full mr-2"
            style={{ backgroundColor: "#A3D9A5" }}
          ></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Gastos Reais
          </span>
        </div>
        <div className="flex items-center">
          <div
            className="w-4 h-4 rounded-full mr-2"
            style={{ backgroundColor: "#F8B4B4" }}
          ></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Projeção de Gastos
          </span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        Com base nos gastos passados, a média mensal de despesas é de R${" "}
        {average.toFixed(2)}.
      </div>
    </div>
  );
};

export default ProjectionChart;
