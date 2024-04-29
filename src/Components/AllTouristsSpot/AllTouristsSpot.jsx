import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import { Helmet } from "react-helmet";
import UseAuth from "../UseAuth/UseAuth";

const AllTouristsSpot = () => {
  const { user } = UseAuth();
  console.log(user?.email, user?.displayName);
  const destinations = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Destination | AllTouristSpot Page</title>
      </Helmet>
      <h2 className="text-5xl tracking-widest opacity-70 font-bold mt-8">
        All Tourists Spot Page
      </h2>
      <div className="grid md:grid-cols-3 gap-4 mt-12">
        {destinations.map((card) => (
          <Cards key={card._id} card={card}></Cards>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
