
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { PrivacyPolicyUpdateInfo } from '@/components/privacy-policy-update-info';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Projet Comugua',
  description: 'Consultez la politique de confidentialité du projet Comugua.',
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-8 print:hidden">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
        </Link>
      </Button>
      <article>
        <h1 className="text-3xl font-bold text-foreground mb-6">Politique de Confidentialité</h1>
        <div className="prose prose-lg max-w-none dark:prose-invert text-foreground space-y-4">
          <p>
            Bienvenue sur la page de notre politique de confidentialité. Cette section explique comment nous collectons, utilisons, et protégeons vos données personnelles lorsque vous utilisez notre site web.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">Collecte des informations</h2>
          <p>
            Nous pouvons collecter des informations personnelles identifiables, telles que votre nom, adresse e-mail, etc., uniquement lorsque vous nous les fournissez volontairement (par exemple, en remplissant un formulaire de contact ou en faisant une promesse de don).
          </p>
          <p>
            Nous utilisons également des cookies pour améliorer votre expérience sur notre site. Les cookies sont de petits fichiers stockés sur votre ordinateur qui nous aident à comprendre comment vous utilisez le site et à mémoriser vos préférences (comme l'acceptation de cette politique).
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Utilisation des informations</h2>
          <p>
            Les informations que nous collectons peuvent être utilisées pour :
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personnaliser votre expérience sur le site.</li>
            <li>Répondre à vos demandes ou questions.</li>
            <li>Traiter vos promesses de dons.</li>
            <li>Améliorer notre site web et nos services.</li>
            <li>Vous envoyer des communications occasionnelles si vous y avez consenti.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Protection des informations</h2>
          <p>
            Nous mettons en œuvre une variété de mesures de sécurité pour maintenir la sécurité de vos informations personnelles. Vos informations personnelles sont contenues derrière des réseaux sécurisés et ne sont accessibles que par un nombre limité de personnes qui ont des droits d'accès spéciaux à ces systèmes, et sont tenues de garder les informations confidentielles.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">Partage avec des tiers</h2>
          <p>
            Nous ne vendons, n'échangeons ni ne transférons d'aucune autre manière vos informations personnelles identifiables à des tiers sans votre consentement, sauf si la loi l'exige ou dans le cadre de la gestion de vos dons avec des prestataires de services sécurisés (par exemple, pour le traitement des paiements en ligne, le cas échéant).
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Vos droits</h2>
          <p>
            Conformément à la réglementation en vigueur (notamment le RGPD), vous avez le droit de demander l'accès, la correction, la suppression de vos données personnelles que nous détenons, ou de limiter leur traitement. Vous pouvez également vous opposer au traitement de vos données. Pour exercer ces droits, veuillez nous contacter.
          </p>
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
          <p>
            Comme mentionné, nous utilisons des cookies. Le cookie principal que nous utilisons actuellement est celui qui mémorise votre acceptation de cette politique de confidentialité afin de ne pas vous la présenter à chaque visite. En utilisant notre site après avoir accepté cette politique, vous consentez à notre utilisation de ce cookie fonctionnel. Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur, mais cela pourrait réafficher le bandeau de consentement à chaque visite et potentiellement affecter d'autres fonctionnalités du site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Modifications de notre politique de confidentialité</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé des mises à jour.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Nous contacter</h2>
          <p>
            Si vous avez des questions concernant cette politique de confidentialité, vous pouvez nous contacter en utilisant les informations fournies dans la section "Dons" ou "Nous Contacter" de notre site, ou à l'adresse e-mail : [Adresse e-mail de contact pour la confidentialité à préciser par l'association].
          </p>
          <PrivacyPolicyUpdateInfo />
        </div>
      </article>
    </div>
  );
}
