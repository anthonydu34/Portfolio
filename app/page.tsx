import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Anthony Arozarena
                </h1>
                <h2 className="text-xl text-slate-300">
                  Développeur Web Freelance
                </h2>
                <p className="max-w-[600px] text-slate-300 md:text-xl">
                  Étudiant en L2 Informatique passionné par le développement web
                  et la création d'expériences numériques innovantes.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-teal-500 hover:bg-teal-600"
                  >
                    <Link href="#contact">Me contacter</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-slate-500   border-slate-300 text-white hover:bg-slate-700"
                  >
                    <Link href="#projects">Voir mes projets</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-teal-500">
                  <Image
                    alt="Anthony Arozarena"
                    className="object-cover"
                    fill
                    src="/552.jpg?height=350&width=350"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  À propos de moi
                </h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Développeur web freelance et étudiant en deuxième année
                  d'informatique, je combine mes études et ma passion pour créer
                  des solutions web sur mesure.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-8 text-center sm:text-left">
              <p className="text-slate-700">
                Bonjour ! Je suis Anthony, développeur web freelance basé à
                Avignon. Actuellement en L2 Informatique au CERI, je me
                spécialise dans la création de sites web et d'applications
                modernes et performantes.
              </p>
              <p className="text-slate-700">
                Ma double casquette d'étudiant et de freelance me permet d'être
                constamment à jour sur les dernières technologies et
                méthodologies du développement web, tout en acquérant une
                expérience pratique précieuse auprès de clients variés.
              </p>
              <p className="text-slate-700">
                Je suis particulièrement passionné par le développement
                front-end et la création d'interfaces utilisateur intuitives et
                accessibles. Mon objectif est de transformer vos idées en
                réalités numériques fonctionnelles et esthétiques.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-slate-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Mes Projets
                </h2>
                <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Découvrez une sélection de mes réalisations récentes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Site Vitrine Responsive"
                description="Site de vente en ligne développé avec React et css"
                tags={["React", "css"]}
                imageSrc="/ecomerce1.PNG?height=300&width=400"
                link="#"
                projectImages={[
                  {
                    src: "/ecomerce1.PNG?height=600&width=800",
                    alt: "Image 1 - Page d'accueil",
                  },
                  {
                    src: "/ecomerce2.PNG?height=600&width=800",
                    alt: "Image 2 - Page produit",
                  },
                  {
                    src: "/ecomerce3.PNG?height=600&width=800",
                    alt: "Image 3 - Panier",
                  },
                  {
                    src: "/ecomerce4.PNG?height=600&width=800",
                    alt: "Image 4 - Panier",
                  },
                  {
                    src: "/ecomerce5.PNG?height=600&width=800",
                    alt: "Image 5 - Panier",
                  },
                ]}
                longDescription="Ce projet est un site vitrine responsive développé avec React et CSS. Il présente une interface utilisateur moderne et intuitive, permettant aux visiteurs de naviguer facilement à travers les différentes sections du site. Le design est entièrement adaptable, garantissant une expérience optimale sur tous les appareils, qu'il s'agisse de smartphones, de tablettes ou d'ordinateurs de bureau."
              />
              <ProjectCard
                title="Application Backend e-commerce"
                description="API RESTful pour la gestion des produits, utilisateurs et commandes."
                tags={["Node.js", "Express", "MongoDB"]}
                imageSrc="/fullstack1.png?height=300&width=400"
                link="#"
                projectImages={[
                  {
                    src: "/fullstack1.png?height=600&width=800",
                    alt: "Image 1 - Dashboard",
                  },
                  {
                    src: "/fullstack2.png?height=600&width=800",
                    alt: "Image 2 - Gestion clients",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 3 - Statistiques",
                  },
                ]}
                longDescription=" Cette application backend e-commerce est une API RESTful développée avec Node.js et Express. Elle permet la gestion complète des produits, utilisateurs et commandes. Grâce à une architecture modulaire, elle offre des endpoints sécurisés pour les opérations CRUD, ainsi qu'une intégration avec MongoDB pour le stockage des données. Le système d'authentification JWT garantit la sécurité des transactions et la protection des données sensibles."
              />
              <ProjectCard
                title="Portfolio Photographe"
                description="Site vitrine pour un photographe professionnel avec galerie dynamique et système de réservation de séances."
                tags={["Next.js", "Prisma", "PostgreSQL"]}
                imageSrc="/placeholder.svg?height=300&width=400"
                link="#"
                projectImages={[
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 1 - Galerie",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 2 - Page de réservation",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 3 - Portfolio",
                  },
                ]}
                longDescription="Ce portfolio élégant met en valeur le travail d'un photographe professionnel grâce à une galerie dynamique et responsive. Développé avec Next.js pour des performances optimales, il intègre un système de réservation de séances photo avec calendrier interactif et paiement d'acompte. Les visiteurs peuvent filtrer les photos par catégorie et commander des tirages directement depuis le site."
              />
              <ProjectCard
                title="Blog Tech"
                description="Plateforme de blog avec système de gestion de contenu personnalisé et fonctionnalités de commentaires."
                tags={["WordPress", "PHP", "MySQL", "JavaScript"]}
                imageSrc="/placeholder.svg?height=300&width=400"
                link="#"
                projectImages={[
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 1 - Page d'accueil",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 2 - Article",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 3 - Dashboard admin",
                  },
                ]}
                longDescription="Cette plateforme de blog tech personnalisée offre une expérience de lecture optimale et une gestion de contenu simplifiée. Basée sur WordPress avec des extensions personnalisées, elle propose un système de commentaires avancé avec modération, des newsletters automatisées et une intégration avec les réseaux sociaux pour maximiser la portée des articles."
              />
              <ProjectCard
                title="Application Météo"
                description="Application web et mobile affichant les prévisions météorologiques en temps réel grâce à l'API OpenWeatherMap."
                tags={["React Native", "Redux", "API REST"]}
                imageSrc="/placeholder.svg?height=300&width=400"
                link="#"
                projectImages={[
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 1 - Écran principal",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 2 - Prévisions détaillées",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 3 - Carte météo",
                  },
                ]}
                longDescription="Cette application météo multiplateforme fournit des prévisions précises et en temps réel. Développée avec React Native pour une expérience native sur iOS et Android, elle utilise l'API OpenWeatherMap pour récupérer les données météorologiques. Les fonctionnalités incluent la géolocalisation, les prévisions sur 7 jours, les alertes météo et une carte interactive des précipitations."
              />
              <ProjectCard
                title="Jeu Éducatif"
                description="Jeu interactif pour enfants développé dans le cadre d'un projet universitaire visant à enseigner les bases de la programmation."
                tags={["JavaScript", "Canvas", "HTML5", "CSS3"]}
                imageSrc="/placeholder.svg?height=300&width=400"
                link="#"
                projectImages={[
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 1 - Écran de jeu",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 2 - Niveau débutant",
                  },
                  {
                    src: "/placeholder.svg?height=600&width=800",
                    alt: "Image 3 - Niveau avancé",
                  },
                ]}
                longDescription="Ce jeu éducatif conçu pour les enfants de 8 à 12 ans enseigne les concepts fondamentaux de la programmation de manière ludique. Développé en JavaScript avec Canvas pour les animations, il propose différents niveaux de difficulté où les joueurs doivent résoudre des puzzles en utilisant des blocs de code simples. Le projet a été réalisé dans le cadre d'un cours universitaire sur les technologies web interactives."
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
