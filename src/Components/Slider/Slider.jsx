import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Slider = () => {
  return (
    <div className="lg:container md:container  mx-auto">
      <Swiper
        slidesPerView={3}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 1000 }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="slide slide1">
            <div className="text-center lg:block hidden">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                In Depth Tour Features
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                We are in this business for more than ten years. Customers
                satisfied with reliable & excellent customer support.
              </p>
              <button className="btn  bg-info border-none text-white p-4 mt-2 opacity-80">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2">
            <div className="text-center lg:block hidden">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                Unforgotten Experiences
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                A FOREST, a terrible one, it was not the forest which was
                terrible but it was my experience which met a terrible fate, at
              </p>
              <button className="btn  bg-[#F3643C] border-none mt-5 text-white p-4 opacity-80">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide3">
            <div className="text-center lg:block hidden">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                The City Tour
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                City Tour Worldwide: Go sightsee in all our destinations by
                train and bus
              </p>
              <button className="btn  bg-[#FBC83D] border-none mt-5 text-white p-4 opacity-80">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4">
            <div className="text-center lg:block hidden">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                Love Your Dream Now
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                Love is a beautiful part of our lives. Without love, the life
                becomes harsh. Now, don't get me wrong. I don't mean that love
                is just the concept ...
              </p>
              <button className="btn  bg-[#CE9C7F] border-none mt-5 text-white p-4 opacity-80">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide5">
            <div className="text-center lg:block hidden">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                Mountaineering Home
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                We are in this business for more than ten years. Customers
                satisfied with reliable & excellent customer support.
              </p>
              <button className="btn  bg-[#317A89] border-none mt-5 text-white p-4 opacity-80">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide6">
            <div className="text-center lg:block hidden">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                Let's Explore Your Honeymoon Trip
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                We are in this business for more than ten years. Customers
                satisfied with reliable & excellent customer support.
              </p>
              <button className="btn  bg-[#9F5445] border-none mt-5 text-white p-4 opacity-80">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide7">
            <div className="text-center lg:block hidden">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                We Are Whom You Trusted
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                We are in this business for more than ten years. Customers
                satisfied with reliable & excellent customer support.
              </p>
              <button className="btn  bg-[#D08716] border-none mt-5 text-white p-4 opacity-80">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide8">
            <div className="text-center lg:block hidden">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                Find Some Amazing Tour.
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                We are in this business for more than ten years. Customers
                satisfied with reliable & excellent customer support.
              </p>
              <button className="btn  bg-[#FF9D63] border-none mt-5 text-white p-4 opacity-80">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
