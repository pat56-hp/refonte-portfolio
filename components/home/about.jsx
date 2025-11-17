"use client";

import React, { useState } from "react";
import RsItem from "../rs-item";
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import Button from "../ui/button";
import Carousel from "../carousel";
import { skills, socials } from "@/utils/data";
import Link from "next/link";

const About = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section className="grid sm:gap-y-30 gap-y-10 relative" id="about">
      <div className="relative flex flex-col md:flex-row justify-center md:gap-15 lg:gap-20 gap-10 lg:w-220 mx-auto z-30">
        <div className="flex flex-col items-center gap-y-5 z-30">
          <div className="rounded-full border border-primary h-60 w-60 p-2 overflow-hidden">
            {loading && (
              <Skeleton className="w-full h-full object-cover rounded-full" />
            )}
            <Image
              alt="Patrick Aimé Kouassi"
              src="/images/profile.jpeg"
              width={260}
              height={260}
              className={`rounded-full transition-opacity duration-500 w-full h-full object-cover ${
                loading ? "opacity-0" : "opacity-100"
              }`}
              onLoad={() => setLoading(false)}
            />
          </div>
          <div className="flex gap-4">
            <RsItem href={socials.facebook.link} icon={socials.facebook.icon} />
            <RsItem href={socials.linkedin.link} icon={socials.linkedin.icon} />
            <RsItem href={socials.mail.link} icon={socials.mail.icon} />
            <RsItem href={socials.phone.link} icon={socials.phone.icon} />
          </div>
          <div className="flex gap-2 leading-none">
            <i className="fi fi-rr-marker text-xs"></i>
            Abidjan, Côte d'Ivoire
          </div>
        </div>
        <div className="flex flex-col gap-8 md:text-left text-center relative z-30">
          <div className="md:text-lg text-[30px]">
            Je suis <span className="font-bold">Patrick Aimé</span>, Développeur
            Web & Mobile
          </div>
          <p>
            En tant que développeur web orienté back-end avec une ouverture sur
            le front-end et le mobile, je suis passionné par les technologies et
            l'innovation. Curieux, adaptable et rigoureux, je mets mes
            compétences au service de projets ambitieux, en alliant performance
            technique et esprit d'équipe.
          </p>
          <div className="md:mx-0 mx-auto">
            <Link
              href="https://calendly.com/patrickkouassi7/30min"
              target="_blank"
              className="hover:!bg-transparent hover:!text-foreground !inline-block"
            >
              <Button className="flex gap-3 ">
                <i className="fi fi-rr-comment"></i>
                Discutons de votre projet
              </Button>
            </Link>
          </div>
          <div className="absolute -top-8 right-0 h-7 w-7">
            <Image
              alt="vector"
              src="/images/vector.svg"
              width={27}
              height={27}
              className="rounded-full transition-opacity duration-500 w-full h-full"
            />
          </div>
        </div>
        {/* <div className="absolute inset-0 md:top-0 top-70 bg-[radial-gradient(ellipse_at_center,#EFF7E8FF_20%,transparent_80%)]"></div> */}
      </div>

      <div className="md:absolute rounded-full z-10 -top-10 h-full w-full bg-[url('/images/bg/bg2.jpg')] bg-blend-lighten bg-[rgba(255,255,255,0.90)] bg-cover bg-no-repeat"></div>
      <Carousel images={skills} />
    </section>
  );
};

export default About;
