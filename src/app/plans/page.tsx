
import { mosquePlans } from '@/lib/plans-data';
import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, LayoutGrid } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Plans de la Mosquée - Projet Comugua',
  description: 'Découvrez les plans architecturaux du projet de la mosquée El OUMMA en Guadeloupe.',
};

export default function PlansPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
        </Link>
      </Button>

      <div className="text-center mb-12">
        <LayoutGrid className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Les Plans de la Mosquée El OUMMA
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explorez les détails architecturaux de notre futur lieu de culte et centre communautaire.
        </p>
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {mosquePlans.map((plan, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="shadow-lg overflow-hidden">
                  <CardContent className="flex flex-col items-center justify-center p-0">
                    <div className="relative w-full aspect-video">
                       <Image
                        src={plan.src}
                        alt={plan.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={plan.aiHint}
                      />
                    </div>
                    <div className="w-full p-4 bg-muted/50 text-center">
                       <p className="font-semibold text-foreground">{plan.alt}</p>
                       <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
