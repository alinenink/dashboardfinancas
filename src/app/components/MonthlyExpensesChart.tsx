import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useTheme } from "./ThemeContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const MonthlyExpensesChart: React.FC = () => {
  const { isDarkMode } = useTheme();

  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  // Categorias e meses
  const categories = ["Alimentação", "Transporte", "Lazer", "Saúde", "Educação", "Aluguel"];
  const months = ["Outubro", "Novembro", "Dezembro"];

  // Inicializar estrutura de despesas mensais
  const monthlyExpenses: Record<string, Record<string, number>> = {};
  months.forEach((month) => {
    monthlyExpenses[month] = {};
    categories.forEach((category) => {
      monthlyExpenses[month][category] = 0; // Inicializar com 0
    });
  });

  transactions
  .filter((tx) => tx.type === "Despesa")
  .forEach((transaction) => {
    const expenseDate = new Date(transaction.date);
    const expenseMonth = expenseDate.toLocaleString("pt-BR", { month: "long" });

    // Normalizar o mês para ter a inicial maiúscula
    const normalizedMonth =
      expenseMonth.charAt(0).toUpperCase() + expenseMonth.slice(1);

    if (monthlyExpenses[normalizedMonth] && transaction.category) {
      const value = typeof transaction.value === "string"
        ? parseFloat(transaction.value.replace(/[^0-9.-]+/g, ""))
        : transaction.value;

      monthlyExpenses[normalizedMonth][transaction.category] += value;

      console.log(
        `Categoria: ${transaction.category}, Mês: ${normalizedMonth}, Valor: ${value}`
      );
    } else {
      console.log(
        `Transação ignorada: ${JSON.stringify(transaction)}, Mês: ${normalizedMonth}`
      );
    }
  });


  // Configurar dados para o gráfico
  const datasets = categories.map((category) => {
    const data = months.map((month) => monthlyExpenses[month][category] || 0);
    console.log(`Categoria: ${category}, Dados:`, data); // Log de cada categoria e seus dados
    return {
      label: category,
      data,
      backgroundColor: {
        Alimentação: "#F8B4B4",
        Transporte: "#A3D9A5",
        Lazer: "#F9E79F",
        Saúde: "#AFCDEA",
        Educação: "#C8A2C8",
        Aluguel: "#F5A623",
      }[category],
      borderColor: {
        Alimentação: "#F8B4B4",
        Transporte: "#A3D9A5",
        Lazer: "#F9E79F",
        Saúde: "#AFCDEA",
        Educação: "#C8A2C8",
        Aluguel: "#F5A623",
      }[category],
      borderWidth: 1,
    };
  });

  const chartData = {
    labels: months,
    datasets,
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
        labels: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937",
          font: { size: 12 },
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      y: {
        ticks: {
          color: isDarkMode ? "#f3f4f6" : "#1f2937",
          font: { size: 12 },
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg card-h">
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Comparação Mensal
      </h3>

      <div className="flex-grow">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {categories.map((category) => (
          <div key={category} className="flex items-center">
            <div
              className="w-4 h-4 rounded-full mr-2"
              style={{
                backgroundColor: {
                  Alimentação: "#F8B4B4",
                  Transporte: "#A3D9A5",
                  Lazer: "#F9E79F",
                  Saúde: "#AFCDEA",
                  Educação: "#C8A2C8",
                  Aluguel: "#F5A623",
                }[category],
              }}
            ></div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyExpensesChart;
