import { Copyright } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex items-center justify-center space-x-1">
          <Copyright className="h-4 w-4" />
          <span>{new Date().getFullYear()} Projet Commugua. Tous droits réservés.</span>
        </div>
        <p className="mt-2 text-xs">
          Conçu avec paix et esprit communautaire.
        </p>
      </div>
    </footer>
  );
}
