import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const CategoryCollection = () => {
  const [categoryItem, setCategoryItem] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/destination_category`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryItem(data);
      });
  }, []);
  //   console.log(categoryItem, "14numner line");
  return (
    <div>
      <h2 className="text-3xl">Destination Category</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {categoryItem.map((CTCard) => (
          <CategoryCard key={CTCard._id} CTCard={CTCard}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryCollection;
