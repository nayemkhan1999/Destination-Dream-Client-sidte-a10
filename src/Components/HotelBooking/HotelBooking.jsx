import map from "../../assets/img/map.jpg";
import logo from "../../assets/img/logo.png";
import googleMap from "../../assets/img/googleMap.png";
import { Typewriter } from "react-simple-typewriter";
const HotelBooking = () => {
  return (
    <div>
      <h2 className="lg:text-5xl text-3xl tracking-widest opacity-75 font-bold mt-28">
        Find Your
        <span className="text-[#F97316]">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Destinations"]}
          />
        </span>
      </h2>
      {/* <div className="divider"></div> */}
      <div className="mt-16  rounded-xl shadow-xl">
        <section className="p-6 dark:text-gray-800 ">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-5">
            <img
              src={map}
              alt=""
              className="object-cover lg:w-full md:w-full w-56 lg:h-auto md:h-96 h-60 rounded-md xl:col-span-3 "
            />
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
              <span>
                <img className="mb-8 lg:w-72 md:w-72 w-52" src={logo} alt="" />
              </span>
              <h1 className="lg:text-[28px] text-2xl font-normal lg:w-96 tracking-widest opacity-80 lg:mb-8">
                FEATURE DESTINATIONS <br /> ON THE MAP
              </h1>
              <p className="opacity-60 mt-4 tracking-widest font-medium text-base lg:w-96">
                Our theme lets you{" "}
                <span className="text-orange-500 font-bold">
                  integrate Google Maps
                </span>{" "}
                on any of your pages. Not only this, but the maps are fully
                customizable so you can use the style that fits you the most!{" "}
                <span className="underline">
                  You can also easily pin the destinations
                </span>{" "}
                from your posts right on the map!
              </p>
              <img className="mt-8" src={googleMap} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HotelBooking;
