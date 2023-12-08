"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestomonialsItem from "./TestomonialsItem";


export default function Testimonials() {
    const [myIndex, setMyIndex] = useState(0);
    const sliderRef = useRef();
  
    useEffect(() => {
      sliderRef.current.swiper.slideTo(myIndex);
    }, [myIndex]);
    
    return (
    <div>       
        <div className="">           
            <Swiper
                ref={sliderRef}
                breakpoints={{
                    1024: { slidesPerView: 3},
                }}
                slidesPerView={1}                
                spaceBetween={20}                
                pagination={true} 
                modules={[Pagination]} 
                className="h-[450px] w-full bg-transparent" 
                style={{
                    "--swiper-pagination-color": "#FFBA08",
                    "--swiper-pagination-loadPrevNext-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    "--swiper-pagination-bullet-vertical-gap": "6px",                    
                    "--swiper-pagination-top": "420px",
                  }}               
            >        
               
                <SwiperSlide >
                    <TestomonialsItem name="Jane Doe" designation="CEO, GBC" img="/images/testimonials/user1.png" text="Donec augue lorem, mollis quis dui sed, dictum vehicula turpis. Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi. Nullam posuere nec ex in malesuada. Praesent ligula ante, accumsan eget ornare vel." />
                </SwiperSlide>
                <SwiperSlide >
                    <TestomonialsItem name="Bojan Sandic" designation="CEO, GBC" img="/images/testimonials/user1.png" text="Donec augue lorem, mollis quis dui sed, dictum vehicula turpis. Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi. Nullam posuere nec ex in malesuada. Praesent ligula ante, accumsan eget ornare vel." />
                </SwiperSlide>
                <SwiperSlide >
                    <TestomonialsItem name="Jane Doe" designation="CEO, Dayim Marketing" img="/images/testimonials/user1.png" text="Donec augue lorem, mollis quis dui sed, dictum vehicula turpis. Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi. Nullam posuere nec ex in malesuada. Praesent ligula ante, accumsan eget ornare vel." />
                </SwiperSlide>
                <SwiperSlide >
                    <TestomonialsItem name="Jane Doe" designation="CEO, GBC" img="/images/testimonials/user1.png" text="Donec augue lorem, mollis quis dui sed, dictum vehicula turpis. Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi. Nullam posuere nec ex in malesuada. Praesent ligula ante, accumsan eget ornare vel." />
                </SwiperSlide>


                

            </Swiper>
        </div>
    </div>
  );
}