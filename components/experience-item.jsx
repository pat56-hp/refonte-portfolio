"use client";

import React from "react";

export default function ExperienceItem({
  position,
  company,
  location,
  period,
  index,
}) {
  return (
    <div
      className={`relative flex items-center mb-8 last:mb-0 ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >
      {index % 2 === 0 ? (
        <div className="hidden lg:contents">
          {/* Carte à gauche */}
          <div className="w-92 gap-y-2 grid bg-secondary border border-primary rounded-xl p-3 hover:shadow-lg hover:shadow-secondary transition-shadow">
            <h5 className="font-semibold">{position}</h5>
            <h6 className="font-medium">{company}</h6>
            <div className="flex gap-2 leading-none">
              <i className="fi fi-rr-marker text-xs"></i>
              <span>{location}</span>
            </div>
          </div>
          {/* Ligne pointillée */}
          <div className="w-40 flex items-center">
            <div className="w-full h-0.5 border-t-2 border-dashed border-primary"></div>
          </div>
          {/* Période à droite */}
          <div className="w-50">
            <div className="w-full text-center inline-block bg-secondary-foreground border border-primary rounded-md px-6 py-2 font-semibold">
              {period}
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden lg:contents">
          {/* Période à gauche */}
          <div className="w-50">
            <div className="w-full text-center inline-block bg-secondary-foreground border border-primary rounded-md px-6 py-2 font-semibold">
              {period}
            </div>
          </div>
          {/* Ligne pointillée */}
          <div className="w-40 flex items-center">
            <div className="w-full h-0.5 border-t-2 border-dashed border-primary"></div>
          </div>
          {/* Carte à droite */}
          <div className="w-92 gap-y-2 grid bg-secondary border border-primary rounded-xl p-3 hover:shadow-lg hover:shadow-secondary transition-shadow">
            <h5 className="font-semibold">{position}</h5>
            <h6 className="font-medium">{company}</h6>
            <div className="flex gap-2 leading-none">
              <i className="fi fi-rr-marker text-xs"></i>
              <span>{location}</span>
            </div>
          </div>
        </div>
      )}

      {/* Version Mobile/Tablet - Tout à droite */}
      <div className="lg:hidden flex gap-3 w-full">
        {/* Point de la timeline */}
        <div className="flex flex-col mt-2">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
        </div>

        {/* Contenu */}
        <div className="flex-1">
          {/* Période */}
          <div className="w-50 text-center inline-block bg-secondary-foreground border border-primary rounded-lg px-4 py-1.5 font-semibold text-sm shadow-sm mb-3">
            {period}
          </div>

          {/* Carte */}
          <div className="grid gap-y-2 bg-secondary border border-primary rounded-md p-3 hover:shadow-lg hover:shadow-secondary transition-shadow">
            <h5 className="font-semibold">{position}</h5>
            <h6 className="font-medium">{company}</h6>
            <div className="flex gap-2 leading-none">
              <i className="fi fi-rr-marker text-xs"></i>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
