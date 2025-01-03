import React from "react";
import { AiOutlineDollar, AiOutlineCreditCard, AiOutlineBank } from "react-icons/ai";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useTheme } from "./ThemeContext";

interface SummaryCardProps {
  title: string;
  value: number;
  percentage: number;
  icon: React.ReactNode;
  iconColor: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  percentage,
  icon,
  iconColor,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`flex items-center p-6 shadow-md rounded-lg summary-card ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div
        className="flex items-center justify-center text-5xl mr-4"
        style={{ color: iconColor }}
      >
        {icon}
      </div>

      <div className="text-right flex-1">
        <h3
          className={`text-md font-medium mb-1 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-2xl font-bold ${
            isDarkMode ? "text-gray-100" : "text-gray-800"
          }`}
        >
          R$ {value.toFixed(2)}
        </p>
        <span
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {percentage.toFixed(0)}% do total
        </span>
      </div>
    </div>
  );
};

const GeneralSummary = () => {
  const allTransactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const filteredTransactions = useSelector(
    (state: RootState) => state.transactions.filteredTransactions
  );

  // Determinar transações a usar (filtradas ou padrão)
  const transactionsToUse =
    filteredTransactions.length > 0 ? filteredTransactions : allTransactions;

  // Obter os últimos três meses dinamicamente
  const today = new Date();
  const lastThreeMonths: any = [];
  for (let i = 2; i >= 0; i--) {
    const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
    lastThreeMonths.push(date.getMonth() + 1); // Mês 1-12
  }

  // Filtrar transações para os últimos três meses, caso não haja filtro
  const relevantTransactions = filteredTransactions.length
    ? transactionsToUse
    : transactionsToUse.filter((tx) => {
        const transactionDate = new Date(tx.date);
        const transactionMonth = transactionDate.getMonth() + 1;
        return lastThreeMonths.includes(transactionMonth);
      });

  // Cálculos de resumo
  const totalIncome = relevantTransactions
    .filter((tx) => tx.type === "Renda")
    .reduce((sum, tx) => sum + tx.value, 0);

  const totalExpenses = relevantTransactions
    .filter((tx) => tx.type === "Despesa")
    .reduce((sum, tx) => sum + tx.value, 0);

  const remainingBalance = totalIncome - totalExpenses;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <SummaryCard
        title="Renda Mensal"
        value={totalIncome}
        percentage={(totalIncome / totalIncome) * 100 || 0}
        icon={<AiOutlineDollar />}
        iconColor="#F5A623" // Laranja
      />
      <SummaryCard
        title="Despesas Totais"
        value={totalExpenses}
        percentage={(totalExpenses / totalIncome) * 100 || 0}
        icon={<AiOutlineCreditCard />}
        iconColor="#E94E77" // Vermelho
      />
      <SummaryCard
        title="Saldo Restante"
        value={remainingBalance}
        percentage={(remainingBalance / totalIncome) * 100 || 0}
        icon={<AiOutlineBank />}
        iconColor="#4A90E2" // Azul
      />
    </div>
  );
};

export default GeneralSummary;
