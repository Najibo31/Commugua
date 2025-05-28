
import type { NewsItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Image from 'next/image';
import Link from 'next/link';
import { Newspaper, CalendarDays, ExternalLink, Info } from 'lucide-react';
import { religiousEvents } from '@/lib/events-data'; // Import from the new data file

interface NewsSectionProps {
  id: string;
}

export function NewsSection({ id }: NewsSectionProps) {
  const eventsFor2025 = religiousEvents.filter(event => event.date.includes('2025'));

  return (
    <section id={id} className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Newspaper className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Calendrier Religieux 2025
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Découvrez les dates importantes de notre calendrier religieux pour l'année 2025. Cliquez sur "Plus d'infos" pour en savoir plus sur chaque événement.
          </p>
        </div>

        {eventsFor2025.length > 0 ? (
          <ScrollArea className="w-full whitespace-nowrap rounded-lg">
            <div className="flex space-x-6 p-4">
              {eventsFor2025.map((item) => (
                <Card key={item.id} className="w-[300px] md:w-[350px] flex-shrink-0 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                  <CardHeader>
                    {item.imageUrl && (
                      <div className="relative h-40 w-full mb-4 rounded-t-lg overflow-hidden">
                        <Image 
                          src={item.imageUrl} 
                          alt={item.title} 
                          layout="fill" 
                          objectFit="cover" 
                          data-ai-hint={item.imageHint || "religious event"}
                        />
                      </div>
                    )}
                    <CardTitle className="text-lg text-primary whitespace-normal">{item.title}</CardTitle>
                    <CardDescription className="flex items-center text-xs text-muted-foreground">
                      <CalendarDays className="h-3 w-3 mr-1.5" />
                      {item.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-sm text-muted-foreground whitespace-normal line-clamp-3 mb-4 flex-grow">{item.summary}</p>
                    <Button variant="link" size="sm" asChild className="p-0 h-auto text-primary hover:text-accent self-start mt-auto">
                      <Link href={`/actualites/${item.id}`}>
                        Plus d'infos <Info className="h-3 w-3 ml-1.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {/* Placeholder pour la visibilité de la scrollbar si peu d'items */}
              {eventsFor2025.length < 3 && <div className="w-1 flex-shrink-0"></div>}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        ) : (
          <p className="text-center text-muted-foreground">Aucun événement religieux répertorié pour 2025 pour le moment.</p>
        )}
      </div>
    </section>
  );
}
