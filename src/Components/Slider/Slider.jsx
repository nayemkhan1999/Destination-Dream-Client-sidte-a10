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
        // autoplay={{ delay: 2000 }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="slide slide1">
            <div className="text-center">
              <h1 className="text-gray-300 text-3xl font-semibold opacity-80">
                In Depth Tour Features
              </h1>
              <p className="text-sm text-white opacity-70 mt-3">
                We are in this business for more than ten years. Customers
                satisfied with reliable & excellent customer support.
              </p>
              <button className="btn  btn-info mt-5 text-white p-4">
                View Features
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide slide3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide4"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide5"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide6"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide7"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide8"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
