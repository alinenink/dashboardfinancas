import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeTransaction } from "../redux/slices/transactionsSlice";

const TransactionHistory: React.FC = () => {
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions
  );
  const dispatch = useDispatch();

  return (
    <div className="card p-6">
      <h2 className="text-xl font-bold mb-4">Histórico</h2>
      {transactions.length === 0 ? (
        <p className="text-gray-500">Nenhuma transação registrada.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr>
                <th className="border-b pb-2 text-left">Valor</th>
                <th className="border-b pb-2 text-left">Categoria</th>
                <th className="border-b pb-2 text-left">Data</th>
                <th className="border-b pb-2 text-left">Tipo</th>
                <th className="border-b pb-2 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border-b p-2">
                    {Number(transaction.value).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td className="border-b p-2">
                    {transaction.category || "-"}
                  </td>
                  <td className="border-b p-2">{transaction.date}</td>
                  <td className="border-b p-2">
                    {transaction.type === "Renda" ? "Renda" : "Despesa"}
                  </td>
                  <td className="border-b p-2">
                    <button
                      onClick={() => dispatch(removeTransaction(transaction.id))}
                      className="text-red-500 hover:text-red-600"
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
