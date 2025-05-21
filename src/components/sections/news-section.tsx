
import type { NewsItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, CalendarDays, ExternalLink } from 'lucide-react';

interface NewsSectionProps {
  id: string;
}

const mockNewsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Cérémonie d\'inauguration annoncée',
    date: '25 octobre 2023',
    summary: 'Rejoignez-nous pour la cérémonie officielle d\'inauguration du Projet Commugua. Plus de détails à venir.',
    imageUrl: 'https://placehold.co/300x200',
    link: '#',
    imageHint: 'construction site ceremony'
  },
  {
    id: '2',
    title: 'Dîner de collecte de fonds communautaire',
    date: '10 novembre 2023',
    summary: 'Une soirée de communauté, d\'inspiration et de collecte de fonds pour soutenir le développement de notre mosquée.',
    imageUrl: 'https://placehold.co/300x200',
    link: '#',
    imageHint: 'community dinner'
  },
  {
    id: '3',
    title: 'Session d\'information pour les bénévoles',
    date: '18 novembre 2023',
    summary: 'Découvrez comment vous pouvez contribuer avec votre temps et vos compétences au Projet Commugua. Tous sont les bienvenus !',
    imageUrl: 'https://placehold.co/300x200',
    link: '#',
    imageHint: 'volunteers meeting'
  },
  {
    id: '4',
    title: 'Plans architecturaux finalisés',
    date: '01 décembre 2023',
    summary: 'Nous sommes ravis de partager que les plans architecturaux de la nouvelle mosquée ont été finalisés.',
    imageUrl: 'https://placehold.co/300x200',
    link: '#',
    imageHint: 'architecture blueprint'
  },
  {
    id: '5',
    title: 'Lancement du programme jeunesse',
    date: '15 décembre 2023',
    summary: 'Introduction de nouveaux programmes éducatifs et récréatifs pour les jeunes de notre communauté.',
    imageUrl: 'https://placehold.co/300x200',
    link: '#',
    imageHint: 'youth group'
  },
];

export function NewsSection({ id }: NewsSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Newspaper className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Dernières Actualités & Mises à Jour
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Restez informés sur les progrès du Projet Commugua et les événements à venir.
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex space-x-6 p-4">
            {mockNewsItems.map((item) => (
              <Card key={item.id} className="w-[300px] md:w-[350px] flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  {item.imageUrl && (
                    <div className="relative h-40 w-full mb-4 rounded-t-lg overflow-hidden">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title} 
                        layout="fill" 
                        objectFit="cover" 
                        data-ai-hint={item.imageHint || "community event"}
                      />
                    </div>
                  )}
                  <CardTitle className="text-lg text-primary truncate">{item.title}</CardTitle>
                  <CardDescription className="flex items-center text-xs text-muted-foreground">
                    <CalendarDays className="h-3 w-3 mr-1.5" />
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground whitespace-normal line-clamp-3 mb-4">{item.summary}</p>
                  {item.link && (
                    <Button variant="link" size="sm" asChild className="p-0 h-auto text-primary hover:text-accent">
                      <Link href={item.link}>
                        Lire la suite <ExternalLink className="h-3 w-3 ml-1.5" />
                      </Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
             {/* Add a placeholder card to ensure scrollbar visibility if few items */}
            {mockNewsItems.length < 3 && <div className="w-1 flex-shrink-0"></div>}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}
