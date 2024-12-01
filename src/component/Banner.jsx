
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import '../../node_modules/swiper/swiper-bundle.min.css'

const Banner = () => {
    return (
        <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
  
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/5sn8PPs/img11.webp"
                alt="Adventure 1"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
              <div className="absolute inset-0 flex justify-center items-center text-center text-white">
                <div>
                  <h2 className="text-base md:text-2xl lg:text-4xl font-bold ">The Art of Storytelling</h2>
                  <p className="mt-2 max-w-3xl text-xm md:text-base lg:text-lg font-medium ">Discover the secrets to crafting compelling narratives that captivate readers worldwide.</p>
                  <button className="mt-4 px-6 py-2 bg-bgbton text-primary font-semibold rounded text-sm sm:text-base lg:text-lg">
                  Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
  
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/2YJmNZ2/book1.jpg"
                alt="Adventure 1"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
              <div className="absolute inset-0 flex justify-center items-center text-center text-white">
                <div>
                  <h2 className="text-base md:text-2xl lg:text-4xl font-bold">Journey Through Classics</h2>
                  <p className="mt-2 max-w-3xl  text-xm md:text-base lg:text-lg font-medium ">A curated collection of timeless literary masterpieces that shaped the world of fiction</p>
                  <button className="mt-4 px-6 py-2 bg-bgbton text-primary font-semibold rounded text-sm sm:text-base lg:text-lg ">
                  Explore Collection
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
          <SwiperSlide>
            <div className="relative">
              <img
                src="https://i.ibb.co/rsGjyv7/book3.jpg"
                alt="Adventure 1"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}
              <div className="absolute inset-0 flex justify-center items-center text-center text-white">
                <div>
                  <h2 className="text-base md:text-2xl  lg:text-4xl font-bold">Adventures Await</h2>
                  <p className="mt-2 max-w-3xl text-xm md:text-base lg:text-lg font-medium ">Dive into thrilling tales of adventure and exploration that ignite your imagination.
                   Start Reading</p>
                  <button className="mt-4 px-6 py-2 bg-bgbton text-primary font-semibold rounded text-sm sm:text-base lg:text-lg">
                  Start Reading
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
  
        </Swiper>
      </div>
    );
};

export default Banner;