import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip);

const pastelColors = [
  "#F8B4B4", // Rosa pastel
  "#A3D9A5", // Verde pastel
  "#F9E79F", // Amarelo pastel
  "#AFCDEA", // Azul pastel
  "#C8A2C8", // Roxo pastel
  "#F5A623", // Laranja pastel (para Aluguel)
];

const MonthlyExpensesLineChart: React.FC = () => {
  const allTransactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const filteredTransactions = useSelector(
    (state: RootState) => state.transactions.filteredTransactions
  );
  const { categories } = useSelector((state: RootState) => state.transactions);

  const [chartOptions, setChartOptions] = useState<any>({});

  const transactionsToUse =
    filteredTransactions.length > 0 ? filteredTransactions : allTransactions;

  // Função para calcular projeções de meses
  const calculateProjectionMonths = (startMonth: number) => {
    const months = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(2023, startMonth - 1 + i, 1); // Avançar meses
      months.push(
        date.toLocaleString("pt-BR", { month: "long" }).charAt(0).toUpperCase() +
          date.toLocaleString("pt-BR", { month: "long" }).slice(1)
      );
    }
    return months;
  };

  const displayedMonths =
    filteredTransactions.length > 0
      ? calculateProjectionMonths(new Date(filteredTransactions[0]?.date).getMonth() + 1)
      : calculateProjectionMonths(new Date().getMonth() - 2);

  useEffect(() => {
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: (context: any) => `R$ ${context.raw?.toFixed(2)}`,
          },
        },
        legend: {
          display: true,
          labels: {
            color: "#f3f4f6",
            font: { size: 12 },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#f3f4f6",
            font: { size: 12 },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
        y: {
          ticks: {
            color: "#f3f4f6",
            font: { size: 12 },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    };

    setChartOptions(options);
  }, []);

  // Processar os dados das transações e projeções
  const monthlyData: Record<string, Record<string, number>> = {};

  displayedMonths.forEach((month) => {
    monthlyData[month] = {};
    categories.forEach((category) => {
      monthlyData[month][category] = 0; // Inicializar com zero
    });
  });

  // Preencher dados reais
  transactionsToUse
    .filter((tx) => tx.type === "Despesa")
    .forEach((transaction) => {
      const date = new Date(transaction.date);
      const month = date.toLocaleString("pt-BR", { month: "long" });
      const normalizedMonth =
        month.charAt(0).toUpperCase() + month.slice(1);

      if (monthlyData[normalizedMonth] && transaction.category) {
        monthlyData[normalizedMonth][transaction.category] += transaction.value;
      }
    });

  // Preencher projeções para meses futuros
  const lastRealMonthIndex = displayedMonths.findIndex(
    (month) => monthlyData[month] && Object.values(monthlyData[month]).some((value) => value > 0)
  );

  if (lastRealMonthIndex !== -1) {
    for (let i = lastRealMonthIndex + 1; i < displayedMonths.length; i++) {
      const currentMonth = displayedMonths[i];
      const previousMonth = displayedMonths[lastRealMonthIndex];

      categories.forEach((category) => {
        monthlyData[currentMonth][category] =
          monthlyData[previousMonth][category] * 0.95; // Exemplo de projeção (redução de 5%)
      });
    }
  }

  const data = displayedMonths.map((month) =>
    categories.map((category) => monthlyData[month][category] || 0)
  );

  const chartData = {
    labels: displayedMonths, // Meses
    datasets: categories.map((category, index) => ({
      label: category, // Nome da categoria
      data: data.map((month) => month[index]), // Valores para cada mês
      borderColor: pastelColors[index],
      backgroundColor: pastelColors[index],
      borderWidth: 2,
      pointRadius: 5,
      pointBackgroundColor: pastelColors[index],
      tension: 0.3, // Suavizar as linhas
    })),
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg card-h overflow-hidden">
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Tendências Temporais de Gastos
      </h3>

      <div className="flex-grow overflow-hidden">
        <Line data={chartData} options={chartOptions} />
      </div>

      <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
        Este gráfico mostra as tendências temporais de gastos ao longo dos meses, ajudando a identificar padrões de aumento ou redução nas categorias.
      </div>
    </div>
  );
};

export default MonthlyExpensesLineChart;
