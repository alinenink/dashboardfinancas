import ExpenseCard from "src/app/components/ExpenseCard";
import FixedVsVariableExpenses from "src/app/components/FixedVsVariableExpenses";
import GeneralSummary from "src/app/components/GeneralSummary";
import MonthlyExpensesChart from "src/app/components/MonthlyExpensesChart";
import MonthlyExpensesLineChart from "src/app/components/MonthlyExpensesLineChart";
import ProjectionChart from "src/app/components/ProjectionChart";
import TopExpensesChart from "src/app/components/TopExpensesChart";
import "@/styles/globals.css";


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
  { category: "Alimentação", amount: 1200 },
  { category: "Transporte", amount: 600 },
  { category: "Lazer", amount: 400 },
  { category: "Saúde", amount: 300 },
  { category: "Educação", amount: 200 },
];

const highestExpense = { category: "Aluguel", amount: 1200 };
const increasePercentage = 475;

const fixed = 1300; // Gastos fixos
const variable = 1000; // Gastos variáveis

const actualExpenses = [1200, 1300, 1250, 1350, 1400]; // Gastos reais

const Dashboard = () => {
  return (
    <div className="p-6 card-container h-screen overflow-y-scroll">
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
