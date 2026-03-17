
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake, Info, Building2, Contact, ExternalLink, Heart, Banknote, ChevronsRight, HandHelping, Gift, Mail, Home } from 'lucide-react';
import Image from 'next/image';
import { DonationForm } from '@/components/donation-form';

const PayPalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8.05796 21.7479H3.05196C2.63096 21.7479 2.23496 21.5759 1.94896 21.2859C1.66296 20.9969 1.50096 20.5989 1.50096 20.1789V4.51795C1.50096 4.09695 1.66296 3.69895 1.94896 3.40995C2.23496 3.11995 2.63096 2.94795 3.05196 2.94795H14.096C14.4355 2.94759 14.7677 3.01569 15.0712 3.14781C15.3746 3.28002 15.6418 3.47331 15.854 3.71395L19.768 7.62795C19.9896 7.84032 20.172 8.10695 20.3034 8.40989C20.4348 8.71283 20.5024 9.0446 20.502 9.38395V20.1789C20.502 20.5999 20.34 20.9979 20.054 21.2859C19.768 21.5739 19.373 21.7479 18.952 21.7479H10.015C9.63316 21.768 9.25672 21.6453 8.96184 21.405C8.66697 21.1646 8.47726 20.8257 8.43096 20.4469C8.40596 20.1689 8.44796 19.8909 8.55396 19.6389C8.65996 19.3859 8.82696 19.1689 9.03796 19.0109C9.17888 18.9082 9.33765 18.8264 9.50749 18.7694C9.67733 18.7124 9.85575 18.6811 10.035 18.6779H17.098C17.298 18.6779 17.498 18.6319 17.677 18.5469C17.856 18.4619 18.008 18.3399 18.122 18.1909C18.236 18.0419 18.307 17.8699 18.329 17.6919C18.351 17.5129 18.324 17.3329 18.252 17.1679C18.179 16.9999 18.063 16.8539 17.915 16.7439C17.767 16.6339 17.592 16.5639 17.41 16.5409L17.292 16.5379L11.077 16.5289C9.91649 16.5203 8.79466 16.1121 7.96111 15.3854C7.12756 14.6587 6.64071 13.6663 6.59396 12.6069C6.58796 12.4499 6.60996 12.2939 6.65896 12.1449C6.70796 11.9959 6.78396 11.8569 6.88096 11.7369C6.97796 11.6159 7.09496 11.5169 7.22496 11.4449C7.35496 11.3729 7.49696 11.3299 7.64396 11.3169C8.08979 11.2454 8.54518 11.3628 8.9011 11.6417C9.25702 11.9206 9.48328 12.3364 9.53696 12.7839C9.60162 13.4698 9.91977 14.1035 10.4349 14.572C10.9501 15.0406 11.6279 15.3135 12.33 15.3399H13.198L13.329 15.3429L17.368 15.3519C17.902 15.3519 18.342 15.0629 18.342 14.5289C18.342 14.2579 18.244 14.0099 18.071 13.8279C17.898 13.6469 17.657 13.5449 17.392 13.5449H14.609C14.3269 13.5241 14.0575 13.3905 13.8599 13.1697C13.6624 12.9488 13.5502 12.6587 13.542 12.3589C13.532 11.9979 13.688 11.6539 13.961 11.4209C14.1031 11.2976 14.2684 11.1991 14.4475 11.1313C14.6267 11.0635 14.8163 11.0279 15.007 11.0269L15.102 11.0289L17.419 11.0379C18.136 11.0379 18.931 10.8799 19.511 10.5799C19.8216 10.4189 20.0904 10.2044 20.2993 9.94978C20.5082 9.69517 20.6522 9.40664 20.721 9.10395L20.724 9.09095L20.723 9.07795C20.715 8.98695 20.691 8.89795 20.652 8.81695C20.5141 8.50921 20.289 8.24945 20.003 8.07795L16.089 4.16395C15.9477 4.06067 15.7894 3.98021 15.6204 3.92681C15.4513 3.87341 15.2742 3.84802 15.095 3.85195H4.50196C4.30196 3.85195 4.10196 3.89795 3.92296 3.98295C3.74396 4.06795 3.59196 4.18995 3.47796 4.33895C3.36396 4.48795 3.29296 4.66095 3.27096 4.83895C3.24896 5.01695 3.27596 5.19695 3.34796 5.36295V20.1789C3.34796 20.3789 3.39396 20.5789 3.47896 20.7579C3.56396 20.9369 3.68596 21.0889 3.83496 21.2029C3.98396 21.3169 4.15696 21.3879 4.33496 21.4099C4.51296 21.4319 4.69296 21.4049 4.85896 21.3329C4.95959 21.2848 5.05069 21.2183 5.12796 21.1379C5.26685 20.9988 5.36763 20.8261 5.42296 20.6379C5.45296 20.5359 5.46396 20.4299 5.45396 20.3239V11.1259C5.45174 10.4324 5.71309 9.76713 6.18084 9.27336C6.6486 8.77959 7.28412 8.50536 7.95696 8.49995C8.80496 8.49995 9.60996 8.83095 10.203 9.42395C10.796 10.0169 11.127 10.8229 11.127 11.6699V12.7069C11.127 13.4089 10.859 14.0839 10.389 14.5789C10.1742 14.7948 9.91929 14.9693 9.63926 15.0902C9.35922 15.2111 9.06009 15.2758 8.75696 15.2809C8.51529 15.2912 8.27631 15.2568 8.04996 15.1799C7.77896 15.0899 7.55896 14.9169 7.42096 14.6869C7.28196 14.4569 7.23196 14.1839 7.27696 13.9179C7.32196 13.6519 7.46096 13.4079 7.67196 13.2299C7.75454 13.1572 7.85183 13.0994 7.95796 13.0599C8.03896 13.0289 8.07396 12.9389 8.04996 12.8509C8.02596 12.7629 7.94696 12.7039 7.85896 12.7039C7.80896 12.7039 7.75996 12.7149 7.71696 12.7359C7.19396 12.9749 6.80896 13.4399 6.66096 13.9919C6.51296 14.5439 6.61396 15.1309 6.93796 15.6069C7.26196 16.0829 7.77996 16.3989 8.34096 16.4719C8.45096 16.4879 8.55896 16.4879 8.66396 16.4719L8.75696 16.4679L8.05796 21.7479Z" />
    <path d="M22.5001 9.38395V20.1789C22.5001 20.5999 22.3381 20.9979 22.0521 21.2859C21.7661 21.5739 21.3711 21.7479 20.9501 21.7479H18.9521C18.5281 21.7479 18.1341 21.5739 17.8491 21.2859C17.5631 20.9979 17.4011 20.5999 17.4011 20.1789V9.95095C17.4011 9.58658 17.5104 9.23435 17.7138 8.9494C17.9172 8.66445 18.2034 8.46217 18.5331 8.37095C18.7161 8.32095 18.9061 8.32095 19.0901 8.37095L20.5021 9.38395H22.5001Z" />
  </svg>
);

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
            Soutenir le Projet El OUMMA
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Chers membres de la communauté, amis et bienfaiteurs, nous vous adressons ce message avec un profond sentiment de gratitude et d'espoir. Aujourd'hui, nous sommes à un tournant essentiel : la construction de notre nouvelle mosquée El OUMMA en Guadeloupe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="shadow-lg hover:shadow-xl transition-shadow lg:col-span-2">
            <CardHeader>
              <div className="flex items-center mb-2">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <CardTitle className="text-2xl text-primary">Notre Projet Vital et Votre Impact</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-lg">Pourquoi ce projet est-il essentiel ?</h4>
                <p className="text-muted-foreground text-sm">
                  Au fur et à mesure que notre communauté grandit, les lieux actuels de culte (salles de prières) ne peuvent plus répondre à nos besoins croissants en matière d'espace et d'activités. La nouvelle mosquée El OUMMA offrira une salle de prière spacieuse, des salles de classe pour l'éducation religieuse, des espaces pour des activités communautaires et des services de soutien pour les plus vulnérables. Nous rêvons d'un lieu où chaque membre se sentira accueilli, soutenu et inspiré dans sa foi et dans sa vie quotidienne.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">Le Projet : 3 Étapes Clés</h4>
                <ul className="list-decimal list-inside text-muted-foreground text-sm space-y-2 pl-4">
                  <li>
                    <strong>Acquisition du terrain :</strong> Achat d’un terrain en Guadeloupe pour y construire le lieu de culte et le siège social de l’association. Cette étape est la base essentielle du projet.
                  </li>
                  <li>
                    <strong>Étude et construction :</strong> Financement des études techniques et architecturales, puis la construction du lieu de culte adapté aux besoins de la communauté.
                  </li>
                  <li>
                    <strong>Fonctionnement à long terme :</strong> Mise en place d’une structure de gestion pour assurer la pérennité du site et des activités cultuelles.
                  </li>
                </ul>
              </div>

               <p className="text-muted-foreground text-sm mt-3">
                  Ce projet n'est pas seulement celui de l’équipe dirigeante : il est le vôtre, celui de toute notre communauté, incluant nos frères et sœurs de la métropole qui sont un pilier de soutien. C’est grâce à la générosité de chacun que nous pourrons réaliser cette vision collective.
                </p>
              <div>
                <h4 className="font-semibold text-foreground mb-1 text-lg">Les avantages de soutenir ce projet :</h4>
                 <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2 pl-4 mt-2">
                    <li>
                        <strong>Un lieu de prière et de réflexion plus adapté :</strong> Grâce à votre générosité, vous permettrez à des milliers de croyants de se réunir dans un lieu à la hauteur de leur foi et de leurs aspirations.
                    </li>
                    <li>
                        <strong>Un impact durable :</strong> Votre don ne se limite pas à la construction. Il servira à maintenir ce lieu de culte et à financer des programmes éducatifs et sociaux pour les années à venir.
                    </li>
                    <li>
                        <strong>Une opportunité d'agir dans l'esprit de solidarité et de fraternité :</strong> En soutenant ce projet, vous contribuez à l'unité et à la solidarité de notre communauté, tout en bâtissant un héritage spirituel pour les générations futures.
                    </li>
                </ul>
                <h5 className="font-medium text-foreground mt-4 mb-2 text-md">Exemples de contributions :</h5>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 pl-4">
                    <li><strong>50 €</strong> pour contribuer à l'achat de matériel pour la salle de prière.</li>
                    <li><strong>100 €</strong> pour financer des équipements d'enseignement.</li>
                    <li><strong>500 €</strong> pour soutenir l'aménagement des espaces communautaires.</li>
                    <li><strong>1000 €</strong> ou plus pour financer la construction de l’édifice lui-même.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Info className="h-6 w-6 mr-2" />
                Campagne de Promesses de Dons
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-muted-foreground text-sm">
                  L’achat du terrain représente un investissement important en raison du coût élevé du foncier en Guadeloupe. Pour cela, une campagne de promesses de dons est lancée. Vous pouvez vous engager sur un montant que vous souhaitez contribuer, que ce soit un don ponctuel ou des versements échelonnés (mensuels, trimestriels, annuels).
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Les dons promis seront appelés au moment de l’achat du terrain. Cet achat se fera par acte notarié, au nom de l’association, garantissant une transparence totale sur l’usage des fonds.
                </p>
                <p className="text-muted-foreground text-sm italic mt-2">
                  Ne promettez que les sommes que vous pourriez donner.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Collecte en personne :</h4>
                <p className="text-muted-foreground text-sm">
                  Les dons promis sont collectés en personne (de main à main) par des représentants autorisés du projet Comugua.
                </p>
              </div>
               <div>
                <h4 className="font-semibold text-foreground mb-1 mt-3">Déductibilité fiscale :</h4>
                <p className="text-muted-foreground text-sm">
                  Vos dons à l'association Comugua peuvent ouvrir droit à une réduction d'impôt sur le revenu, conformément à la législation française en vigueur. Vous recevrez un reçu fiscal pour toute contribution.
                </p>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-sm text-primary font-medium">
                  Chaque promesse, chaque contribution, est une pierre ajoutée à l'édifice. JazakAllah Khair pour votre engagement.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Un Héritage pour Demain</h4>
                  <p className="text-muted-foreground text-sm">Votre don ne se limite pas à la construction. Il servira à maintenir ce lieu de culte et à financer des programmes éducatifs et sociaux pour les années à venir.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="shadow-lg hover:shadow-xl transition-shadow mt-12">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Contact className="h-7 w-7 mr-2" />
              Autres Façons de Contribuer & Nous Contacter
            </CardTitle>
            <CardDescription>
              Ce site internet dédié vous permet de suivre l'évolution du projet, de faire vos dons en toute sécurité, et de poser vos questions. Découvrez d'autres manières de soutenir le projet El OUMMA.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center"><ExternalLink className="mr-2 h-5 w-5 text-primary"/> Promesses de dons en ligne :</h4>
                  <p className="text-muted-foreground text-sm">
                    Utilisez notre formulaire en ligne pour enregistrer facilement votre promesse de don.
                  </p>
                  <DonationForm>
                    <Button className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
                      Faire une promesse de don
                    </Button>
                  </DonationForm>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center"><PayPalIcon className="mr-2 h-5 w-5 text-blue-600"/> Faire un don direct via PayPal :</h4>
                  <p className="text-muted-foreground text-sm">
                    Compte PayPal : non mis en place actuellement.
                  </p>
                  <Button disabled className="mt-2 shadow-md transition-transform">
                    <PayPalIcon className="mr-2 h-5 w-5" />
                    Bientôt disponible
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center"><Banknote className="mr-2 h-5 w-5 text-primary"/> Par Virement Bancaire :</h4>
                  <p className="text-muted-foreground text-sm">
                    Vous pouvez effectuer un virement directement sur le compte de l'association.
                  </p>
                  <div className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-md mt-1">
                    <strong>IBAN :</strong> FR76 1308 8090 8907 1254 0008 733<br />
                    <strong>BIC :</strong> BNPAMQMXXXX
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center"><ChevronsRight className="mr-2 h-5 w-5 text-primary"/> Par Chèque :</h4>
                  <p className="text-muted-foreground text-sm">
                    Envoyez votre chèque à l'ordre de "Association Comugua" à l'adresse suivante :
                  </p>
                  <div className="text-sm text-muted-foreground p-3 bg-muted/50 rounded-md mt-1">
                     Association Comugua<br/>
                     Chemin de Diane Hauteur Lézarde<br/>
                     97170 Petit Bourg
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-6 border-t">
                 <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center"><Gift className="mr-2 h-5 w-5 text-primary"/> Dons en Nature ou en Services :</h4>
                    <p className="text-muted-foreground text-sm">
                        Nous acceptons également des dons en nature, que ce soit sous forme de matériaux de construction (briques, ciment, peinture, etc.), ou de services (travaux de construction, expertise, gestion, etc.). Veuillez nous contacter pour en discuter.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center"><HandHelping className="mr-2 h-5 w-5 text-primary"/> Bénévolat :</h4>
                    <p className="text-muted-foreground text-sm">
                        En plus des dons financiers, nous avons besoin de bénévoles pour contribuer à l'organisation de certains événements de levée de fonds, à la gestion du projet ou à l’aide lors de la construction elle-même. Votre temps et vos compétences sont précieux ! Si vous souhaitez contribuer, faites-le nous savoir.
                    </p>
                </div>
            </div>

            <div className="pt-6 border-t space-y-2">
              <h4 className="font-semibold text-foreground mb-2">Coordonnées de l'association Comugua :</h4>
              <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="mr-2 h-4 w-4 text-primary"/>
                <a href="mailto:President@comugua.fr" className="text-primary hover:underline">President@comugua.fr</a>
              </div>
               <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="mr-2 h-4 w-4 text-primary"/>
                <a href="mailto:Secretariat@comugua.fr" className="text-primary hover:underline">Secretariat@comugua.fr</a>
              </div>
               <div className="flex items-center text-muted-foreground text-sm">
                <Mail className="mr-2 h-4 w-4 text-primary"/>
                <a href="mailto:Tresorier@comugua.fr" className="text-primary hover:underline">Tresorier@comugua.fr</a>
              </div>
              <div className="flex items-center text-muted-foreground text-sm pt-2">
                 <Home className="mr-2 h-4 w-4 text-primary"/>
                <span>Chemin de Diane Hauteur Lézarde, 97170 Petit Bourg</span>
              </div>
              <p className="text-muted-foreground text-sm pt-2">
                <strong>Pour les promesses de dons en personne, dons en nature, bénévolat ou toute question :</strong> Veuillez contacter nos responsables communautaires via les coordonnées ci-dessus.
              </p>
            </div>

            <div className="mt-6 p-6 bg-secondary/30 rounded-lg border border-border text-center">
              <p className="text-lg text-foreground font-semibold">
                Ce projet, attendu depuis plus de 35 ans, pourra enfin voir le jour grâce à votre mobilisation.
              </p>
              <blockquote className="text-muted-foreground text-sm mt-3 italic">
                Le Prophète Muhammad (SAWS) a dit : « Celui qui construit une mosquée pour Allah, Allah Lui construira une maison au paradis ». (Rapporté par Al Boukhari et Mouslim)
              </blockquote>
              <p className="text-muted-foreground text-sm mt-3">L’équipe actuelle reste à votre disposition pour tout renseignement complémentaire.<br />As Salam Aleykoum Wa Rahmatoullahi Wa Barakatou</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
