"use client";

import React, { useState, useEffect } from 'react';

export function PrivacyPolicyUpdateInfo() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // This will only run on the client, after initial hydration
    setLastUpdated(new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <p className="text-sm text-muted-foreground mt-8">
      Dernière mise à jour : {lastUpdated || "Chargement..."}
    </p>
  );
}
