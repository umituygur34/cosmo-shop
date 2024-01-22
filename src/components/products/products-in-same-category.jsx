"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductItem from "./product-item";
const ProductsInsameCategory = ({ products }) => {
  return (
    <div>
      <Swiper
        spaceBetween={50} // herbir eleman arasında 50px bosluk olacak
        slidesPerView={3} // görüntüler 3 -tane eleman olacak aynı anda
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsInsameCategory;
