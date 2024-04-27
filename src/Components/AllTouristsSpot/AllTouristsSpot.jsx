import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";

const AllTouristsSpot = () => {
  const destinations = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl text-center">
        AllTouristsSpot page:{destinations.length}
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {destinations.map((card) => (
          <Cards key={card._id} card={card}></Cards>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
