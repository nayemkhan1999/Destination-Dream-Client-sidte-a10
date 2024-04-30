import { Typewriter } from "react-simple-typewriter";

const DemoSite = () => {
  return (
    <div>
      <h2 className="lg:text-5xl text-3xl tracking-widest opacity-75 font-bold mt-28">
        Main Website
        <span className="text-[#F97316]">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={1000}
            deleteSpeed={25}
            loop={0}
            typeSpeed={75}
            words={["Demos"]}
          />
        </span>
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <div className="lg:w-96 containerImg container1 h-72 mt-20 rounded-xl p-4 "></div>
          <h1 className="text-2xl mt-5  tracking-widest opacity-75 font-bold">
            Camper
          </h1>
        </div>
        <div>
          <div className="lg:w-96 containerImg container2 h-72 mt-20 rounded-xl p-4 "></div>
          <h1 className="text-2xl mt-5  tracking-widest opacity-75 font-bold">
            Hotel Booking
          </h1>
        </div>
        <div>
          <div className="lg:w-96 containerImg container3 h-72 mt-20 rounded-xl p-4 "></div>
          <h1 className="text-2xl mt-5  tracking-widest opacity-75 font-bold">
            City Tore
          </h1>
        </div>
        <div>
          <div className="lg:w-96 containerImg container4 h-72 mt-20 rounded-xl p-4 "></div>
          <h1 className="text-2xl mt-5  tracking-widest opacity-75 font-bold">
            Museam
          </h1>
        </div>
        <div>
          <div className="lg:w-96 containerImg container5 h-72 mt-20 rounded-xl p-4 "></div>
          <h1 className="text-2xl mt-5  tracking-widest opacity-75 font-bold">
            Golf Club
          </h1>
        </div>
        <div>
          <div className="lg:w-96 containerImg container6 h-72 mt-20 rounded-xl p-4 "></div>
          <h1 className="text-2xl mt-5  tracking-widest opacity-75 font-bold">
            Hiking
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DemoSite;
