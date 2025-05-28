
export interface PrayerTimesData {
  timings: {
    Fajr: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Isha: string;
    Sunrise: string;
    Sunset: string;
    [key: string]: string; // Allow other prayer times if present
  };
  date: {
    readable: string;
    hijri: {
      date: string;
      day: string;
      month: {
        en: string;
        ar: string;
      };
      year: string;
    };
  };
}

export interface PrayerTimesApiResponse {
  code: number;
  status: string;
  data: PrayerTimesData;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  fullDescription?: string; // Ajouté pour la page de détail
  imageUrl?: string;
  link?: string; // Peut être utilisé pour des liens externes si nécessaire, sinon généré pour les pages internes
  imageHint?: string; // for data-ai-hint
}
