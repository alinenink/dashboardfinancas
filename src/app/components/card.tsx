import React from "react";

// Definindo os tipos das props
interface CardProps {
  title: string; // O título do card
  value: string; // O valor do card
  percentage: string; // A porcentagem do card
  color: string; // A classe de cor para estilização
}

const Card: React.FC<CardProps> = ({ title, value, percentage, color }) => {
  return (
    <div className="card flex flex-col items-center justify-center text-center">
      <h3 className={`text-lg font-bold mb-2 ${color}`}>{title}</h3>
      <p className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
        {value}
      </p>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {percentage}
      </span>
    </div>
  );
};

export default Card;
