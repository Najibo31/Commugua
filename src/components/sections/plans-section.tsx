
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LayoutGrid, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { mosquePlans } from '@/lib/plans-data';

interface PlansSectionProps {
  id: string;
}

export function PlansSection({ id }: PlansSectionProps) {
  const previewPlan = mosquePlans[0]; // Use the first plan as a preview

  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <LayoutGrid className="h-12 w-12 text-primary mx-auto lg:mx-0 mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Découvrez les Plans du Projet
            </h2>
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
              Visualisez l'avenir de notre communauté. Nous vous invitons à explorer les plans détaillés de la future mosquée El OUMMA, un projet conçu pour être un phare spirituel et communautaire en Guadeloupe.
            </p>
            <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <Link href="/plans">
                Voir tous les plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="w-full">
            {previewPlan && (
              <Card className="shadow-xl hover:shadow-2xl transition-shadow overflow-hidden rounded-lg">
                <Link href="/plans" aria-label="Voir les plans de la mosquée">
                  <CardContent className="p-0">
                    <div className="relative aspect-video">
                      <Image
                        src={previewPlan.src}
                        alt={previewPlan.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={previewPlan.aiHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-lg font-bold">Vue d'ensemble du projet</h3>
                        <p className="text-sm">Cliquez pour explorer les plans</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
