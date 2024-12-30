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
  filteredTransactions: Transaction[];
  categories: string[];
}

const generateTransactions = () => {
  const categories = [
    "Alimentação",
    "Transporte",
    "Lazer",
    "Saúde",
    "Educação",
    "Aluguel",
  ];

  const additionalCategories = [
    "Viagem",
    "Hobbies",
    "Tecnologia",
  ];

  const transactions: Transaction[] = [];
  let id = 1;

  // Gerar valores baseados em um padrão fixo para evitar variações
  const getFixedValue = (month: number, category: string) =>
    Math.floor(500 + month * 100 + category.length * 50);

  // Adicionar renda mensal para todos os meses
  for (let month = 1; month <= 12; month++) {
    transactions.push({
      id: id.toString(),
      value: 10000 + month * 500, // Valor fixo de renda com ajuste por mês
      category: "Salário",
      date: `2024-${month.toString().padStart(2, "0")}-01`,
      type: "Renda",
    });
    id++;
  }

  // Gerar transações para todos os meses e categorias padrão
  for (let month = 1; month <= 12; month++) {
    categories.forEach((category) => {
      transactions.push({
        id: id.toString(),
        value: getFixedValue(month, category), // Valor determinístico
        category,
        date: `2023-${month.toString().padStart(2, "0")}-15`,
        type: "Despesa",
      });
      id++;
    });
  }

  // Adicionar categorias extras para os últimos 3 meses
  [10, 11, 12].forEach((month) => {
    additionalCategories.forEach((category) => {
      transactions.push({
        id: id.toString(),
        value: getFixedValue(month, category) + 1000, // Valor determinístico
        category,
        date: `2023-${month.toString().padStart(2, "0")}-20`,
        type: "Despesa",
      });
      id++;
    });
  });

  return transactions;
};

const initialState: TransactionsState = {
  transactions: generateTransactions(),
  filteredTransactions: [],
  categories: [
    "Alimentação",
    "Transporte",
    "Lazer",
    "Saúde",
    "Educação",
    "Aluguel",
    "Viagem",
    "Hobbies",
    "Tecnologia",
    "Salário", // Categoria de renda
  ],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload); // Atualiza o array de transações
    },
    removeTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (tx) => tx.id !== action.payload
      );
    },
    filterTransactions: (
      state,
      action: PayloadAction<{ month?: number; category?: string }>
    ) => {
      const { month, category } = action.payload;

      state.filteredTransactions = state.transactions.filter((tx) => {
        const transactionDate = new Date(tx.date);
        const transactionMonth = transactionDate.getMonth() + 1;

        return (
          (!month || transactionMonth === month) &&
          (!category || tx.category === category)
        );
      });
    },
  },
});

export const { addTransaction, removeTransaction, filterTransactions } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
