import React from "react";
import TitleSection from "../title-section";
import ServiceItem from "../service-item";

export default function Services() {
  return (
    <section className="grid gap-y-22" id="services">
      <TitleSection
        title={"Mes services"}
        subtitle={"Des services pensés pour allier performance et design"}
      />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
        <ServiceItem
          title={"Développement web & mobile"}
          description={
            "Des applications modernes, performantes et sur mesure pensées pour offrir une expérience fluide et intuitive."
          }
          icon={"fi fi-rr-laptop"}
        />
        <ServiceItem
          title={"Déploiement & intégration"}
          description={
            "Mise en ligne professionnelle sur Laravel Cloud, Vercel et autres plateformes. Automatisation, sécurité et performance au cœur de chaque projet."
          }
          icon={"fi fi-rs-cloud"}
        />
        <ServiceItem
          title={"Création de solutions SaaS"}
          description={
            "De l’idée au produit fini : je t’accompagne dans la conception, le développement et la mise sur le marché de ton SaaS ou de ton MVP."
          }
          icon={"fi fi-rs-rocket"}
        />
      </div>
    </section>
  );
}
