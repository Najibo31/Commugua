
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Home, UsersRound, Newspaper, BookOpen, Clock, Info, Handshake, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '#accueil', label: 'Accueil', icon: Home },
  { href: '#qui-sommes-nous', label: 'Qui Sommes-Nous ?', icon: UsersRound },
  { href: '#actualites', label: 'Actualités & Événements', icon: Newspaper },
  { href: '#histoire', label: 'Notre Histoire', icon: BookOpen },
  { href: '#horaires-prieres', label: 'Horaires des Prières', icon: Clock },
  { href: '#islam', label: 'Islam', icon: Info },
  { href: '#dons', label: 'Dons', icon: Handshake },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(storedTheme || systemTheme);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode, onClick?: () => void }) => {
    // For homepage links, check hash. For other pages, check pathname.
    const isActive = 
      (pathname === '/' && typeof window !== 'undefined' && window.location.hash === href) || 
      (pathname !== '/' && pathname === href);

    return (
      <Link
        href={href}
        onClick={onClick}
        className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive
            ? 'bg-primary/10 text-primary'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
        }`}
      >
        {children}
      </Link>
    );
  };

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
           <div className="h-8 w-8 bg-muted rounded-full animate-pulse" /> {/* Skeleton for theme toggle */}
        </div>
      </header>
    );
  }
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-2 md:ml-6"> {/* Increased space-x-1 to space-x-2 and added md:ml-6 */}
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
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
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6 flex flex-col">
                <SheetHeader>
                  <SheetTitle className="sr-only">Menu Principal</SheetTitle>
                </SheetHeader>
                <div className="flex justify-between items-center mb-4">
                   <Logo />
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon" aria-label="Fermer le menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-2 flex-grow overflow-y-auto">
                  {navItems.map((item) => (
                    <SheetClose key={item.label} asChild>
                       <NavLink href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </NavLink>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
