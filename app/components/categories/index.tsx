import useFetch from "@/app/hooks/useFetch";
import { MouseEvent } from "react";
import Loader from "../loader";
import Category from "./category";

type Props = {
  category: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
};

const Categories: React.FC<Props> = ({ category, onClick }) => {
  const { data, loading, error } = useFetch("posts/categories", 1);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const renderCategories = () => {
    if (data && "categories" in data) {
      return data.categories.map(({ name, id }) => (
        <Category
          active={Number(category) === id}
          name={name}
          id={id}
          onClick={onClick}
        />
      ));
    }
  };

  return (
    <div className="mt-4 flex justify-center gap-4 flex-wrap">
      {renderCategories()}
    </div>
  );
};

export default Categories;
