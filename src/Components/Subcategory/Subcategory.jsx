import { useLoaderData } from "react-router-dom";
import SubcategoryCard from "../SubcategoryCard/SubcategoryCard";

const Subcategory = () => {
  const categoryLoader = useLoaderData();
  console.log(categoryLoader);
  return (
    <div>
      <h2>sub category</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {categoryLoader.map((catCard) => (
          <SubcategoryCard
            key={catCard._id}
            catCard={catCard}
          ></SubcategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Subcategory;
