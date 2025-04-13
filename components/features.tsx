import { Shield, Truck, Clock, ThumbsUp } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pourquoi nous choisir</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nous nous engageons à vous offrir la meilleure expérience possible.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
              <Shield className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold">Qualité garantie</h3>
            <p className="text-sm text-gray-500">Tous nos produits sont soumis à des contrôles de qualité rigoureux.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
              <Truck className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold">Livraison rapide</h3>
            <p className="text-sm text-gray-500">Livraison en 24-48h pour toutes les commandes passées avant 15h.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
              <Clock className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold">Service 24/7</h3>
            <p className="text-sm text-gray-500">Notre service client est disponible à tout moment pour vous aider.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
              <ThumbsUp className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-xl font-bold">Satisfaction client</h3>
            <p className="text-sm text-gray-500">Plus de 98% de nos clients sont satisfaits de nos produits.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
