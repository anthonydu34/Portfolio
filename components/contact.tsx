"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;
    console.log("test");
    emailjs
      .sendForm(
        "service_h5txm1k", // Remplace par ton Service ID
        "template_kqckcoi", // Remplace par ton Template ID
        formRef.current,
        "Bhi6G_Y1xBEyDpbdB" // Remplace par ta clé publique (User ID ou Public Key)
      )
      .then(() => {
        toast({
          title: "Message envoyé !",
          description:
            "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
        });
        formRef.current?.reset();
      })
      .catch(() => {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi du message.",
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-slate-50"
    >
      <div className="container px-4 md:px-6">
        {/* ... ton texte d'intro ... */}

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 lg:grid-cols-2">
          {/* Bloc de contact à gauche (inchangé) */}
          <Card>
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
              <CardDescription>Plusieurs façons de me joindre</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-500" />

                <span>arozarena34@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-500" />
                <span>+33 07 71 80 47 87</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-teal-500" />
                <span>Avignon, France</span>
              </div>
            </CardContent>
          </Card>

          {/* Formulaire */}
          <Card>
            <CardHeader>
              <CardTitle>Envoyez-moi un message</CardTitle>
              <CardDescription>
                Je vous répondrai dans les plus brefs délais
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    name="user_name"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="user_email"
                    placeholder="votre@email.com"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    required
                    className="min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Envoi en cours...
                      <svg
                        className="ml-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Envoyer <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
