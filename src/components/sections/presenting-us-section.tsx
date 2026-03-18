
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Goal, ListTree, Building2, Shield, Banknote, FileText, Gem } from 'lucide-react';

interface PresentingUsSectionProps {
  id: string;
}

export function PresentingUsSection({ id }: PresentingUsSectionProps) {
  const leadership = [
    { name: 'M. Rachid LATRECHE', title: 'PRÉSIDENT', pole: 'Présidence', icon: Gem },
    { name: 'M. Youcef GAOUAOU', title: 'TRÉSORIER', pole: 'Pôle Financement', icon: Banknote },
    { name: 'M. Pascal PETIT', title: 'SECRÉTAIRE GÉNÉRAL', pole: 'Gestion documentaire', icon: FileText },
    { name: 'M. Tonio TANGANEM', title: 'SACRIFICATEUR', pole: 'Pôle Rituel', icon: Shield },
  ];

  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Qui Sommes-Nous ? Le Projet Comugua
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            La Communauté Musulmane de la Guadeloupe (Comugua) est à un tournant essentiel. Découvrez notre identité, notre engagement et les fondations de notre projet fédérateur pour la construction de la mosquée El OUMMA.
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
                L'association cultuelle COMUGUA, régie par la loi 1901, a été créée en 2021 en Guadeloupe. Elle rassemble des individus et des familles unis par la foi et le désir de vivre en harmonie avec les valeurs islamiques, tout en contribuant positivement à la société guadeloupéenne.
              </p>
              <p className="text-muted-foreground">
                Après des années de croissance et d'engagement spirituel, nous avons pris la décision de réaliser ce projet ambitieux et d’une grande importance : la construction d’un nouveau lieu de culte qui servira de centre spirituel et communautaire pour nos fidèles et pour toutes les générations à venir.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Goal className="h-8 w-8 text-primary mr-3" />
                <CardTitle className="text-2xl text-primary">Nos Objectifs et Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <h4 className="font-semibold text-foreground text-lg">Missions de l'association :</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>La construction tant attendue de la 1ère Mosquée en Guadeloupe.</li>
                    <li>Fédérer les différentes communautés présentes sur le territoire.</li>
                    <li>Représenter les aspirations des fidèles et défendre leurs intérêts culturels, dans le respect des lois de la République.</li>
                    <li>Pérenniser une filière d’abattage pour la viande Hallal et pour l’Aïd el Kébir.</li>
                    <li>Favoriser le dialogue interreligieux et interculturel pour une cohabitation fondée sur le respect mutuel.</li>
                </ul>
                <h4 className="font-semibold text-foreground text-lg mt-4">Vision du projet :</h4>
                <p className="text-muted-foreground">
                Établir la mosquée El OUMMA, un centre islamique et communautaire exemplaire. Ce lieu sera un espace de prière, de rassemblement et de soutien spirituel, offrant également des activités éducatives et de solidarité pour les familles, les jeunes et les personnes âgées.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-lg hover:shadow-xl transition-shadow mt-8">
          <CardHeader>
            <div className="flex items-center mb-2">
              <ListTree className="h-8 w-8 text-primary mr-3" />
              <CardTitle className="text-2xl text-primary">Notre Organisation</CardTitle>
            </div>
            <CardDescription>
              L'association Comugua est structurée pour servir au mieux les besoins de la communauté et assurer la bonne gestion du projet El OUMMA.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {leadership.map((member, index) => (
                <Card key={index} className="text-center shadow-md hover:shadow-lg transition-shadow flex flex-col bg-card/50">
                  <CardHeader className="items-center pt-6">
                    <div className="p-3 bg-primary/10 rounded-full mb-3 text-primary">
                      <member.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-lg text-primary">{member.title}</CardTitle>
                    <p className="text-md text-foreground font-medium">{member.name}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex items-end justify-center pb-4">
                    <p className="text-xs font-semibold text-foreground bg-muted/50 rounded-full px-3 py-1 inline-block">{member.pole}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
             <p className="text-muted-foreground mt-8 text-sm text-center">
                Cette équipe, soutenue par de nombreux bénévoles et membres actifs, œuvre pour la concrétisation du projet et la vie de la communauté. D'autres comités spécialisés participent à la gestion des aspects spécifiques du projet et de la vie communautaire.
              </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
