import Card from "./card";

const GeneralSummary = () => {
  const summaryData = [
    {
      title: "Renda Mensal",
      value: "R$ 5.000",
      percentage: "40% do total",
      color: "text-blue-400", // Azul pastel
    },
    {
      title: "Despesas Totais",
      value: "R$ 3.000",
      percentage: "60% do total",
      color: "text-red-400", // Vermelho pastel
    },
    {
      title: "Saldo Restante",
      value: "R$ 2.000",
      percentage: "40% do total",
      color: "text-green-400", // Verde pastel
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      {summaryData.map((data, index) => (
        <Card
          key={index}
          title={data.title}
          value={data.value}
          percentage={data.percentage}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default GeneralSummary;
