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
        <h2 className="text-5xl tracking-widest opacity-75 font-bold mt-28">
          Tourists Spot
        </h2>
        <div className="divider"></div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {travel.length > 6
            ? travel
                .map((hero) => <HeroCard key={hero._id} hero={hero}></HeroCard>)
                .slice(0, 6)
            : travel.map((hero) => (
                <HeroCard key={hero._id} hero={hero}></HeroCard>
              ))}
        </div>
      </div>
      <HotelBooking></HotelBooking>
      <BlogSite></BlogSite>
      <DemoSite></DemoSite>
    </div>
  );
};

export default Home;
