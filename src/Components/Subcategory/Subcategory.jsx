import { useLoaderData } from "react-router-dom";
import SubcategoryCard from "../SubcategoryCard/SubcategoryCard";
import { Typewriter } from "react-simple-typewriter";

const Subcategory = () => {
  const categoryLoader = useLoaderData();
  console.log(categoryLoader);
  return (
    <div>
      <h2 className="lg:text-5xl text-3xl tracking-widest opacity-75 font-bold mt-10">
        sub
        <span className="text-[#F97316]">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["category Card"]}
          />
        </span>
      </h2>
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
