import { GraduationCap, Briefcase } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Formation & Expérience</h2>
            <p className="max-w-[900px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mon parcours académique et professionnel.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl gap-8 py-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-teal-500" />
              Formation
            </h3>
            <Card>
              <CardHeader>
                <CardTitle>Licence Informatique</CardTitle>
                <CardDescription>Université de [Nom] • 2022 - Présent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Actuellement en deuxième année (L2) de licence informatique. Formation complète couvrant les
                  fondamentaux de l'informatique, les algorithmes, les structures de données, la programmation orientée
                  objet, les bases de données et le développement web.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Baccalauréat Scientifique</CardTitle>
                <CardDescription>Lycée [Nom] • 2019 - 2022</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Baccalauréat avec spécialité Mathématiques et Numérique et Sciences Informatiques (NSI). Option
                  Mathématiques Expertes en Terminale.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-teal-500" />
              Expérience Professionnelle
            </h3>
            <Card>
              <CardHeader>
                <CardTitle>Développeur Web Freelance</CardTitle>
                <CardDescription>Indépendant • 2022 - Présent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Conception et développement de sites web et d'applications pour divers clients. Création de solutions
                  sur mesure adaptées aux besoins spécifiques de chaque projet. Gestion complète du cycle de
                  développement, de la conception à la mise en production.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Stage Développeur Front-end</CardTitle>
                <CardDescription>Entreprise [Nom] • Été 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-500">
                  Stage de deux mois au sein d'une agence web. Participation au développement d'interfaces utilisateur
                  pour plusieurs clients. Utilisation des technologies React, TypeScript et Tailwind CSS.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
