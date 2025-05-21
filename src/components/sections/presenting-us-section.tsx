
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Goal, ListTree, Building2 } from 'lucide-react'; // Changed Sitemap to ListTree

interface PresentingUsSectionProps {
  id: string;
}

export function PresentingUsSection({ id }: PresentingUsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Qui Sommes-Nous ? Le Projet Commugua
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Découvrez la Communauté Musulmane de la Guadeloupe (Commugua), notre mission, notre vision et les fondations de notre projet fédérateur.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Users className="h-8 w-8 text-primary mr-3" />
                <CardTitle className="text-2xl text-primary">Notre Communauté</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                La Communauté Musulmane de la Guadeloupe (Commugua) rassemble des individus et des familles unis par la foi et le désir de vivre en harmonie avec les valeurs islamiques tout en contribuant positivement à la société guadeloupéenne.
              </p>
              <p className="text-muted-foreground">
                Nous sommes une communauté diverse, accueillant des personnes de toutes origines, engagées dans le développement spirituel, éducatif et social. Notre projet vise à renforcer les liens fraternels et à offrir un cadre épanouissant pour tous nos membres.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Goal className="h-8 w-8 text-primary mr-3" />
                <CardTitle className="text-2xl text-primary">Notre Mission et Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                <strong>Mission :</strong> Servir les besoins spirituels, éducatifs et sociaux de la communauté musulmane en Guadeloupe, promouvoir les valeurs de l'Islam telles que la paix, la compassion et la solidarité, et favoriser le dialogue et la compréhension mutuelle au sein de la société guadeloupéenne.
              </p>
              <p className="text-muted-foreground">
                <strong>Vision :</strong> Établir un centre islamique et communautaire exemplaire, un lieu de culte, d'apprentissage et de rassemblement qui soit une source de fierté et de bienfaits pour les musulmans et un pont de communication avec l'ensemble de la population de l'île.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg hover:shadow-xl transition-shadow mt-8">
          <CardHeader>
            <div className="flex items-center mb-2">
              <ListTree className="h-8 w-8 text-primary mr-3" /> {/* Changed Sitemap to ListTree */}
              <CardTitle className="text-2xl text-primary">Notre Organisation</CardTitle>
            </div>
            <CardDescription>
              L'association Commugua est structurée pour servir au mieux les besoins de la communauté et assurer la bonne gestion du projet.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Structure Dirigeante (Exemple) :</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Président :</strong> Coordonne les activités et représente l'association.</li>
                <li><strong>Vice-Président :</strong> Assiste le président et le remplace en son absence.</li>
                <li><strong>Secrétaire Général :</strong> Gère la correspondance et les archives.</li>
                <li><strong>Trésorier :</strong> Supervise les finances et la comptabilité.</li>
                <li><strong>Membres du Conseil d'Administration :</strong> Participent aux décisions stratégiques et à la supervision des projets.</li>
                <li><strong>Comités spécialisés :</strong> (Ex: comité de construction, comité éducatif, comité social) pour gérer des aspects spécifiques du projet et de la vie communautaire.</li>
              </ul>
              <p className="text-muted-foreground mt-4 text-sm">
                Cette structure est indicative et vise à assurer une gouvernance transparente et efficace. Les membres sont élus ou désignés selon les statuts de l'association.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-semibold text-foreground mb-3 text-lg text-center">Organigramme (Prochainement)</h4>
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-md border border-border">
                <Image
                  src="https://placehold.co/600x400"
                  alt="Organigramme de l'association Commugua (à venir)"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint="organization chart"
                />
              </div>
              <p className="text-muted-foreground mt-3 text-sm text-center">
                Un organigramme visuel détaillé illustrant la structure de l'association sera disponible ici prochainement.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
