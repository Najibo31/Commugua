"use client";

import React, { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PRIVACY_ACCEPTED_KEY = 'comuguaPrivacyAccepted_v1';

export function PrivacyPopup() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const privacyAccepted = localStorage.getItem(PRIVACY_ACCEPTED_KEY);
      if (privacyAccepted !== 'true') {
        setIsOpen(true);
      }
    } catch (error) {
      // localStorage might be disabled or unavailable
      console.warn('localStorage not available, privacy popup might not behave as expected.', error);
      // Default to showing the popup if localStorage is problematic
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(PRIVACY_ACCEPTED_KEY, 'true');
    } catch (error) {
      console.warn('Failed to set privacy acceptance in localStorage.', error);
    }
    setIsOpen(false);
  };

  const handleCancel = () => {
    // Redirect the user away from the site
    // Using a common, neutral site. 'about:blank' can sometimes be blocked or feel abrupt.
    window.location.href = 'https://www.google.com'; 
  };

  if (!mounted) {
    return null; // Avoid SSR rendering issues and hydration mismatch
  }

  // If isOpen is false (either from localStorage or after accepting), don't render the dialog.
  if (!isOpen) {
    return null;
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={(openState) => {
      // This handler is called when the dialog attempts to open or close.
      // If privacy hasn't been accepted and an attempt is made to close it (e.g., via Escape key if not prevented),
      // we want to ensure our 'isOpen' state reflects that it should remain open.
      if (!localStorage.getItem(PRIVACY_ACCEPTED_KEY) && !openState) {
        setIsOpen(true); // Keep it open if not accepted
      } else {
        setIsOpen(openState);
      }
    }}>
      <AlertDialogContent
        // Prevent closing by Escape key until a choice is made
        onEscapeKeyDown={(e) => e.preventDefault()}
        className="max-w-md"
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg font-semibold">
            <Link href="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary focus:outline-none focus:ring-2 focus:ring-ring rounded">
              Règles de confidentialité
            </Link>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-sm text-muted-foreground py-2">
          Pour continuer à utiliser notre site et accéder à son contenu, veuillez lire et accepter nos <Link href="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">règles de confidentialité</Link>. Votre vie privée est importante pour nous.
        </AlertDialogDescription>
        <AlertDialogFooter className="mt-4 sm:justify-end space-x-2">
          <Button variant="outline" onClick={handleCancel} className="w-full sm:w-auto">
            Quitter le site
          </Button>
          <AlertDialogAction onClick={handleAccept} className="w-full sm:w-auto">
            Accepter et continuer
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

