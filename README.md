# Refonte Portfolio – Patrick Aimé Kouassi

Bienvenue sur le portfolio de Patrick Aimé Kouassi, développeur web et mobile.

Ce projet met en avant mes compétences, expériences et réalisations à travers une interface moderne, responsive et animée, développée avec Next.js, React, TypeScript et Tailwind CSS.

## ✨ Fonctionnalités principales

- **Navigation fluide** avec menu fixe et surbrillance automatique de la section active
- **Sections modulaires** : À propos, Services, Projets, Expériences, Contact
- **Animations et transitions** pour une expérience utilisateur dynamique
- **Responsive** : design adapté à tous les écrans
- **Mode sombre/clair** (En cours)

## 🛠️ Technologies utilisées

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flaticon](https://www.flaticon.com/fr/)
- [slick-carousel](https://kenwheeler.github.io/slick/) (pour le carousel des stacks)
- [resend](https://resend.com/) (pour le carousel des stacks)
- [react-hot-toast](https://react-hot-toast.com/) (pour les alerts)

## 📁 Structure du projet

```
├── app/
│   ├── globals.css           # Styles globaux
│   ├── layout.tsx            # Layout principal
│   ├── page.tsx              # Page d'acceuil'
│   ├── projects/             # Page des projets
│   └── api/                  # Fonction api pour l'envoi de mail
├── components/               # Composants réutilisables
│   ├── home/                 # Composants de la Home page (About, Services, Projects, Experience, Contactr)
│   └── ui/                   # Composants UI réutilisables
├── hooks/                    # Hooks personnalisés
├── lib/
│   └── utils.ts              # Fonctions utilitaires
├── public/
│   └── images/               # Images du portfolio et des projets
├── utils/
│   ├── data.js               # Données statics
│   └── routes.js             # Routes
├── package.json              # Dépendances et scripts
├── tailwind.config.ts        # Configuration Tailwind
├── tsconfig.json             # Configuration TypeScript
└── ...
```

## 🚀 Installation & Lancement

1. **Cloner le repo**
   ```bash
   git clone https://github.com/pat56-hp/refonte-portfolio.git
   cd refonte-portfolio
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   ```
3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
4. **Accéder à l'application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## ⚙️ Personnalisation

- Modifiez les données dans `utils/data.js` pour adapter le contenu (projets, skills, about, etc.).
- Les images de projets sont à placer dans `public/images/`.

## 🖥️ Déploiement

Le projet est prêt pour un déploiement sur [Vercel](https://vercel.com/) ou toute plateforme compatible Next.js.

1. Poussez votre code sur GitHub
2. Connectez le repo à Vercel
3. Déployez en un clic

## 👤 Auteur

**Patrick Aimé Kouassi**  
Développeur Web & Mobile  
[LinkedIn](https://linkedin.com/in/Patrick-aime)  
[Email](mailto:patrickkouassi7@gmail.com)

---

> Ce portfolio est open source. N'hésitez pas à le forker, l'adapter ou me contacter pour toute collaboration !
