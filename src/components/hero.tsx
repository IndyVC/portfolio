import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Indy Van Canegem
      </h1>
      <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
        Senior Fullstack Developer
      </h2>
      <p className="text-xl mb-12 max-w-2xl mx-auto">
        Passionate about creating innovative products and solving complex
        problems in the startup ecosystem.
      </p>
      <Button asChild size="lg">
        <Link href="#contact" className="inline-flex items-center">
          Get in touch <ArrowRight className="ml-2" size={20} />
        </Link>
      </Button>
    </section>
  );
}
