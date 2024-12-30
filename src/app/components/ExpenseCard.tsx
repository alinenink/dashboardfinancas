import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const ExpenseCard: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );

  // Filtrar apenas despesas
  const expenses = transactions.filter((tx) => tx.type === "Despesa");

  // Calcular valores totais por categoria
  const expenseByCategory: Record<string, number> = {};
  expenses.forEach((expense) => {
    const category = expense.category || "Outros";
    if (!expenseByCategory[category]) {
      expenseByCategory[category] = 0;
    }
    expenseByCategory[category] += expense.value;
  });

  const data = Object.entries(expenseByCategory).map(([label, value]) => ({
    label,
    value,
  }));

  const total = data.reduce((sum, item) => sum + item.value, 0);

  // Cores fixas para categorias
  const categoryColors: Record<string, string> = {
    Alimentação: "#F8B4B4", // Rosa
    Transporte: "#A3D9A5",  // Verde
    Lazer: "#F9E79F",       // Amarelo
    Saúde: "#AFCDEA",       // Azul
    Educação: "#C8A2C8",    // Roxo
    Aluguel: "#F5A623",     // Laranja pastel
    Outros: "#D3D3D3",      // Cinza claro
  };  

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => categoryColors[item.label] || "#D3D3D3"),
        borderColor: data.map((item) => categoryColors[item.label] || "#D3D3D3"),
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
          label: (context: any) => {
            const percentage = (
              (context.raw / total) *
              100
            ).toFixed(2);
            return `${context.label}: R$ ${context.raw} (${percentage}%)`;
          },
        },
      },
      legend: {
        display: false, // Legendas personalizadas serão usadas
      },
    },
    cutout: "70%", // Gráfico de Doughnut com centro maior
  };

  return (
    <div className="flex flex-col p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg card-h">
      {/* Título do card */}
      <h3 className="text-lg font-bold mb-4 text-left text-gray-800 dark:text-gray-100">
        Categorias de Despesas
      </h3>

      {/* Conteúdo do card: gráfico e legendas */}
      <div className="flex items-center justify-between h-full">
        {/* Gráfico */}
        <div className="w-1/2 h-full flex justify-center items-center">
          <div className="w-[80%] h-[80%]">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Legendas */}
        <div className="w-1/2 flex flex-col justify-center gap-2">
          {data.map((item) => {
            const percentage = ((item.value / total) * 100).toFixed(2);
            return (
              <div key={item.label} className="flex items-center">
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{
                    backgroundColor: categoryColors[item.label] || "#D3D3D3",
                  }}
                ></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item.label}: {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;
