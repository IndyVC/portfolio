import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Faktion",
    description:
      "Build and maintain projects. Build design system specifically for chat bots that can be distributed using the Shadcn/ui CLI",
    image: "/projects/faktion.png",
    link: "https://faktion.com/",
  },
  {
    title: "Metamaze (Startup of the year 2022)",
    description:
      "Build and maintain the platform. My proudest work involves the labeling tool, integrations (enrichments), analytics, event tracking and more. After the acquisition by Duco I developed the new design system.",
    image: "/projects/metamaze.png",
    link: "https://du.co/",
  },
  {
    title: "Elmos",
    description:
      "Part of the component team where we build and maintain the design system that is being used across multiple products.",
    image: "/projects/elmos.png",
    link: "https://www.elmos.be/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        My Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="flex-1">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="secondary" size="sm" asChild>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink size={16} className="mr-2" /> Link
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
