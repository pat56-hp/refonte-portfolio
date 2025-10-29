"use client";

import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Experiences from "@/components/home/experiences";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const pathname = usePathname();
  useEffect(() => {
    //Si l'url contient une ancre, on scroll vers cette ancre
    if (typeof window !== "undefined" && window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [pathname]);
  return (
    <div className="grid gap-y-40 md:py-30 py-20">
      <About />
      <Services />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
}
