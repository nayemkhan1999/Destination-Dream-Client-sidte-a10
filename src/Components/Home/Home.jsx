import { useLoaderData } from "react-router-dom";
import BlogSite from "../BlogSite/BlogSite";
import DemoSite from "../DemoSite/DemoSite";
import HotelBooking from "../HotelBooking/HotelBooking";
import Slider from "../Slider/Slider";
import HeroCard from "../HeroCard/HeroCard";
import { Helmet } from "react-helmet";

const Home = () => {
  const travel = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Destinations | Home Page</title>
      </Helmet>
      <Slider></Slider>
      <div>
        <h2 className="lg:text-5xl text-3xl tracking-widest opacity-75 font-bold mt-28">
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
