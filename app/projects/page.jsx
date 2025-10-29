"use client";

import ProjectItem from "@/components/project/project-item";
import ProjectSekeleton from "@/components/project/project-sekeleton";
import TitleSection from "@/components/title-section";
import Button from "@/components/ui/button";
import { projects as projectDatas, projectTypes } from "@/utils/data";
import React, { useEffect, useState } from "react";

export default function ProjectPage() {
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false); // loading pour "Charger plus" ou au clique de la categorie
  const [typeSelected, setTypeSelected] = useState("all");
  const [projects, setProjects] = useState([]);
  const [offset, setOffset] = useState(0);

  const PAGE_SIZE = 4;

  const getFilteredProjects = (type) =>
    type === "all"
      ? projectDatas
      : projectDatas.filter((project) =>
          // adapte si la propriété s'appelle `type` (string) ou `types` (array)
          Array.isArray(project.type)
            ? project.type.includes(type)
            : String(project.type) === type
        );

  //Chargement des datas selon le clique (Menu category ou afficher plus)
  const handleLoadingProjects = (type = typeSelected, reset = false) => {
    setLoader(true);
    setLoading(reset);

    setTimeout(() => {
      const filtered = getFilteredProjects(type);
      const start = reset ? 0 : offset;
      const nextSlice = filtered.slice(start, start + PAGE_SIZE);

      setProjects((prev) => (reset ? nextSlice : [...prev, ...nextSlice]));
      setOffset((prev) => (reset ? PAGE_SIZE : prev + PAGE_SIZE));
      setTypeSelected(type);
      setLoader(false);
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      // loading au montage de la page
      const initial = getFilteredProjects("all").slice(0, PAGE_SIZE);
      setProjects(initial);
      setOffset(PAGE_SIZE);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // compute whether there are more items to load for the current selection
  const totalForCurrent = getFilteredProjects(typeSelected).length;
  const hasMore = projects.length < totalForCurrent;

  return (
    <div className="grid gap-y-40 md:py-30 py-20">
      <div className="grid gap-y-22">
        <TitleSection
          title={"Mes projets"}
          subtitle={
            "Des projets conçus avec passion, rigueur et sens du détail."
          }
        />
        <div className="flex lg:flex-row flex-col gap-10 items-start">
          <div className="lg:sticky top-25 flex flex-col lg:w-60 w-full p-4 gap-4 bg-secondary-foreground rounded-md border border-primary">
            <div className="flex flex-row gap-4 items-center">
              <h4 className="font-semibold">Catégories</h4>
              <hr className="bg-primary h-1 w-20" />
            </div>
            <ul className="flex flex-col list-none bg-secondary/50 px-4 rounded-md divide-y divide-secondary-foreground ">
              <li
                onClick={() => {
                  // reset results when selecting a new category
                  setOffset(0);
                  handleLoadingProjects("all", true);
                }}
                className={`${
                  typeSelected === "all" ? "text-primary font-bold" : ""
                } transition-colors duration-150 hover:text-primary hover:font-bold hover:cursor-pointer py-2`}
              >
                Tout
              </li>
              {projectTypes.map((type, index) => (
                <li
                  onClick={() => {
                    setOffset(0);
                    handleLoadingProjects(type, true);
                  }}
                  key={type + "-" + index}
                  className={`${
                    type === typeSelected ? "text-primary font-bold" : ""
                  } transition-colors duration-150 hover:text-primary hover:font-bold hover:cursor-pointer first-letter:uppercase py-2`}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-y-20 flex-1">
            {loading ? (
              <ProjectSekeleton />
            ) : (
              <>
                <div className="grid gap-5 flex-1">
                  {projects.map((project, index) => (
                    // préfère une clé stable si tu as `project.id`
                    <ProjectItem
                      project={project}
                      lineDesc={4}
                      key={project.id ?? index}
                    />
                  ))}
                  {loader && <ProjectSekeleton />}
                </div>

                {!loader && hasMore && (
                  <div className="flex justify-center">
                    <Button
                      onClick={() => handleLoadingProjects(typeSelected, false)}
                      className="font-bold flex gap-4"
                    >
                      Charger plus
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
