
export interface PlanImage {
  id: string;
  src: string;
  alt: string;
  description: string;
  aiHint: string;
}

export const mosquePlans: PlanImage[] = [
  {
    id: 'plan-1',
    src: 'https://i.postimg.cc/mgvdqWhL/Vue_Mosqu_e_1.png',
    alt: 'Plan de la mosquée - Vue globale',
    description: 'Vue globale du projet de la mosquée El OUMMA.',
    aiHint: 'mosque blueprint'
  },
  {
    id: 'plan-2',
    src: 'https://i.postimg.cc/g2CM5brd/Vue_Mosqu_e_2.png',
    alt: 'Plan des salles de prière et espace imam',
    description: 'Détail des salles de prière pour hommes et femmes, et de l\'espace privé de l\'imam.',
    aiHint: 'prayer hall blueprint'
  },
  {
    id: 'plan-3',
    src: 'https://i.postimg.cc/x1ws7VqS/Vue_Mosqu_e_3.png',
    alt: 'Plan des salles de prière et salle d\'ablution hommes',
    description: 'Deuxième vue sur les salles de prières et la salle des ablutions pour hommes.',
    aiHint: 'prayer hall layout'
  },
  {
    id: 'plan-4',
    src: 'https://i.postimg.cc/YC5XVBjc/Vue_Mosqu_e_4.png',
    alt: 'Vue sur la façade de l\'entrée',
    description: 'Vue sur la façade principale et l\'entrée de la mosquée.',
    aiHint: 'mosque facade design'
  },
  {
    id: 'plan-5',
    src: 'https://i.postimg.cc/htkCwRhn/Vue_Mosqu_e_5.png',
    alt: 'Plan de la salle des chaussures et ablutions',
    description: 'Plan de la salle de chaussures située entre l\'entrée et la salle d\'ablution pour hommes.',
    aiHint: 'mosque interior blueprint'
  },
  {
    id: 'plan-6',
    src: 'https://i.postimg.cc/T3zkSvh6/Vue_Mosqu_e_6.png',
    alt: 'Plan de l\'entrée et salle d\'ablution femmes',
    description: 'Plan de l\'entrée dédiée aux femmes et de leur salle d\'ablution.',
    aiHint: 'mosque layout women'
  }
];
