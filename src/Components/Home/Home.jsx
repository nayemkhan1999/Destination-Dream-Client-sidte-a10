import { useLoaderData } from "react-router-dom";
import BlogSite from "../BlogSite/BlogSite";
import DemoSite from "../DemoSite/DemoSite";
import HotelBooking from "../HotelBooking/HotelBooking";
import Slider from "../Slider/Slider";
import HeroCard from "../HeroCard/HeroCard";

const Home = () => {
  const travel = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div>
        <h2>hello{travel.length}</h2>

        {travel.length > 6
          ? travel
              .map((hero) => <HeroCard key={hero._id} hero={hero}></HeroCard>)
              .slice(0, 6)
          : travel.map((hero) => (
              <HeroCard key={hero._id} hero={hero}></HeroCard>
            ))}
      </div>
      <HotelBooking></HotelBooking>
      <BlogSite></BlogSite>
      <DemoSite></DemoSite>
    </div>
  );
};

export default Home;
