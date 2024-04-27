import BlogSite from "../BlogSite/BlogSite";
import DemoSite from "../DemoSite/DemoSite";
import HotelBooking from "../HotelBooking/HotelBooking";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <HotelBooking></HotelBooking>
      <BlogSite></BlogSite>
      <DemoSite></DemoSite>
    </div>
  );
};

export default Home;
