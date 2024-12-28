import TransactionForm from "@/components/TransactionForm";
import TransactionHistory from "@/components/TransactionHistory";
import React from "react";
const Transactions: React.FC = () => {
  return (
    <div className="p-6 card-container screen-dashboard overflow-y-auto md:overflow-hidden">
      {/* Formulário de Inserção */}
      <TransactionForm />

      {/* Histórico de Transações */}
      <div className="mt-8">
        <TransactionHistory />
      </div>
    </div>
  );
};

export default Transactions;
