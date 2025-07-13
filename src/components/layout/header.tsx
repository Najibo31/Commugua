
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
  { href: '#actualites', label: 'Actualités', icon: Newspaper },
  { href: '#histoire', label: 'Notre Histoire', icon: BookOpen },
  { href: '#horaires-prieres', label: 'Prières', icon: Clock },
  { href: '#islam', label: 'Islam', icon: Info },
  { href: '#dons', label: 'Dons', icon: Handshake },
];

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
      const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
      let currentSection = '';
      sections.forEach(section => {
        if (section && window.scrollY >= section.offsetTop - 100) {
          currentSection = `#${section.id}`;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
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
    const isActive = (pathname === '/' && activeSection === href) || (pathname !== '/' && pathname === href);

    return (
      <Link
        href={href}
        onClick={onClick}
        data-active={isActive}
        className={`relative flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
          text-muted-foreground hover:text-foreground 
          data-[active=true]:text-primary`}
      >
        {children}
        {isActive && (
           <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full transition-all duration-300"></span>
        )}
      </Link>
    );
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
        <nav className="hidden md:flex items-center space-x-1">
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
                  {navItems.map((item) => (
                    <SheetClose key={item.label} asChild>
                       <Link 
                          href={item.href} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          data-active={activeSection === item.href}
                          className="flex items-center gap-4 p-3 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                        >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
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
