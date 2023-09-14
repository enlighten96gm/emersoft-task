import { MouseEvent } from "react";

type Props = {
  children: string | JSX.Element | JSX.Element[];
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <div>
      <div
        onClick={onClick}
        className="text-xl text-slate-500 hover:text-blue-600 cursor-pointer select-none"
      >
        {children}
      </div>
    </div>
  );
};

export default Button;
