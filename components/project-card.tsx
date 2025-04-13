"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ProjectDetailModal } from "./project-detail-modal"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageSrc: string
  link: string
  projectImages?: Array<{ src: string; alt: string }>
  longDescription?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  link,
  projectImages = [],
  longDescription,
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Si aucune image n'est fournie, utiliser l'image principale
  const images = projectImages.length > 0 ? projectImages : [{ src: imageSrc, alt: title }]

  return (
    <>
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <div className="relative h-48">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-100">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            className="text-teal-500 hover:text-teal-600 hover:bg-teal-50 p-0"
            onClick={() => setIsModalOpen(true)}
          >
            Voir le projet <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        tags={tags}
        images={images}
        longDescription={longDescription}
      />
    </>
  )
}
