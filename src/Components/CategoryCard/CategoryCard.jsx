import { TiWeatherPartlySunny } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ CTCard }) => {
  //   console.log(CTCard.subcategory, "16number line");
  const { imglink, subcategory, description } = CTCard;
  return (
    <div>
      <div className="card h-[80vh] bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={imglink} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">SubCategory: {subcategory}</h2>
          <p className="text-xs text-left">{description}</p>
          <button className="btn w-44  btn-ghost mt-4 bg-gray-300 text-teal-800 font-bold text-sm tracking-widest">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
