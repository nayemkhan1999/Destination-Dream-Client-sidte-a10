import map from "../../assets/img/map.jpg";
import logo from "../../assets/img/logo.png";
import googleMap from "../../assets/img/googleMap.png";
const HotelBooking = () => {
  return (
    <div>
      <h2 className="text-5xl tracking-widest opacity-75 font-bold mt-28">
        Find Your Destinations
      </h2>
      {/* <div className="divider"></div> */}
      <div className="mt-16  rounded-xl shadow-xl">
        <section className="p-6 dark:text-gray-800">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <img
              src={map}
              alt=""
              className="object-cover w-full rounded-md xl:col-span-3 "
            />
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2">
              <span>
                <img className="mb-8 w-72" src={logo} alt="" />
              </span>
              <h1 className="text-[28px] font-normal w-96 tracking-widest opacity-80 mb-8">
                FEATURE DESTINATIONS <br /> ON THE MAP
              </h1>
              <p className="opacity-60 mt-4 tracking-widest font-medium text-base w-96">
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
