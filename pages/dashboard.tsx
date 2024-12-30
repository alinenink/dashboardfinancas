import ExpenseCard from "@/components/ExpenseCard";
import FixedVsVariableExpenses from "src/app/components/FixedVsVariableExpenses";
import GeneralSummary from "src/app/components/GeneralSummary";
import MonthlyExpensesChart from "src/app/components/MonthlyExpensesChart";
import MonthlyExpensesLineChart from "src/app/components/MonthlyExpensesLineChart";
import ProjectionChart from "src/app/components/ProjectionChart";
import TopExpensesChart from "src/app/components/TopExpensesChart";

const Dashboard = () => {
  return (
    <div className="p-6 card-container screen-dashboard overflow-y-auto md:overflow-hidden">
      <GeneralSummary />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ExpenseCard
          title="Categorias em Percentuais"
          data={[
            { label: "Alimentação", value: 150 },
            { label: "Transporte", value: 100 },
            { label: "Lazer", value: 50 },
          ]}
        />
        <MonthlyExpensesChart />
        <MonthlyExpensesLineChart />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <TopExpensesChart />
        <FixedVsVariableExpenses />
        <ProjectionChart />
      </div>
    </div>
  );
};

export default Dashboard;
