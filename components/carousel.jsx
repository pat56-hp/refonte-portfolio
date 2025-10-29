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
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // <= 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // <= 768px (tablettes)
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // <= 480px (mobiles)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden mx-auto py-10 z-30">
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i} className="flex justify-center focus:outline-none">
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={image.image}
                    alt={image.name}
                    width={64}
                    height={64}
                    className="object-contain w-16 h-16 hover:cursor-pointer"
                  />
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
