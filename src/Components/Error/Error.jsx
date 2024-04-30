import { Link } from "react-router-dom";
import notFound from "../../../public/detective-animation-404-error-page.gif";

const Error = () => {
  return (
    <div className="mx-auto text-center">
      <div className="flex items-center justify-center">
        <img className="h-[400px]" src={notFound} alt="" />
      </div>

      <Link to="/">
        <button className=" mt-4 font-bold text-xl btn btn-accent text-gray-600 rounded-2xl px-4 ">
          GO BACK HOME
        </button>
      </Link>
    </div>
  );
};

export default Error;
