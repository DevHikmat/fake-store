import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import OneProduct from "../../components/oneProduct/OneProduct";
import { useInfoContext } from "../../context/InfoContext";

const Carousel = ({ cat }) => {
  const { products } = useInfoContext();
  return (
    <Swiper
      slidesPerView={"3"}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      loop={true}
    >
      {products &&
        products
          .filter((item) => item.category === cat)
          .map((prod, index) => {
            return (
              <SwiperSlide key={index}>
                <OneProduct prod={prod} />
              </SwiperSlide>
            );
          })}
    </Swiper>
  );
};

export default Carousel;
