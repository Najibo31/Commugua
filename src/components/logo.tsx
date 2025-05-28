
import type { SVGProps } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 text-2xl font-bold ${className}`}>
      <Image
        src="https://i.postimg.cc/Rh3dTLXc/logo-mosqu-e.png"
        alt="Logo Comugua Projet"
        width={40} // Augmenté de 32 à 40
        height={40} // Augmenté de 32 à 40
        className="h-10 w-10" // Augmenté de h-8 w-8 à h-10 w-10
      />
      <span className="text-foreground">Comugua</span> <span className="text-primary">Projet</span>
    </Link>
  );
}
