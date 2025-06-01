
import { HeroSection } from '@/components/sections/hero-section';
import { PresentingUsSection } from '@/components/sections/presenting-us-section';
import { HistorySection } from '@/components/sections/history-section';
import { PrayerTimesSection } from '@/components/sections/prayer-times-section';
import { IslamSection } from '@/components/sections/islam-section';
import { DonationsSection } from '@/components/sections/donations-section';
import { NewsSection } from '@/components/sections/news-section';
import { PrivacyPopup } from '@/components/privacy-popup'; // Import the PrivacyPopup component

export default function Home() {
  return (
    <>
      <HeroSection id="accueil" />
      <PresentingUsSection id="qui-sommes-nous" />
      <NewsSection id="actualites" />
      <HistorySection id="histoire" />
      <PrayerTimesSection id="horaires-prieres" />
      <IslamSection id="islam" />
      <DonationsSection id="dons" />
      <PrivacyPopup /> {/* Add the PrivacyPopup here, so it only shows on the homepage */}
    </>
  );
}
