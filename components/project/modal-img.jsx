import React, { useState } from "react";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

export default function ModalImg({ modalRef, onSetModalOpen, images }) {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  //Fusion de toutes les images
  const allImages = Object.values(images).flat();

  //Image suivante
  const nextImage = () => {
    setCurrentIndex((prev) => {
      const total = allImages.length;
      return (prev + 1) % total;
    });
  };

  //Image precedente
  const prevImage = () => {
    setCurrentIndex((prev) => {
      const total = allImages.length;
      return (prev - 1 + total) % total;
    });
  };

  return (
    <div
      className="fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black/80"
      ref={modalRef}
      tabIndex="-1"
      aria-modal="true"
      role="dialog"
    >
      <button
        onClick={() => onSetModalOpen(false)}
        className="absolute top-4 right-10 bg-background/80 transition-colors duration-150 hover:cursor-pointer hover:bg-primary rounded-full p-2 "
        aria-label="Fermer"
        type="button"
      >
        <i className="fi fi-rr-cross w-6 h-6 text-foreground leading-none flex items-center justify-center" />
      </button>
      {allImages.length > 1 && (
        <>
          <button
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-background/80 transition-colors duration-150 hover:cursor-pointer hover:bg-primary rounded-full p-2"
            aria-label="Image précédente"
            type="button"
            onClick={prevImage}
          >
            <i className="fi fi-rr-arrow-left w-8 h-8 text-foreground leading-none flex items-center justify-center" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-background/80 transition-colors duration-150 hover:cursor-pointer hover:bg-primary rounded-full p-2"
            aria-label="Image suivante"
            type="button"
          >
            <i className="fi fi-rr-arrow-right w-8 h-8 text-foreground leading-none flex items-center justify-center" />
          </button>
        </>
      )}
      {loading && (
        <Skeleton className=" max-h-[80vh] max-w-[80vh] w-full h-full object-cover rounded-md hover:cursor-progress" />
      )}

      <Image
        src={allImages[currentIndex]}
        alt={`Image du projet agrandie ${currentIndex + 1}`}
        aria-label={`Image du projet agrandie ${currentIndex + 1}`}
        width={900}
        height={700}
        className={`max-h-[80vh] w-auto rounded-lg shadow-lg ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
