import MonthlyExpensesChart from "@/app/components/barChart";
import MonthlyExpensesLineChart from "@/app/components/expenseList";
import FixedVsVariableExpenses from "@/app/components/fixedVsVariableChart";
import FixedVsVariableChart from "@/app/components/fixedVsVariableChart";
import GeneralSummary from "@/app/components/generalSumary";
import ExpenseCard from "@/app/components/pieChat";
import ProjectionChart from "@/app/components/spendingProjectionChart";
import SpendingProjectionChart from "@/app/components/spendingProjectionChart";
import TopExpensesChart from "@/app/components/topExpenses";

const expenseData = [
  { label: "Alimentação", value: 1200 },
  { label: "Transporte", value: 600 },
  { label: "Lazer", value: 300 },
  { label: "Saúde", value: 400 },
  { label: "Educação", value: 500 },
];
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];
const categories = ["Alimentação", "Transporte", "Lazer", "Saúde", "Educação"];
const data = [
  [300, 150, 100, 75, 125], // Janeiro
  [250, 130, 90, 70, 120], // Fevereiro
  [200, 120, 80, 65, 110], // Março
  [180, 100, 70, 60, 100], // Abril
  [160, 90, 60, 55, 90], // Maio
];

const expenses = [
  { category: "Aluguel", amount: 1200 },
  { category: "Supermercado", amount: 600 },
  { category: "Saúde", amount: 400 },
  { category: "Transporte", amount: 300 },
  { category: "Lazer", amount: 200 },
];

const highestExpense = { category: "Aluguel", amount: 1200 };
const increasePercentage = 475;

const fixed = 1300; // Gastos fixos
const variable = 1000; // Gastos variáveis

const actualExpenses = [1200, 1300, 1250, 1350, 1400]; // Gastos reais

const Dashboard = () => {
  return (
    <div className="p-6 card-container h-screen overflow-y-scroll bg-gray-100 dark:bg-gray-900">
      {/* Resumo geral */}
      <GeneralSummary />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ExpenseCard title="Categorias em Percentuais" data={expenseData} />
        <MonthlyExpensesChart
          months={months}
          categories={categories}
          data={data}
        />
        <MonthlyExpensesLineChart
          months={months}
          categories={categories}
          data={data}
        />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Segunda linha de componentes */}
        <TopExpensesChart
          expenses={expenses}
          highestExpense={highestExpense}
          increasePercentage={increasePercentage}
        />{" "}
        <FixedVsVariableExpenses fixed={fixed} variable={variable} />
        <ProjectionChart months={months} actualExpenses={actualExpenses} />      </div>
    </div>
  );
};

export default Dashboard;
