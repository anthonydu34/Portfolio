import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  title: string
  description: string
  price: string
  imageSrc: string
  badge?: string
}

export function ProductCard({ title, description, price, imageSrc, badge }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={300}
          height={300}
          className="w-full object-cover aspect-square"
        />
        {badge && <Badge className="absolute top-2 right-2 bg-rose-500">{badge}</Badge>}
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <div className="text-lg font-bold">{price}</div>
        <Button size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Ajouter
        </Button>
      </CardFooter>
    </Card>
  )
}
