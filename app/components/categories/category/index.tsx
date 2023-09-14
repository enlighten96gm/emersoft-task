import { MouseEvent, useState } from "react";

type Props = {
  active: boolean;
  id: number;
  name: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
};

const Category: React.FC<Props> = ({ active, name, id, onClick }) => {
  return (
    <div
      id={id.toString()}
      onClick={onClick}
      className={`cursor-pointer select-none text-slate-500 hover:text-blue-600 ${
        active && "animate-bounce"
      }`}
    >
      {name}
    </div>
  );
};

export default Category;
