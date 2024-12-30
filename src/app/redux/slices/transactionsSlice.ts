import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  id: string;
  value: number;
  category: string | null;
  date: string;
  type: string;
}

interface TransactionsState {
  transactions: Transaction[];
  categories: string[];
}

const initialState: TransactionsState = {
  transactions: [
    // Renda - Últimos 3 meses
    { id: "1", value: 15000, category: "Salário", date: "2023-10-01", type: "Renda" },
    { id: "2", value: 10000, category: "Consultoria", date: "2023-11-01", type: "Renda" },
    { id: "3", value: 9000, category: "Investimentos", date: "2023-12-01", type: "Renda" },
  
    // Despesas - Outubro
    { id: "4", value: 2500, category: "Alimentação", date: "2023-10-05", type: "Despesa" },
    { id: "5", value: 3000, category: "Transporte", date: "2023-10-10", type: "Despesa" },
    { id: "6", value: 1500, category: "Lazer", date: "2023-10-15", type: "Despesa" },
    { id: "7", value: 1200, category: "Saúde", date: "2023-10-20", type: "Despesa" },
    { id: "8", value: 1000, category: "Educação", date: "2023-10-25", type: "Despesa" },
    { id: "9", value: 4000, category: "Aluguel", date: "2023-10-30", type: "Despesa" },
  
    // Despesas - Novembro
    { id: "10", value: 2800, category: "Alimentação", date: "2023-11-05", type: "Despesa" },
    { id: "11", value: 2000, category: "Transporte", date: "2023-11-10", type: "Despesa" },
    { id: "12", value: 1800, category: "Lazer", date: "2023-11-15", type: "Despesa" },
    { id: "13", value: 1400, category: "Saúde", date: "2023-11-20", type: "Despesa" },
    { id: "14", value: 1200, category: "Educação", date: "2023-11-25", type: "Despesa" },
    { id: "15", value: 4200, category: "Aluguel", date: "2023-11-30", type: "Despesa" },
  
    // Despesas - Dezembro
    { id: "16", value: 3000, category: "Alimentação", date: "2023-12-05", type: "Despesa" },
    { id: "17", value: 2500, category: "Transporte", date: "2023-12-10", type: "Despesa" },
    { id: "18", value: 2000, category: "Lazer", date: "2023-12-15", type: "Despesa" },
    { id: "19", value: 1800, category: "Saúde", date: "2023-12-20", type: "Despesa" },
    { id: "20", value: 1500, category: "Educação", date: "2023-12-25", type: "Despesa" },
    { id: "21", value: 4500, category: "Aluguel", date: "2023-12-30", type: "Despesa" },
  ],  
  categories: ["Alimentação", "Transporte", "Lazer", "Saúde", "Educação", "Aluguel"],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (tx) => tx.id !== action.payload
      );
    },
  },
});

export const { addTransaction, removeTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
