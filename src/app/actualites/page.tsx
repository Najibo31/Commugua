
import { religiousEvents } from '@/lib/events-data';
import type { NewsItem } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

interface EventDetailPageProps {
  params: { eventId: string };
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const event = religiousEvents.find(e => e.id === params.eventId);
  if (!event) {
    return {
      title: 'Événement non trouvé',
    };
  }
  return {
    title: `${event.title} - Actualités Comugua`,
    description: event.summary,
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const event = religiousEvents.find(e => e.id === params.eventId);

  if (!event) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Événement non trouvé</h1>
        <p className="text-muted-foreground mb-6">Désolé, l'événement que vous recherchez n'a pas pu être trouvé.</p>
        <Button asChild>
          <Link href="/#actualites">
            <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux actualités
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Button asChild variant="outline" className="mb-8">
        <Link href="/#actualites">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour aux actualités
        </Link>
      </Button>

      <Card className="shadow-xl">
        <CardHeader className="border-b">
          <CardTitle className="text-3xl md:text-4xl text-primary">{event.title}</CardTitle>
          <CardDescription className="flex items-center text-md text-muted-foreground pt-2">
            <CalendarDays className="h-5 w-5 mr-2 text-primary" />
            {event.date}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          {event.imageUrl && (
            <div className="relative h-64 md:h-96 w-full mb-6 rounded-lg overflow-hidden shadow-md">
              <Image 
                src={event.imageUrl} 
                alt={event.title} 
                layout="fill" 
                objectFit="cover" 
                data-ai-hint={event.imageHint || "religious event detail"}
              />
            </div>
          )}
          <div className="prose prose-lg max-w-none dark:prose-invert text-foreground">
            <p className="text-lg leading-relaxed mb-4">{event.summary}</p>
            {event.fullDescription && (
              <p className="text-md leading-relaxed whitespace-pre-line">{event.fullDescription}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Optionnel: Si vous souhaitez générer statiquement ces pages
export async function generateStaticParams() {
  return religiousEvents.map(event => ({
    eventId: event.id,
  }));
}
