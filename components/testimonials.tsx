import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ce que nos clients disent</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Découvrez les témoignages de nos clients satisfaits.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Sophie Martin"
            role="Cliente fidèle"
            content="J'adore les produits de cette marque. La qualité est exceptionnelle et le service client est impeccable."
            rating={5}
            imageSrc="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="Thomas Dubois"
            role="Client depuis 2020"
            content="Des produits innovants qui ont vraiment amélioré mon quotidien. Je recommande vivement !"
            rating={5}
            imageSrc="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            name="Marie Leroy"
            role="Nouvelle cliente"
            content="Première commande et je suis déjà conquise. Livraison rapide et produit conforme à mes attentes."
            rating={4}
            imageSrc="/placeholder.svg?height=100&width=100"
          />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  imageSrc: string
}

function TestimonialCard({ name, role, content, rating, imageSrc }: TestimonialCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">{content}</p>
      </CardContent>
      <CardFooter>
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
