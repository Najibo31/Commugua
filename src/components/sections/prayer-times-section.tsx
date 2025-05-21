
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { PrayerTimesData, PrayerTimesApiResponse } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Clock, Sunrise, Sun, Sunset, Moon, AlertTriangle, CalendarDays } from 'lucide-react';

interface PrayerTimesSectionProps {
  id: string;
}

const prayerIcons = {
  Fajr: Sunrise,
  Dhuhr: Sun,
  Asr: Sun,
  Maghrib: Sunset,
  Isha: Moon,
};

export function PrayerTimesSection({ id }: PrayerTimesSectionProps) {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    async function fetchPrayerTimes() {
      setLoading(true);
      setError(null);
      try {
        // Using Pointe-à-Pitre, Guadeloupe. Method 8 for MWL.
        const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Pointe-a-Pitre&country=Guadeloupe&method=8');
        if (!response.ok) {
          throw new Error(`La requête API a échoué avec le statut ${response.status}`);
        }
        const data: PrayerTimesApiResponse = await response.json();
        if (data.code === 200 && data.data) {
          setPrayerTimes(data.data);
        } else {
          throw new Error(data.status || 'Échec de la récupération des horaires de prière');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Une erreur inconnue est survenue');
        console.error("Erreur lors de la récupération des horaires de prière:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPrayerTimes();
    
    const today = new Date();
    setCurrentDate(today.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

  }, []);

  const displayablePrayers: (keyof typeof prayerIcons)[] = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  return (
    <section id={id} className="relative py-16 md:py-24">
      <div className="absolute inset-0">
        <Image 
          src="https://placehold.co/1920x1080" 
          alt="Intérieur paisible de mosquée" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-20"
          data-ai-hint="mosque interior"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Horaires des Prières Quotidiennes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Restez connectés avec vos prières quotidiennes. Horaires pour Pointe-à-Pitre, Guadeloupe.
          </p>
        </div>

        {loading && (
          <Card className="max-w-2xl mx-auto bg-card/80 shadow-xl">
            <CardHeader className="text-center">
              <Skeleton className="h-8 w-3/4 mx-auto mb-2" />
              <Skeleton className="h-4 w-1/2 mx-auto" />
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              {displayablePrayers.map((prayerName) => (
                <div key={prayerName} className="flex justify-between items-center p-3 rounded-lg bg-background/50">
                  <div className="flex items-center space-x-3">
                    <Skeleton className="h-6 w-6 rounded-full" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                  <Skeleton className="h-5 w-16" />
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {error && !loading && (
           <Alert variant="destructive" className="max-w-2xl mx-auto bg-destructive/10 border-destructive/30 text-destructive">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle>Erreur de récupération des horaires de prière</AlertTitle>
            <AlertDescription>{error}. Veuillez essayer de rafraîchir la page plus tard.</AlertDescription>
          </Alert>
        )}

        {prayerTimes && !loading && !error && (
          <Card className="max-w-2xl mx-auto bg-card/90 shadow-xl backdrop-blur-md">
            <CardHeader className="text-center border-b pb-4">
              <CardTitle className="text-2xl text-primary flex items-center justify-center space-x-2">
                <CalendarDays className="h-6 w-6" /> 
                <span>{prayerTimes.date.readable}</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {currentDate} | {prayerTimes.date.hijri.date} {prayerTimes.date.hijri.month.en}, {prayerTimes.date.hijri.year} AH
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 p-4 md:p-6">
              {displayablePrayers.map((prayerName) => {
                const IconComponent = prayerIcons[prayerName];
                return (
                  <div 
                    key={prayerName} 
                    className="flex justify-between items-center p-3 md:p-4 rounded-lg bg-background/60 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      <span className="text-base md:text-lg font-medium text-foreground">{prayerName}</span>
                    </div>
                    <span className="text-base md:text-lg font-semibold text-primary">{prayerTimes.timings[prayerName]}</span>
                  </div>
                );
              })}
               <div className="text-center pt-3 text-xs text-muted-foreground">
                Lever du soleil : {prayerTimes.timings.Sunrise} | Coucher du soleil : {prayerTimes.timings.Sunset}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
