import { TiWeatherPartlySunny } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ CTCard }) => {
  //   console.log(CTCard.subcategory, "16number line");
  const { imglink, subcategory, description } = CTCard;
  return (
    <div>
      <NavLink to={`/subcategory/${subcategory}`}>
        <div className="card h-[80vh] bg-base-100 shadow-xl mt-10 cursor-pointer">
          <figure>
            <img src={imglink} alt="Shoes" />
          </figure>
          <div className="card-body  ">
            <h2 className="card-title ">{subcategory}</h2>
            <p className="text-xs text-left">{description}</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CategoryCard;
