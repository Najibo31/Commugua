
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Info, BookOpen } from 'lucide-react'; // Using BookOpen for general Islam info

interface IslamSectionProps {
  id: string;
}

export function IslamSection({ id }: IslamSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            L'Islam : Foi et Pratique
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            L'Islam est une religion monothéiste abrahamique. Les musulmans croient en un Dieu unique, Allah, et suivent les enseignements du prophète Muhammad (paix et bénédictions sur lui), révélés dans le Coran.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary text-center">Principes Fondamentaux</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <p className="text-muted-foreground">
                Au cœur de l'Islam se trouvent des croyances et des pratiques qui guident la vie des musulmans. Celles-ci incluent la foi en l'unicité de Dieu, aux prophètes, aux livres révélés, aux anges, au Jour du Jugement et au décret divin. Les pratiques fondamentales sont connues sous le nom des Piliers de l'Islam.
              </p>
              <Button asChild size="lg" className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-transform hover:scale-105">
                <Link href="/islam-details">
                  <Info className="mr-2 h-5 w-5" />
                  En savoir plus sur les Piliers de l'Islam
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
