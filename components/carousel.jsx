"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function Carousel({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    adaptiveHeight: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden relative w-full max-w-full py-10 z-30">
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i} className="flex justify-center">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex justify-center max-w-[100px]">
                    <Image
                      src={image.image}
                      alt={image.name}
                      width={64}
                      height={64}
                      className="object-contain w-16 h-16 hover:cursor-pointer"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm font-medium">{image.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </Slider>
    </div>
  );
}
