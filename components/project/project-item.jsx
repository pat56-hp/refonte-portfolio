"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import Button from "../ui/button";
import Link from "next/link";
import ModalImg from "./modal-img";

export default function ProjectItem({ project, lineDesc = 5 }) {
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState();
  const [types, setTypes] = useState();
  const [modalImages, setModalImages] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  //Recuperation de la premiere image du projet
  const handleImage = (project) => {
    const type = project.type.slice(0, 1);
    const image = project.images[type][0]; //La premiere image
    setImage(image);
    setTypes(project.type.join(", "));
    setLoading(false);
  };

  // Fonction pour ouvrir le modal avec les images d'un projet
  const handleImageClick = (images) => {
    setModalImages(images);
    setModalOpen(true);
  };

  //Affichage de la 1ere image de chaque projet
  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleImage(project);
    }, 800);

    return () => clearTimeout(timeOut);
  }, [project]);

  return (
    <>
      <div className="flex flex-col flex-shrink md:flex-row md:max-h-70 p-4 md:gap-11 gap-5 bg-secondary-foreground rounded-lg border border-primary transition-transition duration-500 object-cover hover:scale-101 hover:shadow-md hover:shadow-secondary">
        <div className="group lg:w-95 h-55 md:h-full w-full rounded-md overflow-hidden relative hover:cursor-pointer mx-auto md:mx-0">
          {loading ? (
            <Skeleton className="w-full h-full object-cover rounded-md hover:cursor-progress" />
          ) : (
            <>
              <Image
                onClick={() => handleImageClick(project.images)}
                alt="vector"
                src={image}
                width={380}
                height={252}
                className={`block rounded-md z-10 transition-transform duration-500 w-full h-full object-cover group-hover:scale-105 ${
                  loading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={() => setLoading(false)}
              />
              <div className="absolute top-2 left-2 flex gap-2">
                {project.type.map((type, index) => (
                  <div
                    key={index}
                    className="font-bold z-40 rounded-md px-5 py-1 bg-secondary/70 border border-primary text-center uppercase text-xs"
                  >
                    {type}
                  </div>
                ))}
              </div>
              {/* <div className="absolute top-2 right-2 flex gap-2 font-bold z-40 rounded-md px-5 py-1 bg-foreground/70 text-white border border-primary text-center uppercase text-xs">
                <i className="fi fi-rr-eye"></i>
              </div> */}
            </>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-y-5 overflow-auto">
          <Link
            href={project.link}
            target="_blank"
            className="text-foreground md:hidden"
          >
            <Button className="flex gap-4 !px-4 !py-3 rounded-sm font-bold justify-center">
              <span>Visiter</span>
              <i className="fi fi-rr-arrow-up-right"></i>
            </Button>
          </Link>
          <div className="flex flex-col md:flex-row md:items-start gap-5 justify-between">
            <div className="grid gap-3">
              <Link href={project.link} target="_blank" className="flex gap-2">
                <i className="fi fi-rr-user"></i>
                <span className="underline font-bold">{project.client}</span>
              </Link>
              <h5 className="font-semibold uppercase text-md">
                {project.label}
              </h5>
            </div>
            <Link
              href={project.link}
              target="_blank"
              className="text-foreground hidden md:inline"
            >
              <Button className="flex gap-4 !px-4 !py-3 rounded-sm font-bold">
                <span>Visiter</span>
                <i className="fi fi-rr-arrow-up-right"></i>
              </Button>
            </Link>
          </div>
          <p
            className={`line-clamp-4 md:line-clamp-${lineDesc} text-xs transition-all duration-300 hover:line-clamp-none`}
          >
            {project.description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {project.skills.map((skill, index) => (
              <Button
                key={index}
                className="!py-1 text-xs !border-0 hover:!bg-secondary hover:!cursor-default"
              >
                {skill}
              </Button>
            ))}
          </div>
        </div>
      </div>
      {/* Modal Section */}
      {modalOpen && (
        <ModalImg
          modalRef={modalRef}
          onSetModalOpen={setModalOpen}
          images={modalImages}
        />
      )}
    </>
  );
}
