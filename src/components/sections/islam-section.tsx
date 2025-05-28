
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Info, BookOpen, Youtube, Languages, Instagram, ExternalLink } from 'lucide-react';

interface IslamSectionProps {
  id: string;
}

export function IslamSection({ id }: IslamSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Info className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            L'Islam : Foi et Pratique
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            L'Islam est une religion monothéiste abrahamique. Les musulmans croient en un Dieu unique, Allah, et suivent les enseignements du prophète Muhammad (paix et bénédictions sur lui), révélés dans le Coran.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary text-center">Découvrir l'Islam</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-muted-foreground">
                Explorez les fondements, les croyances et les pratiques qui guident la vie des musulmans.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                <Link href="https://lislam-simplement.com/" target="_blank" rel="noopener noreferrer">
                  <Info className="mr-2 h-5 w-5" />
                  En savoir plus sur l'Islam
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="text-center mt-12 mb-8">
            <h3 className="text-2xl font-semibold text-foreground">Ressources d'Apprentissage</h3>
            <p className="mt-2 text-md text-muted-foreground">Approfondissez vos connaissances avec ces ressources utiles.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-center mb-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-center text-primary">Apprendre le Coran</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground text-sm mb-4">
                  Approfondissez votre connaissance du Saint Coran grâce à des ressources dédiées.
                </p>
                <Button asChild variant="outline" className="w-full transition-transform hover:scale-105">
                  <Link href="https://youtube.com/@lecoransimplement?feature=shared" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-5 w-5" />
                    Voir sur YouTube
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-center mb-3">
                  <Languages className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-center text-primary">Apprendre l'Arabe</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground text-sm mb-4">
                  Apprenez la langue arabe, la langue du Coran, avec des cours accessibles.
                </p>
                <Button asChild variant="outline" className="w-full transition-transform hover:scale-105">
                  <Link href="https://youtube.com/@larabesimplement?feature=shared" target="_blank" rel="noopener noreferrer">
                    <Youtube className="mr-2 h-5 w-5" />
                    Voir sur YouTube
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="shadow-md hover:shadow-lg transition-shadow flex flex-col md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center justify-center mb-3">
                  <Instagram className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg text-center text-primary">Suivez "L'Islam Simplement"</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground text-sm mb-4">
                  Retrouvez plus de contenu, d'échanges et les dernières mises à jour sur leur page Instagram.
                </p>
                <Button asChild variant="outline" className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white transition-transform hover:scale-105 hover:opacity-90">
                  <Link href="https://www.instagram.com/lislamsimplement?igsh=YmZvNXB1bHhqenVx" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Voir sur Instagram
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
