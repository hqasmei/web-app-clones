"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { testimonials } from "@/utils/constants";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Testimonials = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: false,
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <section className="bg-gray-200 py-24">
      <div className="relative mx-auto max-w-7xl">
        <Slider {...settings} ref={sliderRef} className="relative">
          {testimonials.map((testimonial, idx) => (
            <div key={idx}>
              <div className="flex flex-row items-center space-x-10 justify-center">
                <div className="flex w-1/2 items-center justify-center">
                  <div className="relative pb-10 pr-10">
                    <div className="absolute inset-0 left-20 top-20 z-0 rounded-xl border-2 border-black" />
                    <Image
                      src={testimonial.image}
                      alt=""
                      width={400}
                      height={400}
                      className="relative z-50 rounded-xl"
                    />
                  </div>
                </div>

                <div className="flex w-1/2 flex-col space-y-5">
                  <span className="text-6xl font-bold leading-[4rem]">
                    {testimonial.quote}
                  </span>
                  <span className="pr-12 text-xl font-medium leading-9 text-gray-600">
                    {testimonial.description}
                  </span>
                  <div className="flex flex-row items-center space-x-3">
                    <span className="h-1 w-10 bg-black"></span>
                    <span className="text-sm font-bold">
                      {testimonial.name.toUpperCase()},{" "}
                      {testimonial.company.toUpperCase()} <br />{" "}
                      {testimonial.year.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-0 right-0 flex flex-col space-y-2">
          <button
            className="rounded-full bg-[#F9C303] p-4"
            onClick={handleNextSlide}
          >
            <FaLongArrowAltRight size={30} />
          </button>
          <button
            className="rounded-full bg-[#F9C303] p-4"
            onClick={handlePrevSlide}
          >
            <FaLongArrowAltLeft size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
