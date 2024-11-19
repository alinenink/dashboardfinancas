import React from "react";
import { AiOutlineDollar, AiOutlineCreditCard, AiOutlineBank } from "react-icons/ai";

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
  return (
    <div className="flex items-center p-3 bg-white shadow-md rounded-lg h-[8vh]">
      {/* Ícone colorido */}
      <div
        className="flex items-center justify-center text-3xl"
        style={{ color: iconColor }}
      >
        {icon}
      </div>

      {/* Informações */}
      <div className="ml-4">
        <h3 className="text-sm font-semibold text-gray-600">{title}</h3>
        <p className="text-lg font-bold text-gray-800">R$ {value.toFixed(2)}</p>
        <span className="text-xs text-gray-500">{percentage}% do total</span>
      </div>
    </div>
  );
};

const GeneralSummary = () => {
  const totalIncome = 5000; // Renda Mensal
  const totalExpenses = 3000; // Despesas Totais
  const remainingBalance = totalIncome - totalExpenses; // Saldo Restante

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <SummaryCard
        title="Renda Mensal"
        value={totalIncome}
        percentage={(totalIncome / totalIncome) * 100}
        icon={<AiOutlineDollar />}
        iconColor="#F5A623" // Laranja
      />
      <SummaryCard
        title="Despesas Totais"
        value={totalExpenses}
        percentage={(totalExpenses / totalIncome) * 100}
        icon={<AiOutlineCreditCard />}
        iconColor="#E94E77" // Vermelho
      />
      <SummaryCard
        title="Saldo Restante"
        value={remainingBalance}
        percentage={(remainingBalance / totalIncome) * 100}
        icon={<AiOutlineBank />}
        iconColor="#4A90E2" // Azul
      />
    </div>
  );
};

export default GeneralSummary;
