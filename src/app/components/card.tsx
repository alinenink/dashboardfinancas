interface CardProps {
  title: string;
  value: string;
  percentage: string;
  color: string;
}

const Card = ({ title, value, percentage, color }) => {
  return (
    <div className="card flex flex-col items-center justify-center text-center">
      <h3 className={`text-lg font-bold mb-2 ${color}`}>{title}</h3>
      <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">{value}</p>
      <span className="text-sm text-gray-500 dark:text-gray-400">{percentage}</span>
    </div>
  );
};

export default Card;

