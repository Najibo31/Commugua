
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales & CGU - Projet Comugua',
  description: 'Consultez les mentions légales et les conditions générales d\'utilisation du projet Comugua.',
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <Button asChild variant="outline" className="mb-8 print:hidden">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Retour à l'accueil
        </Link>
      </Button>
      <article>
        <h1 className="text-3xl font-bold text-foreground mb-6">Mentions Légales & Conditions Générales d’Utilisation</h1>
        <div className="prose prose-lg max-w-none dark:prose-invert text-foreground space-y-4">
          
          <h2 className="text-2xl font-semibold mt-6 mb-2">1. Présentation du site.</h2>
          <p>
            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Propriétaire :</strong> Mosquée de Guadeloupe – Association Comugua</li>
            <li><strong>Responsable publication :</strong> Président de la Mosquée de Guadeloupe. Le responsable publication est une personne physique ou une personne morale.</li>
            <li><strong>Hébergeur :</strong> OVH – 2 rue Kellermann – 59100 Roubaix – France</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">2. Conditions générales d’utilisation du site et des services proposés.</h2>
          <p>
            L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
          </p>
          <p>
            Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
          </p>
          <p>
            Le site est mis à jour régulièrement par les responsables de publication. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">3. Description des services fournis.</h2>
          <p>
            Le site a pour objet de fournir une information concernant l’ensemble des activités de l'association Comugua et du projet de la Mosquée de Guadeloupe.
          </p>
          <p>
            L'association s’efforce de fournir sur son site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">4. Limitations contractuelles sur les données techniques.</h2>
          <p>
            Le site utilise la technologie JavaScript et des frameworks modernes. Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis à jour.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">5. Propriété intellectuelle et contrefaçons.</h2>
          <p>
            L'association Comugua est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de l'association Comugua.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">6. Limitations de responsabilité.</h2>
          <p>
            L'association Comugua ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
          </p>
          <p>
            Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. L'association Comugua se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, l'association Comugua se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie…).
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">7. Gestion des données personnelles.</h2>
          <p>
            La gestion des données personnelles est détaillée dans notre <Link href="/politique-de-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">8. Liens hypertextes et cookies.</h2>
          <p>
            Le site contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de l'association Comugua. Cependant, l'association Comugua n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
          </p>
          <p>
            La navigation sur le site est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur, comme détaillé dans notre <Link href="/politique-de-confidentialite" className="text-primary hover:underline">Politique de Confidentialité</Link>.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">9. Droit applicable et attribution de juridiction.</h2>
          <p>
            Tout litige en relation avec l’utilisation du site est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">10. Les principales lois concernées.</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Loi n° 78-87 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et aux libertés.</li>
            <li>Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">11. Lexique.</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Utilisateur :</strong> Internaute se connectant, utilisant le site susnommé.</li>
            <li><strong>Informations personnelles :</strong> « les informations qui permettent, sous quelque forme que ce soit, directement ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">12. Crédits et droits d'images.</h2>
          <p>
            Sauf mention contraire, les images utilisées sur les différentes pages de ce site sont la propriété de l'association Comugua ou ont été téléchargées sur des sites comme Unsplash et Pexels, et présumées libres de droits. Si vous détenez la propriété de l’une de ces images et que vous souhaitez la voir créditée ou supprimée de nos pages, merci de nous contacter, nous ferons le nécessaire aussi rapidement que possible.
          </p>

        </div>
      </article>
    </div>
  );
}

    