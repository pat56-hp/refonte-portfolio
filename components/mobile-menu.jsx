import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
  DrawerTitle,
} from "@/components/ui/drawer";
import Link from "next/link";
import Button from "./ui/button";
import routes from "@/utils/routes";

export default function MobileMenu({
  isMobileMenuOpen,
  onOpenChange,
  onHandleClick,
  active,
}) {
  return (
    <Drawer open={isMobileMenuOpen} onOpenChange={onOpenChange}>
      <DrawerContent
        aria-label="Menu mobile"
        className="md:hidden p-0 bg-secondary-foreground h-[90vh] max-h-[600px] flex flex-col rounded-t-2xl"
      >
        <DrawerTitle className="sr-only">Title</DrawerTitle>
        <DrawerHeader className="flex flex-row items-center justify-between border-b px-4 py-3">
          <span className="text-lg font-bold">Patrick Aimé</span>
          <DrawerClose asChild>
            <button
              className="p-2 rounded-full hover:bg-secondary"
              aria-label="Fermer le menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </DrawerClose>
        </DrawerHeader>
        {/* Corps scrollable */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          {/* Lien hors groupe */}
          <Link
            href="/"
            className={`px-6 py-4 font-medium transition-colors text-left rounded-lg hover:bg-secondary/20 hover:text-primary hover:font-bold ${
              active === "/" ? "!text-primary bg-secondary/20" : ""
            }`}
            onClick={() => onOpenChange(false)}
          >
            Accueil
          </Link>
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.path}
              onClick={(e) => {
                if (route.path.startsWith("#")) {
                  e.preventDefault();
                  onHandleClick(route.path);
                }
                onOpenChange(false);
              }}
              className={`px-6 py-4 font-medium transition-colors text-left rounded-lg hover:bg-secondary/20 hover:text-primary hover:font-bold ${
                active === route.path ? "!text-primary bg-secondary/20" : ""
              }`}
            >
              {route.name}
            </Link>
          ))}
        </div>
        {/* Bouton Support sticky en bas */}
        <div className="sticky bottom-0 left-0 right-0 bg-secondary-foreground px-4 py-4 shadow-[0_-2px_8px_0_rgba(0,0,0,0.04)] z-10">
          <Button
            className={`w-full flex justify-center gap-3 !bg-primary hover:!bg-primary !text-foreground`}
            onClick={() => {
              onHandleClick("#contact");
              onOpenChange(false);
            }}
          >
            <i className="fi fi-rr-paper-plane text-sm"></i>
            <span>Contactez moi</span>
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
