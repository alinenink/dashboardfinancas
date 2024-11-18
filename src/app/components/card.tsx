interface CardProps {
  title: string;
  value: string;
  percentage: string;
  color: string;
}

const Card = ({ title, value, percentage, color }: CardProps) => {
  return (
    <div className="card flex flex-col items-center justify-center text-center sm:items-start sm:text-left">
      <h2 className="text-lg font-semibold dark:text-gray-100">{title}</h2>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
      <p className="text-sm text-gray-500 dark:text-gray-300">{percentage}</p>
    </div>
  );
};

export default Card;
