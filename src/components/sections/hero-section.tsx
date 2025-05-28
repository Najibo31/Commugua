
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
          src="https://i.postimg.cc/X7vRVL3w/ecriture.png"
          alt="Arrière-plan texturé pour la section principale"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          priority
          data-ai-hint="texture background"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Notre Projet : Mosquée <span className="text-primary">El OUMMA</span>
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground">
          Nous avons l'honneur de vous annoncer un projet ambitieux : la construction d'une nouvelle Mosquée en Guadeloupe, destinée à accueillir notre communauté musulmane grandissante et à servir de centre spirituel et communautaire pour toutes les générations.
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
              Établir la mosquée El OUMMA, un centre islamique et communautaire exemplaire. Ce lieu sera un espace de prière, de rassemblement et de soutien spirituel, offrant également des activités éducatives et de solidarité.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-card-foreground">Focus Communautaire</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Servir les besoins spirituels, éducatifs et sociaux de la communauté musulmane en Guadeloupe. Promouvoir les valeurs de paix, compassion et solidarité, et encourager le dialogue et l'engagement civique.
            </p>
          </div>
          <div className="p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-3">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-card-foreground">Objectifs du Projet</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Mener à bien la construction de la mosquée El OUMMA : un espace de prière spacieux, des salles de classe, des espaces pour activités communautaires et des services de soutien, assurant un lieu durable et accueillant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
