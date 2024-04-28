import { GiMoneyStack, GiWorld } from "react-icons/gi";
import { IoAirplane, IoLocationSharp, IoTimeOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useLoaderData } from "react-router-dom";

const ViewDetailsCard = () => {
  const views = useLoaderData();
  const {
    name,

    Country,
    spotLocation,
    averageCost,
    seasonality,
    tavelTime,
    UserName,
    UserEmail,
    photo,
    totalVisitors,
    description,
  } = views;
  return (
    <div>
      <div className="hero min-h-screen border-2 mt-5 rounded-xl shadow-xl">
        <div className="hero-content flex-col lg:flex-row items-center ">
          <img src={photo} className="max-w-2xl rounded-lg shadow-2xl" />
          <div className="">
            <h1 className="text-5xl font-bold opacity-90 tracking-wider text-left  ">
              {UserName}
            </h1>
            <h1 className="text-xl font-semibold opacity-70 tracking-wider text-left flex items-center gap-3 mt-2">
              <span className="">
                <GiWorld />
              </span>
              {Country}
            </h1>
            <h1 className="text-left font-bold text-3xl opacity-90 tracking-wider mt-8">
              About
            </h1>
            <p className="py-6 text-left opacity-70 tracking-wide font-medium">
              {description}
            </p>
            <div className="flex items-center gap-2">
              <h1 className="text-left font-bold text-2xl opacity-90 tracking-wider ">
                Spot Name:
              </h1>
              <p className=" text-left opacity-70 text-xl tracking-wide font-bold">
                {name}
              </p>
            </div>
            {/* Email */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-2xl font-bold">
                <TfiEmail />
              </span>
              <p>
                <span className="font-bold">Email:</span>
                <span className="opacity-70 ml-2 text-gray-500 font-semibold">
                  {UserEmail}
                </span>
              </p>
            </div>
            {/* Location */}
            <div className="flex items-center gap-3 mt-3 text-left">
              <span className="text-3xl  font-bold text-red-500">
                <IoLocationSharp />
              </span>
              <p>
                <span className="font-bold">Location:</span>
                <span className="opacity-70 ml-2 text-gray-500 font-semibold">
                  {spotLocation}
                </span>
              </p>
            </div>
            {/* Average costing */}
            <div className="flex items-center gap-3 mt-3 text-left">
              <span className="text-3xl  font-bold text-gray-600">
                <GiMoneyStack />
              </span>
              <p>
                <span className="font-bold">Average Costing:</span>
                <span className="opacity-70 ml-2 text-gray-500 font-semibold">
                  {averageCost}
                </span>
              </p>
            </div>
            {/* totalVisitors per year */}
            <div className="flex items-center gap-3 mt-3 text-left">
              <span className="text-3xl  font-bold text-gray-600">
                <IoAirplane />
              </span>
              <p>
                <span className="font-bold">Total Visitor Per Year:</span>
                <span className="opacity-70 ml-2 text-gray-400 font-semibold">
                  {totalVisitors}
                </span>
              </p>
            </div>
            {/* Travel Time */}
            <div className="flex items-center gap-3 mt-3 text-left">
              <span className="text-3xl  font-bold text-gray-600">
                <IoTimeOutline />
              </span>
              <p>
                <span className="font-bold">Travel Time:</span>
                <span className="opacity-70 ml-2 text-gray-400 font-semibold">
                  {tavelTime}
                </span>
              </p>
            </div>
            {/* Winter or summer */}
            <div className="flex items-center gap-3 mt-3 text-left">
              <span className="text-3xl  font-bold text-gray-600">
                <TiWeatherPartlySunny />
              </span>
              <p>
                <span className="font-bold">Weather:</span>
                <span className="opacity-70 ml-2 text-gray-400 font-semibold">
                  {seasonality}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsCard;
