
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Goal, ListTree, Building2, UserCheck, Shield, BookUser, Banknote, HeartHandshake, FileText, Gem } from 'lucide-react';

interface PresentingUsSectionProps {
  id: string;
}

export function PresentingUsSection({ id }: PresentingUsSectionProps) {
  const leadership = [
    { name: 'M. Youcef GAOUAOU', title: 'TRÉSORIER', pole: 'Pôle Financement', icon: Banknote },
    { name: 'M. Abdoulaye NDOYE', title: 'VICE-PRÉSIDENT', pole: 'Pôle Social', icon: HeartHandshake },
    { name: 'M. Pascal PETIT', title: 'SECRÉTAIRE GÉNÉRAL', pole: 'Gestion documentaire', icon: FileText },
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
            <div className="flex flex-col items-center text-center">
              {/* President Card */}
              <div className="relative mb-8">
                <Card className="bg-gradient-to-br from-primary/20 to-card border-2 border-primary shadow-lg max-w-xs mx-auto">
                    <CardHeader className="flex flex-col items-center">
                        <div className="p-3 bg-primary/80 rounded-full mb-2 text-primary-foreground">
                           <Gem className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl font-bold text-primary">PRÉSIDENT</CardTitle>
                        <p className="text-md text-foreground">M. Rachid LATRECHE</p>
                    </CardHeader>
                </Card>
                 {/* Vertical line connecting to the rest of the chart */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0.5 h-8 bg-border"></div>
              </div>
            
              {/* Horizontal line */}
              <div className="w-full max-w-2xl h-0.5 bg-border my-8 hidden md:block"></div>

              {/* Leadership Team Grid */}
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
                {leadership.map((member, index) => (
                  <div key={index} className="flex flex-col items-center relative">
                    {/* Vertical connecting line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0.5 h-8 bg-border hidden md:block"></div>
                    {/* Horizontal connecting line for mobile */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-full w-8 h-0.5 bg-border md:hidden"></div>
                    <Card className="w-full max-w-xs shadow-md hover:shadow-lg transition-shadow">
                      <CardHeader className="items-center">
                         <div className="p-2 bg-primary/10 rounded-full mb-2 text-primary">
                           <member.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg text-primary">{member.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{member.name}</p>
                      </CardHeader>
                      <CardContent>
                         <div className="relative text-center">
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-0.5 h-4 bg-border"></div>
                            <p className="text-xs font-semibold text-foreground bg-muted/50 rounded-full px-3 py-1 inline-block">{member.pole}</p>
                         </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

            </div>
             <p className="text-muted-foreground mt-12 text-sm text-center">
                Cette équipe, soutenue par de nombreux bénévoles et membres actifs, œuvre pour la concrétisation du projet et la vie de la communauté. D'autres comités spécialisés participent à la gestion des aspects spécifiques du projet et de la vie communautaire.
              </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
