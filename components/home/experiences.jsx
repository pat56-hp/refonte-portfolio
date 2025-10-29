import React from "react";
import TitleSection from "../title-section";
import { experiences } from "@/utils/data";
import ExperienceItem from "../experience-item";

export default function Experiences() {
  return (
    <section className="grid gap-y-22" id="experiences">
      <TitleSection
        title={"Mon expérience"}
        subtitle={
          "Un parcours construit autour de la passion du développement et de l’excellence technique."
        }
      />
      <div className="relative">
        {/* Ligne verticale centrale (desktop uniquement) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary rounded-md -translate-x-1/2"></div>
        {/* Ligne verticale gauche (mobile/tablet) */}
        <div className="lg:hidden absolute left-2 top-0 bottom-0 w-0.5 bg-primary"></div>

        {/* Items des expériences */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
