
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText } from 'lucide-react';

interface HistorySectionProps {
  id: string;
}

export function HistorySection({ id }: HistorySectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ScrollText className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Le Parcours de Notre Communauté
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Retracer les racines et la croissance de la communauté musulmane en Guadeloupe.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Les Débuts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                La présence musulmane en Guadeloupe a des débuts modestes, avec les premiers individus et familles arrivant sur plusieurs décennies. Ces pionniers ont fait face à des défis uniques pour établir une communauté tout en préservant leur foi et leur héritage culturel dans une nouvelle terre.
              </p>
              <p className="text-muted-foreground">
                Les premiers rassemblements avaient souvent lieu dans des maisons, favorisant un sentiment de fraternité et de sororité très uni. Ces efforts initiaux ont jeté les bases essentielles de la communauté organisée que nous voyons aujourd'hui.
              </p>
            </CardContent>
          </Card>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/600x400"
              alt="Rassemblement communautaire historique"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="vintage community"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div className="rounded-lg overflow-hidden shadow-lg order-last md:order-first">
            <Image
              src="https://placehold.co/600x400"
              alt="Événement communautaire moderne"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              data-ai-hint="diverse people"
            />
          </div>
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Croissance et Développement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Avec le temps, la communauté s'est agrandie, attirant davantage de musulmans en Guadeloupe. Au fur et à mesure de cette croissance, nous constatons que notre lieu actuel de culte ne peut plus répondre à nos besoins croissants en matière d'espace et d'activités. Cette réalité a nécessité des structures plus formelles pour le culte, l'éducation et les activités sociales.
              </p>
              <p className="text-muted-foreground">
                L'initiative Comugua et le projet de construction de la mosquée El OUMMA représentent une étape majeure dans ce parcours. Ils visent à fournir une mosquée centrale et un centre communautaire adaptés pour répondre aux besoins évolutifs de notre communauté dynamique et diversifiée, pour les générations actuelles et futures.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
