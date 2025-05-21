
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Users, Target } from 'lucide-react';

interface HeroSectionProps {
  id: string;
}

export function HeroSection({ id }: HeroSectionProps) {
  return (
    <section id={id} className="relative py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="https://placehold.co/1920x1080" 
          alt="Silhouette de mosquée" 
          layout="fill" 
          objectFit="cover" 
          priority
          data-ai-hint="mosque silhouette"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Bienvenue au <span className="text-primary">Projet Commugua</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Construire un avenir meilleur pour la communauté musulmane en Guadeloupe. Découvrez notre vision, soutenez notre mission et participez à notre croissance.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="#dons">Nous Soutenir</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105">
            <Link href="#histoire">En Savoir Plus</Link>
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <Building className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-card-foreground">Notre Vision</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Établir un centre dynamique pour le culte, l'éducation et l'engagement communautaire, favorisant l'unité et la compréhension.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-card-foreground">Focus Communautaire</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Servir les besoins spirituels et sociaux des musulmans en Guadeloupe, et promouvoir le dialogue interreligieux.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-card-foreground">Objectifs du Projet</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Mener à bien le développement de la mosquée, assurant un espace durable et accueillant pour tous.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
