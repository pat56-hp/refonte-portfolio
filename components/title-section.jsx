import Image from "next/image";
import React from "react";

export default function TitleSection({ title, subtitle }) {
  return (
    <div className="grid gap-7 mx-auto lg:max-w-150 text-center relative">
      <h1 className="md:text-lg text-[30px] font-semibold">
        <span className="text-primary">{title.charAt(0)}</span>
        {title.slice(1)}
      </h1>
      <p>{subtitle}</p>
      <div className="absolute -top-5 sm:right-20 right-0 h-7 w-7">
        <Image
          alt="vector"
          src="/images/vector.svg"
          width={27}
          height={27}
          className="rounded-full transition-opacity duration-500 w-full h-full"
        />
      </div>
    </div>
  );
}
