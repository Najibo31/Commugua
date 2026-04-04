
import { Copyright } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex items-center justify-center space-x-1">
          <Copyright className="h-4 w-4" />
          <span>{new Date().getFullYear()} Projet Comugua. Tous droits réservés.</span>
        </div>
        <p className="mt-2 text-xs">
          Conçu avec paix et esprit communautaire.
        </p>
        <div className="mt-2 text-xs space-x-4">
          <Link href="/politique-de-confidentialite" className="hover:text-primary hover:underline">
            Politique de Confidentialité
          </Link>
          <Link href="/mentions-legales" className="hover:text-primary hover:underline">
            Mentions Légales & CGU
          </Link>
        </div>
        <div className="mt-6 border-t pt-6">
          <Link href="https://www.croissancedigitale.pro/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
            <Image
              src="https://i.postimg.cc/J4dnF46r/Digitale_Récupéré.png"
              alt="Logo Croissance Digitale"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>Fait par Croissance Digitale</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

    