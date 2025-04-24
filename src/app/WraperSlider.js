"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WrapperSlider = ({ slides = [], slidesPerView = 1.2, navigation = true, pagination = true, breakpoints = {} }) => {
    const swiperRef = useRef(null);

    const prevSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const nextSlide = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (                                            
        <div className="custom-swiper-container relative">
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={slidesPerView}
                centeredSlides={true}
                breakpoints={breakpoints}
                pagination={pagination ? { clickable: true } : false}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>{slide}</SwiperSlide>
                ))}
            </Swiper>

            {navigation && (
                <>
                    {/* Custom Previous Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 border-white  rounded-br-full border-t-2 border-b-2 border-r-2 rounded-tr-full  p-3 shadow-md "
                    >
                        <GrFormPrevious size={20} className="text-white" />
                    </button>

                    {/* Custom Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 border-white rounded-bl-full border-t-2 border-b-2 border-l-2  rounded-tl-full p-3 shadow-md   "
                        aria-label="Next destination"
                    >
                        <GrFormNext size={20} className="text-white" />
                    </button>
                </>
            )}
        </div>
    );
};

export default WrapperSlider;
