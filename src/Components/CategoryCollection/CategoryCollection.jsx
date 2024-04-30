import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Typewriter } from "react-simple-typewriter";

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
      <h2 className="lg:text-5xl text-3xl tracking-widest opacity-75 font-bold mt-28">
        Destination{" "}
        <span className="text-[#F97316]">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Category"]}
          />
        </span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {categoryItem.map((CTCard) => (
          <CategoryCard key={CTCard._id} CTCard={CTCard}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryCollection;
