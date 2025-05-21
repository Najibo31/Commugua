
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, Info, Users, Building, Contact, ExternalLink } from 'lucide-react'; 
import Image from 'next/image';

interface DonationsSectionProps {
  id: string;
}

export function DonationsSection({ id }: DonationsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Soutenir le Projet Commugua
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Vos contributions nous aident à construire et à maintenir l'avenir de notre communauté. Les dons sont actuellement basés sur des promesses et collectés en personne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Info className="h-6 w-6 mr-2" />
                Comment faire un don
              </CardTitle>
              <CardDescription>
                Nous apprécions votre intention de soutenir le Projet Commugua.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Système basé sur des promesses :</h4>
                <p className="text-muted-foreground text-sm">
                  À ce stade, nous acceptons les dons via un système de promesses. Vous pouvez vous engager sur un montant spécifique que vous souhaitez donner.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Collecte en personne :</h4>
                <p className="text-muted-foreground text-sm">
                  Les dons promis sont collectés en personne (de main à main) par des représentants autorisés du projet. Cela garantit la transparence et un engagement direct. Les lieux de collecte peuvent être précisés par nos responsables communautaires.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Contact pour les promesses :</h4>
                <p className="text-muted-foreground text-sm">
                  Pour faire une promesse ou pour plus d'informations sur la manière de contribuer, veuillez nous contacter directement (voir section "Nous Contacter et Contribuer" ci-dessous).
                </p>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-sm text-primary font-medium">
                  Chaque contribution, grande ou petite, a un impact significatif. JazakAllah Khair pour votre générosité.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Construire Notre Fondation</h4>
                  <p className="text-muted-foreground text-sm">Vos dons financent directement la construction et le développement de la mosquée et des installations communautaires.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Renforcer Notre Communauté</h4>
                  <p className="text-muted-foreground text-sm">Soutenez les programmes éducatifs, les services sociaux et les initiatives qui renforcent nos liens communautaires.</p>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-lg overflow-hidden shadow-lg mt-8">
              <Image
                src="https://placehold.co/600x350"
                alt="Membres de la communauté collaborant"
                width={600}
                height={350}
                className="w-full h-auto object-cover"
                data-ai-hint="community hands"
              />
            </div>
          </div>
        </div>

        <Card className="shadow-lg hover:shadow-xl transition-shadow mt-12 md:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Contact className="h-6 w-6 mr-2" />
              Nous Contacter et Contribuer
            </CardTitle>
            <CardDescription>
              Pour plus d'informations, pour faire une promesse de don, ou pour discuter d'autres formes de soutien.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Coordonnées de l'association :</h4>
              <p className="text-muted-foreground text-sm mb-1">
                <strong>Email :</strong> <a href="mailto:contact@commugua-projet.org" className="text-primary hover:underline">contact@commugua-projet.org</a> <span className="text-xs italic">(adresse d'exemple)</span>
              </p>
              <p className="text-muted-foreground text-sm mb-1">
                <strong>Téléphone :</strong> +590 XXX XX XX XX <span className="text-xs italic">(numéro à confirmer)</span>
              </p>
              <p className="text-muted-foreground text-sm">
                <strong>Lieu pour les dons en personne / correspondance :</strong> (Informations sur le lieu de dépôt ou de rencontre à venir. Veuillez contacter nos responsables.)
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Promesses de dons via lien externe :</h4>
              <p className="text-muted-foreground text-sm">
                Nous pourrons bientôt proposer un lien pour faciliter vos promesses de dons en ligne. En attendant, n'hésitez pas à utiliser les contacts ci-dessus.
              </p>
              <Button asChild className="mt-3 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
                <Link href="#" target="_blank" rel="noopener noreferrer"> {/* Remplacez # par votre lien réel */}
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Accéder au formulaire de promesse (lien à venir)
                </Link>
              </Button>
               <p className="text-xs text-muted-foreground mt-2 italic">
                Ce bouton redirigera vers une plateforme externe pour enregistrer votre promesse de don lorsque le lien sera actif.
              </p>
            </div>
            <div className="mt-4 p-4 bg-secondary/30 rounded-lg border border-border">
              <p className="text-sm text-foreground font-medium">
                Votre engagement est essentiel à la réussite du Projet Commugua. Nous vous remercions de votre générosité et de votre confiance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
