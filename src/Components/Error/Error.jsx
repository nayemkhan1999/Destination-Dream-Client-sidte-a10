import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="mx-auto text-center">
      <h2 className="text-[48vh]  font-black text-center tracking-wider">
        404
      </h2>
      <p className="  text-orange-400 font-bold text-3xl">
        Error Page not found
      </p>
      <Link to="/">
        <button className=" mt-4 font-bold text-xl btn btn-accent text-gray-600 rounded-2xl px-4 ">
          GO BACK HOME
        </button>
      </Link>
    </div>
  );
};

export default Error;
