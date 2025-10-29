"use client";

import React, { useEffect, useState } from "react";
import TitleSection from "../title-section";
import ProjectItem from "../project/project-item";
import Button from "../ui/button";
import { projects as projectDatas } from "@/utils/data";
import ProjectSekeleton from "../project/project-sekeleton";
import Link from "next/link";

export default function Projects() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timeOut = setTimeout(() => {
      const projects = projectDatas.slice(0, 4);
      setProjects(projects);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <section className="grid gap-y-22" id="project">
      <TitleSection
        title={"Mes projets"}
        subtitle={"Des projets conçus avec passion, rigueur et sens du détail."}
      />
      {loading ? (
        <ProjectSekeleton />
      ) : (
        <>
          <div className="grid gap-5 flex-1">
            {projects.map((project, index) => (
              <ProjectItem project={project} key={index} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/projects" className="hover:!text-foreground">
              <Button className="font-bold flex gap-4">
                Autres projets
                <i className="fi fi-rr-arrow-up-right"></i>
              </Button>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
