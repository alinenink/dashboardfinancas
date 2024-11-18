import MonthlyExpensesChart from "@/app/components/barChart";
import MonthlyExpensesLineChart from "@/app/components/expenseList";
import GeneralSummary from "@/app/components/generalSumary";
import ExpenseCard from "@/app/components/pieChat";

const expenseData = [
  { label: "Alimentação", value: 200 },
  { label: "Transporte", value: 100 },
  { label: "Lazer", value: 50 },
  { label: "Saúde", value: 75 },
  { label: "Educação", value: 125 },
];

// Meses para comparação
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"];

// Categorias de gastos
const categories = ["Alimentação", "Transporte", "Lazer", "Saúde", "Educação"];

// Dados de gastos por mês e por categoria
const data = [
  [200, 150, 100, 75, 125], // Janeiro
  [180, 120, 80, 70, 100], // Fevereiro
  [250, 180, 130, 90, 150], // Março
  [220, 160, 110, 85, 140], // Abril
  [300, 200, 150, 110, 160], // Maio
];

const Dashboard = () => {
  return (
    <div className="p-6 card-container">
      {/* Resumo geral */}
      <GeneralSummary />
      <div className="mt-8 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 h-[30vh]">
        <ExpenseCard title="Gastos Mensais" data={expenseData} />
        <MonthlyExpensesChart
          months={months}
          categories={categories}
          data={data}
        />
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 w-[77vw]">
        <MonthlyExpensesLineChart
          months={months}
          categories={categories}
          data={data}
        />
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
