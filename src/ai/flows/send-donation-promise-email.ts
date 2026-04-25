'use server';
/**
 * @fileOverview Flow pour gérer les soumissions de promesses de don.
 *
 * - sendDonationPromise: Traite la promesse de don et prépare l'envoi d'un e-mail de notification.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as nodemailer from 'nodemailer';

// Schéma de validation pour les données du formulaire, correspondant aux champs du formulaire.
const DonationPromiseInputSchema = z.object({
  fullName: z.string().min(2, "Le nom complet est requis."),
  email: z.string().email("L'adresse e-mail n'est pas valide."),
  amount: z.number().positive("Le montant doit être un nombre positif."),
  frequency: z.enum(["Ponctuel", "Mensuel", "Annuel"]),
  comment: z.string().optional(),
});


// Ceci est la fonction principale qui sera appelée depuis le composant React du formulaire.
export async function sendDonationPromise(input: any): Promise<{ success: boolean; message: string }> {
  // Elle appelle le flow Genkit pour exécuter la logique côté serveur.
  // La validation des données est assurée par le `inputSchema` du flow ci-dessous.
  return sendDonationPromiseFlow(input);
}

// Définition du flow Genkit.
const sendDonationPromiseFlow = ai.defineFlow(
  {
    name: 'sendDonationPromiseFlow',
    inputSchema: DonationPromiseInputSchema,
    outputSchema: z.object({ success: z.boolean(), message: z.string() }),
  },
  async (input) => {
    // Vérification cruciale des variables d'environnement
    if (!process.env.EMAIL_SENDER || !process.env.EMAIL_SENDER_PASSWORD || !process.env.EMAIL_RECEIVER) {
        console.error("Erreur de configuration: Les variables d'environnement pour l'e-mail (EMAIL_SENDER, EMAIL_SENDER_PASSWORD, EMAIL_RECEIVER) ne sont pas définies dans le fichier .env ou .env.local");
        return { success: false, message: "Erreur de configuration du serveur. L'envoi de la promesse est impossible." };
    }

    try {
      // Configuration de l'envoi d'e-mail
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_SENDER,
          pass: process.env.EMAIL_SENDER_PASSWORD,
        },
      });

      const mailOptions = {
        from: `"Projet Comugua" <${process.env.EMAIL_SENDER}>`,
        to: process.env.EMAIL_RECEIVER,
        subject: `Nouvelle Promesse de Don pour le Projet El OUMMA de ${input.fullName}`,
        html: `
          <h1>Nouvelle Promesse de Don</h1>
          <p>Une nouvelle promesse de don a été enregistrée sur le site.</p>
          <h2>Détails :</h2>
          <ul>
            <li><strong>Nom complet :</strong> ${input.fullName}</li>
            <li><strong>E-mail du donateur :</strong> ${input.email}</li>
            <li><strong>Montant :</strong> ${input.amount} €</li>
            <li><strong>Fréquence :</strong> ${input.frequency}</li>
            <li><strong>Commentaire :</strong> ${input.comment || 'Aucun'}</li>
          </ul>
          <hr>
          <p>Cet e-mail a été envoyé automatiquement depuis le site du projet Comugua.</p>
        `,
      };
      
      // La ligne ci-dessous est toujours en commentaire. 
      // Décommentez-la quand vous aurez configuré votre fichier .env ou .env.local
      // await transporter.sendMail(mailOptions);

      // Log pour simuler l'envoi pendant le développement
      console.log('--- SIMULATION ENVOI EMAIL ---');
      console.log('De:', mailOptions.from);
      console.log('À:', mailOptions.to);
      console.log('Sujet:', mailOptions.subject);
      console.log('Email envoyé (simulation). Pour un envoi réel, configurez vos variables d\'environnement et décommentez le code.');

      return { success: true, message: 'Votre promesse de don a été enregistrée avec succès.' };

    } catch (error) {
      console.error("Erreur lors de la tentative d'envoi de l'e-mail:", error);
      // En cas d'échec, le flow retourne un message d'erreur.
      return { success: false, message: "Une erreur technique est survenue lors de l'envoi de votre promesse." };
    }
  }
);
