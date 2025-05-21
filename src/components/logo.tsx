
import type { SVGProps } from 'react';
import Link from 'next/link';

const CommuguaLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M50,10A40,40,0,0,0,18.69,28.69L25.76,35.76A30,30,0,1,1,25.76,64.24L18.69,71.31A40,40,0,1,0,50,10Z" />
    <path d="M50,30A20,20,0,1,0,70,50,20,20,0,0,0,50,30ZM50,60A10,10,0,1,1,60,50,10,10,0,0,1,50,60Z" />
    <path d="M80,45H90V55H80Z" />
    <path d="M10,45H20V55H10Z" />
  </svg>
);


export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 text-2xl font-bold ${className}`}>
      <CommuguaLogoIcon className="h-8 w-8 text-primary" />
      <span className="text-foreground">Commugua</span> <span className="text-primary">Projet</span>
    </Link>
  );
}
