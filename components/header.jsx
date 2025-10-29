"use client";

import { useEffect, useState } from "react";
import Button from "./ui/button";
import routes from "@/utils/routes";
import { usePathname, useRouter } from "next/navigation";
import MobileMenu from "./mobile-menu";
import Link from "next/link";
export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("/");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gestion des sections internes (#about, etc.)
  useEffect(() => {
    if (pathname !== "/") return; // pas d'observation sur d'autres pages

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4, // 0.4 = 40% de la section visible avant activation
        rootMargin: "-50px 0px -50% 0px", // pour ajuster le déclenchement
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [pathname]);

  // Gestion des vraies routes (/projects, /)
  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  //Gestion du scroll pour fixer le header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Gestion de l'ouverture du menu version mobile
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Gestion du clic manuel (pour naviguer vers ancres)
  const handleClick = (path) => {
    if (path.startsWith("#")) {
      if (pathname === "/") {
        document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
        setActive(path);
      } else {
        router.push(`/${path}`);
      }
    } else {
      router.push(path);
    }
  };

  return (
    <header className="sticky lg:top-5 top-0 left-0 z-50 w-full transition-all duration-300">
      <div className="hidden lg:flex justify-center items-center">
        <div
          className={`lg:flex items-center ${
            scrolled
              ? "justify-center !gap-10 px-15 py-2 bg-foreground text-white border border-primary rounded-full shadow-lg"
              : "justify-between flex-1"
          } gap-2`}
        >
          <h1
            className={`font-kavoon ${
              scrolled ? "text-[32px]" : "text-lg"
            } font-bold`}
          >
            <Link href="/" className={!scrolled ? "hover:text-foreground" : ""}>
              Patrick Aimé
            </Link>
          </h1>
          <nav className="flex items-center">
            <ul
              className={`list-none flex ${
                scrolled ? "xl:gap-7 gap-3" : "xl:gap-10 gap-5"
              }`}
            >
              {routes.map((route, index) => (
                <li key={index}>
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={(e) => {
                      if (route.path.startsWith("#")) {
                        e.preventDefault();
                        handleClick(route.path);
                      }
                    }}
                    className={`hover:underline hover:font-bold transition-colors duration-75 ${
                      active === route.path ? "active" : ""
                    }`}
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-2 items-center">
            {/* <Button
              className={`!p-0 ${
                scrolled
                  ? "h-8 w-8 !bg-transparent hover:!bg-primary hover:!text-foreground"
                  : "h-10 w-10"
              }`}
              rounded="rounded-full"
            >
              <i className="fi fi-rr-moon text-sm"></i>
            </Button> */}
            <Button
              className={`flex items-center gap-3 flex-1 ${
                scrolled
                  ? "!py-2 !px-3 !bg-primary hover:!bg-primary !text-foreground"
                  : "bg-transparent"
              }`}
              onClick={() => handleClick("#contact")}
            >
              <i className="fi fi-rr-paper-plane text-sm"></i>
              <span>Me Contacter</span>
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden flex justify-between items-center ${
          scrolled
            ? "py-2 flex-1 px-5 bg-foreground text-white border border-primary rounded-full shadow-lg"
            : ""
        }`}
      >
        <h1
          className={`font-kavoon text-[30px] font-bold ${
            scrolled ? "text-md" : ""
          }`}
        >
          Patrick Aimé
        </h1>
        {/* Bouton menu mobile visible uniquement sur mobile */}
        <button
          className="menu-mobile text-md p-2 rounded-sm hover:bg-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-none leading-none"
          aria-label="Ouvrir le menu"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <i className="fi fi-br-menu-burger w-7 h-7"></i>
        </button>
      </div>

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        onOpenChange={setIsMobileMenuOpen}
        onHandleClick={handleClick}
        active={active}
      />
    </header>
  );
}
