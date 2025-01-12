import { Mail, Linkedin, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Get in Touch
      </h2>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>
            I&apos;m always open to new opportunities and collaborations.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:indyvancanegem@hotmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://www.linkedin.com/in/indyvancanegem/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a
              href="https://github.com/IndyVC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
