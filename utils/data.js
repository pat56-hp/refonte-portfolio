import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Facebook } from "lucide-react";

const skills = [
  { name: "JavaScript", image: "/images/skills/javascript.svg" },
  { name: "Jquery", image: "/images/skills/jquery.svg" },
  { name: "Bootstrap", image: "/images/skills/bootstrap.svg" },
  { name: "Tailwind CSS", image: "/images/skills/tailwindcss.svg" },
  { name: "ReactJs", image: "/images/skills/reactjs.svg" },
  { name: "ReactQuery", image: "/images/skills/reactquery.svg" },
  { name: "NextJs", image: "/images/skills/nextjs.svg" },
  { name: "NodeJs", image: "/images/skills/nodejs.svg" },
  { name: "Laravel", image: "/images/skills/laravel.svg" },
  { name: "Flutter", image: "/images/skills/flutter.svg" },
  { name: "Dart", image: "/images/skills/dart.svg" },
  { name: "Electron", image: "/images/skills/electron.svg" },
  { name: "Docker", image: "/images/skills/docker.svg" },
  { name: "ViteJs", image: "/images/skills/vitejs.svg" },
  { name: "Git", image: "/images/skills/git.svg" },
  { name: "GitHub", image: "/images/skills/github.svg" },
  { name: "Figma", image: "/images/skills/figma.svg" },
  { name: "MySQL", image: "/images/skills/mysql.svg" },
  { name: "PostgreSQL", image: "/images/skills/postgresql.svg" },
  { name: "WordPress", image: "/images/skills/wordpress.svg" },
  { name: "Visual Studio Code", image: "/images/skills/vscode.svg" },
];

const experiences = [
  {
    position: "Lead Développeur",
    company: "Tinitz",
    location: "Cocody, Abidjan, Côte d'Ivoire",
    period: "2023 - Présent",
  },
  {
    position: "Consultant Développeur Freelance",
    company: "ConsultingIot",
    location: "Paris, France",
    period: "2024 - 2025",
  },
  {
    position: "Développeur Web FullStack",
    company: "Tinitz",
    location: "Cocody, Abidjan, Côte d'Ivoire",
    period: "2021 - 2023",
  },
  {
    position: "Développeur Desktop",
    company: "Direction Générale des Hydrocarbures",
    location: "Vridi, Abidjan, Côte d'Ivoire",
    period: "2019 - 2020",
  },
];

//Project Typs
const projectTypes = ["web", "ui/ux", "mobile"];

//Projects
const projects = [
  {
    label: "Refonte Hesed",
    client: "Hesed Organization",
    type: ["web", "ui/ux"],
    images: {
      web: ["/images/projects/refontehesed/capture1.png"],
      "ui/ux": ["/images/projects/refontehesed/capture1.png"],
    },
    skills: ["NextJs", "TailwindCss", "Git / Github", "Figma"],
    link: "https://refonte-hesed.vercel.app/",
    description:
      "Refonte complète de la page d’accueil du site Hesed, incluant la conception du design UI/UX et l’intégration front-end. L’objectif était d’offrir une interface plus moderne, fluide et responsive, en améliorant l’ergonomie, la hiérarchie visuelle et l’accessibilité pour une meilleure expérience utilisateur.",
  },
  {
    label: "Docswit",
    client: "Personnel",
    type: ["web"],
    images: {
      web: [
        "/images/projects/docswit/capture1.png",
        "/images/projects/docswit/capture2.png",
        "/images/projects/docswit/capture3.png",
        "/images/projects/docswit/capture4.png",
      ],
    },
    skills: [
      "NextJs",
      "TailwindCss",
      "Git / Github",
      "API Rest",
      "Python",
      "Git / Github",
      "Cursor",
    ],
    link: "https://github.com/pat56-hp/docswit",
    description:
      "Développement d’une application web permettant la conversion de documents en ligne de manière sécurisée et confidentielle. Le projet inclut la mise en place d’un système de traitement optimisé pour différents formats de fichiers, avec une attention particulière portée à la protection des données utilisateurs et à la fluidité de l’expérience de conversion.",
  },
  {
    label: "Gestion des dépenses",
    client: "Personnel",
    type: ["mobile", "ui/ux"],
    images: {
      mobile: [
        "/images/projects/depenses/capture1.png",
        "/images/projects/depenses/capture2.png",
        "/images/projects/depenses/capture3.png",
        "/images/projects/depenses/capture4.png",
        "/images/projects/depenses/capture5.png",
        "/images/projects/depenses/capture6.png",
        "/images/projects/depenses/capture7.png",
        "/images/projects/depenses/capture8.png",
      ],
    },
    skills: [
      "Laravel",
      "Flutter",
      "API Rest",
      "Firebase",
      "Git / Github",
      "Insomnia",
    ],
    link: "https://github.com/pat56-hp/depenses_app",
    description:
      "Application mobile de gestion financière développée avec Flutter offrant un tableau de bord intuitif pour le suivi des entrées et sorties. L'interface permet de filtrer les transactions par date et affiche un récapitulatif détaillé des mouvements financiers. L'API REST Laravel gère la persistance des données, l'authentification utilisateur et assure la synchronisation entre l'application mobile et la base de données.",
  },
  {
    label: "Les bons plans",
    client: "Personnel",
    type: ["web", "mobile", "ui/ux"],
    images: {
      web: [
        "/images/projects/bonplans/capture.png",
        "/images/projects/bonplans/capture0.png",
      ],
      mobile: [
        "/images/projects/bonplans/capture1.png",
        "/images/projects/bonplans/capture2.png",
        "/images/projects/bonplans/capture3.png",
        "/images/projects/bonplans/capture4.png",
        "/images/projects/bonplans/capture5.png",
        "/images/projects/bonplans/capture6.png",
        "/images/projects/bonplans/capture7.png",
        "/images/projects/bonplans/capture8.png",
        "/images/projects/bonplans/capture9.png",
        "/images/projects/bonplans/capture10.png",
        "/images/projects/bonplans/capture11.png",
      ],
      "ux/ui": [
        "/images/projects/bonplans/capture1.png",
        "/images/projects/bonplans/capture2.png",
        "/images/projects/bonplans/capture3.png",
        "/images/projects/bonplans/capture4.png",
        "/images/projects/bonplans/capture5.png",
        "/images/projects/bonplans/capture6.png",
        "/images/projects/bonplans/capture7.png",
        "/images/projects/bonplans/capture8.png",
        "/images/projects/bonplans/capture9.png",
        "/images/projects/bonplans/capture10.png",
        "/images/projects/bonplans/capture11.png",
      ],
    },
    skills: [
      "Laravel",
      "Bootstrap",
      "ReactJs",
      "Flutter",
      "API Rest",
      "Firebase",
      "Git / Github",
      "Insomnia",
    ],
    link: "https://github.com/pat56-hp/bonplan",
    description:
      "Plateforme web et mobile complète de découverte des bons plans de divertissement en Côte d'Ivoire. L'application propose un système de filtrage avancé pour trouver des lieux selon les préférences, une carte interactive affichant géolocalisation des endroits, et un tableau de bord dual pour les utilisateurs et les propriétaires d'établissements. Les utilisateurs peuvent découvrir et évaluer les lieux, tandis que les propriétaires peuvent gérer leur présence et leurs offres.",
  },
  {
    label: "Gestion des collectes & des courses",
    client: "Coditrans",
    type: ["web"],
    images: {
      web: [
        "/images/projects/coditrans/capture1.png",
        "/images/projects/coditrans/capture2.png",
        "/images/projects/coditrans/capture3.png",
      ],
    },
    skills: [
      "Laravel",
      "Bootstrap",
      "Javascript",
      "Jquery",
      "Firebase",
      "API Rest",
      "Firebase",
      "Electron",
      "Insomnia",
    ],
    link: "https://coditrans.ci/",
    description:
      "Plateforme complète de gestion logistique comprenant une application web d'administration, un site web client et deux applications mobiles (client et agents). Le système permet la gestion des demandes de courses, l'affectation des courses aux agents et le suivi des livraisons de colis. J'ai participé à l'élaboration des APIs REST, au développement du site web client et à la création de l'interface d'administration pour optimiser le processus de livraison.",
  },
  {
    label: "Presse Côte d'Ivoire",
    client: "Presse Côte d'Ivoire",
    type: ["web"],
    images: {
      web: ["/images/projects/pressecotedivoire/capture1.png"],
    },
    skills: [
      "Laravel",
      "Bootstrap",
      "Javascript",
      "Jquery",
      "API Rest",
      "Firebase",
      "CI/CD",
      "Insomnia",
    ],
    link: "https://www.pressecotedivoire.fr/",
    description:
      "Plateforme numérique dédiée à la lecture de journaux locaux et d’articles informationnels. J’ai travaillé en tant que lead développeur sur ce projet, en assurant la mise en place des systèmes CI/CD, la refonte complète du site ainsi que l’amélioration de l’expérience de lecture grâce à l’intégration de FlowPaper. J’ai également participé à la refonte complète des tableaux de bord clients et administrateurs afin d’optimiser la gestion et l’accessibilité des contenus.",
  },
  {
    label: "Gestion des devis",
    client: "Personnel",
    type: ["web"],
    images: {
      web: ["/images/projects/devis/capture1.png"],
    },
    skills: [
      "Laravel",
      "Bootstrap",
      "ReactJs",
      "API Rest",
      "Git/Github",
      "Insomnia",
    ],
    link: "https://github.com/pat56-hp/devis-app.git",
    description:
      "Application complète de gestion des devis permettant la création, la modification et le suivi des demandes clients. Le système inclut la génération automatique des devis en PDF afin de simplifier le partage et l’archivage. Développé avec React pour le frontend et Laravel pour le backend, ce projet offre une interface moderne et intuitive, ainsi qu’une architecture robuste pour une gestion efficace des devis.",
  },
  {
    label: "Mise en relation clubs-apprenants",
    client: "Hesed Organization",
    type: ["web"],
    images: {
      web: [
        "/images/projects/hesed/capture1.png",
        "/images/projects/hesed/capture2.png",
      ],
    },
    skills: ["Laravel", "Bootstrap", "Jquery", "Javascript"],
    link: "https://hesedorg.org/cgi-sys/suspendedpage.cgi",
    description:
      "Plateforme web complète de mise en relation entre clubs d'apprentissage et apprenants, développée avec Laravel. Le système propose une interface intuitive permettant aux clubs de présenter leurs programmes et aux apprenants de découvrir et s'inscrire aux formations qui correspondent à leurs besoins. L'application intègre un système de paiement (CINETPAY, PAYPAL), de gestion des inscriptions et un tableau de bord pour les administrateurs ainsi que les membres et une interface responsive optimisée pour tous les appareils.",
  },
  {
    label: "Gestion de stock, Inventaire, POS, E-commerce",
    client: "GOA Outlet",
    type: ["web"],
    images: {
      web: [
        "/images/projects/goa/capture1.png",
        "/images/projects/goa/capture2.png",
        "/images/projects/goa/capture3.png",
      ],
    },
    skills: ["Laravel", "Bootstrap", "Jquery", "Javascript"],
    link: "https://goaoutlets.com/",
    description:
      "Solution complète de gestion commerciale intégrant un système de gestion de stock et d'inventaire, un point de vente (POS) et une plateforme e-commerce avec système d'administration. L'application permet le suivi en temps réel des stocks, la gestion des inventaires, les ventes en magasin via le POS et les ventes en ligne via l'e-commerce. Le système d'administration centralisé offre un contrôle total sur les produits, les prix, les utilisateurs et les rapports de vente.",
  },
  {
    label: "Gestion du transite et comptabilité",
    client: "GTCI",
    type: ["web"],
    images: {
      web: ["/images/projects/gtci/capture1.png"],
    },
    skills: [
      "Laravel",
      "API Rest",
      "Bootstrap",
      "Jquery",
      "Javascript",
      "Bulma",
      "Insomnia",
    ],
    link: "https://gtci.ci",
    description:
      "Application métier dédiée à la gestion du transit et à la comptabilité. J’ai participé à la modélisation et à l’implémentation de la base de données, ainsi qu’au développement de plusieurs modules clés : facturation, comptabilité, planning, gestion des paiements, bulletins de salaire et gestion des employés. Le projet a été conçu pour offrir une solution robuste et adaptée aux besoins opérationnels, en assurant une meilleure traçabilité et une automatisation des processus financiers.",
  },
];

//Reseaux
const socials = {
  facebook: {
    icon: <Facebook className="w-4 h-4" />,
    link: "https://facebook.com/patrick.aime.714",
    label: "/patrick.aime.714",
  },
  twitter: {
    icon: <Twitter className="w-4 h-4" />,
    link: "https://x.com/parkeurH",
    label: "@ParkeurH",
  },
  linkedin: {
    icon: <Linkedin className="w-4 h-4" />,
    link: "https://linkedin.com/in/patrick-aime",
    label: "/in/Patrick-aime",
  },
  github: {
    icon: <Github className="w-4 h-4" />,
    link: "https://github.com/pat56-hp",
    label: "@Pat56-hp",
  },
  address: {
    icon: <i className="fi fi-rr-marker text-xs" />,
    link: "#",
    label: "Abidjan, Côte d’Ivoire",
  },
  phone: {
    icon: <i className="fi fi-rr-phone-call text-xs" />,
    link: "tel:002250708377751",
    label: "(225) 07 083 777 51",
  },
  mail: {
    icon: <Mail className="w-5 h-5" />,
    link: "mailto:patrickkouassi7@gmail.com",
    label: "patrickkouassi7@gmail.com",
  },
};

export { skills, experiences, projectTypes, projects, socials };
