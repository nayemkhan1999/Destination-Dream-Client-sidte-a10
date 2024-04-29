import blogs from "../../assets/img/blog.jpg";
import { SiGooglemaps } from "react-icons/si";
const BlogSite = () => {
  return (
    <div>
      <h2 className="lg:text-5xl text-3xl tracking-widest opacity-75 font-bold mt-28">
        Check Out
      </h2>
      <div className="mt-16  rounded-xl shadow-xl">
        <section className="p-6 dark:text-gray-800">
          <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
            <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-50">
              <span>
                <img className="mb-8 lg:w-72" src="" alt="" />
              </span>
              <h1 className="lg:text-[29px] text-2xl font-normal opacity-80 lg:w-96 tracking-widest mb-8">
                SO MANY STUNNING <br /> POST VARIATIONS!
              </h1>
              <p className="opacity-60 mt-4 tracking-widest font-medium text-base  lg:w-96">
                Packed full with
                <span className="text-orange-500 font-bold">
                  amazing layouts
                </span>
                which are great for showcasing all kinds of posts
                <span className="underline">
                  {" "}
                  straight out of the box!
                </span>{" "}
              </p>

              <div className="text-center mx-auto">
                <div className="flex items-center justify-evenly  mt-8">
                  <p className="text-3xl text-red-500">
                    <SiGooglemaps />
                  </p>
                  <span className="font-medium text-base tracking-widest opacity-80">
                    Beautiful single post layout set
                  </span>
                </div>

                <div className="flex items-center justify-evenly mt-8">
                  <p className="text-3xl text-red-500">
                    <SiGooglemaps />
                  </p>
                  <span className="font-medium text-base tracking-widest opacity-80 ">
                    Feature eye-catching blog sliders
                  </span>
                </div>
                <div className="flex items-center justify-evenly  mt-8">
                  <p className="text-3xl text-red-500">
                    <SiGooglemaps />
                  </p>
                  <span className="font-medium text-base tracking-widest opacity-80 ">
                    Add videos, audio & much more
                  </span>
                </div>
              </div>

              <img className="mt-8" src="" alt="" />
            </div>
            <img
              src={blogs}
              alt=""
              className="object-cover w-full rounded-md xl:col-span-3 "
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogSite;
