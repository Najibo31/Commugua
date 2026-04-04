
"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Home, UsersRound, Newspaper, BookOpen, Clock, Info, Handshake, Moon, Sun, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { usePathname } from 'next/navigation';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

const navItems = [
  { href: '/#accueil', label: 'Accueil', icon: Home },
  { href: '/#qui-sommes-nous', label: 'Qui Sommes-Nous ?', icon: UsersRound },
  { href: '/plans', label: 'Plans', icon: LayoutGrid },
  { href: '/#actualites', label: 'Actualités', icon: Newspaper },
  { href: '/#histoire', label: 'Notre Histoire', icon: BookOpen },
  { href: '/#horaires-prieres', label: 'Prières', icon: Clock },
  { href: '/#islam', label: 'Islam', icon: Info },
  { href: '/#dons', label: 'Dons', icon: Handshake },
];

// We need to use React.forwardRef for TooltipTrigger's asChild prop to work correctly with a custom component.
const NavLink = React.forwardRef<HTMLAnchorElement, { href: string; children: React.ReactNode; onClick?: () => void; 'data-active'?: boolean; }>(
  ({ href, children, onClick, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        onClick={onClick}
        className={`relative flex items-center gap-x-2 p-2.5 lg:px-3 lg:py-2 rounded-md text-sm font-medium transition-colors duration-200
          text-muted-foreground hover:text-foreground 
          data-[active=true]:text-primary`}
        {...props}
      >
        {children}
        {props['data-active'] && (
           <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full transition-all duration-300"></span>
        )}
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";


export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(storedTheme || systemTheme);

    const handleScroll = () => {
      const sections = navItems.filter(item => item.href.includes('#')).map(item => document.getElementById(item.href.substring(item.href.indexOf('#') + 1)));
      let currentSection = '';
      for (const section of sections) {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = `#${section.id}`;
        }
      }
      setActiveSection(currentSection);
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
    } else {
      setActiveSection(''); // Clear active section on other pages
    }

    return () => {
      if (pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname]);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
           <div className="h-8 w-8 bg-muted rounded-full animate-pulse" />
        </div>
      </header>
    );
  }
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <TooltipProvider delayDuration={0}>
          <nav className="hidden md:flex items-center">
            {navItems.map((item) => {
               const isHashLink = item.href.includes('#');
               const isActive = isHashLink
                 ? (pathname === '/' && activeSection === item.href.substring(item.href.indexOf('#')))
                 : pathname === item.href;
               return (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>
                    <NavLink href={item.href} data-active={isActive}>
                      <item.icon className="h-5 w-5" />
                      <span className="hidden lg:inline-block">{item.label}</span>
                    </NavLink>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="hidden md:block lg:hidden">
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
        </TooltipProvider>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Changer de thème">
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-4 flex flex-col">
                <SheetHeader className="flex flex-row justify-between items-center pb-4 border-b mb-4">
                  <Logo />
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Fermer le menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 flex-grow overflow-y-auto">
                  {navItems.map((item) => {
                    const isHashLink = item.href.includes('#');
                    const isActive = isHashLink
                      ? (pathname === '/' && activeSection === item.href.substring(item.href.indexOf('#')))
                      : pathname === item.href;
                    return (
                      <SheetClose key={item.label} asChild>
                         <Link 
                            href={item.href} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            data-active={isActive}
                            className="flex items-center gap-4 p-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                          >
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                 <div className="mt-auto border-t pt-4">
                   <Link 
                      href="https://www.croissancedigitale.pro/"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                   >
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
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
