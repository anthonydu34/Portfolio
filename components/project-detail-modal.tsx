"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags: string[];
  images: ProjectImage[];
  longDescription?: string;
}

export function ProjectDetailModal({
  isOpen,
  onClose,
  title,
  description,
  tags,
  images,
  longDescription,
}: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
          {images.length > 0 ? (
            <>
              <Image
                src={images[currentImageIndex].src || "/placeholder.svg"}
                alt={images[currentImageIndex].alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 right-2 rounded-md bg-black/60 px-2 py-1 text-xs text-white">
                Image {currentImageIndex + 1} / {images.length}
              </div>
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </>
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-gray-500">Aucune image disponible</p>
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-slate-100">
              {tag}
            </Badge>
          ))}
        </div>

        {longDescription && (
          <div className="mt-4 text-sm text-gray-700">{longDescription}</div>
        )}
      </DialogContent>
    </Dialog>
  );
}
