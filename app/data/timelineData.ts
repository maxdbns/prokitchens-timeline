export interface Step {
  step: string;
  calendar: string;
  responsible: string;
  risk?: string;
}

export interface Phase {
  id: string;
  title: string;
  duration: string;
  description: string;
  steps: Step[];
}

export const timelineData: Phase[] = [
  {
    id: "preparation",
    title: "Préparation du Projet",
    duration: "Durée variable",
    description: "Fondations et validation du concept",
    steps: [
      { step: "Définir le concept (marque, offre, zone de livraison, positionnement)", calendar: "Avant signature", responsible: "Client", risk: "Concept insuffisamment cadré" },
      { step: "Élaborer le prévisionnel économique (CA, charges, équipe, rentabilité)", calendar: "Avant signature", responsible: "Client", risk: "Hypothèses non réalistes" },
      { step: "Valider le budget de lancement et la trésorerie disponible", calendar: "Avant signature", responsible: "Client", risk: "Sous-capitalisation / Non-obtention financement" },
      { step: "Choisir le site et valider l'emplacement", calendar: "Avant signature", responsible: "Client + ProKitchens", risk: "Clientèle cible non conforme à la zone" },
      { step: "Validation finale du projet par les décideurs", calendar: "Avant signature", responsible: "Client", risk: "Mauvais alignement entre décideurs / manque de communication" },
      { step: "Vérification finale de l'ensemble du projet", calendar: "Juste avant signature", responsible: "Client + ProKitchens" },
    ],
  },
  {
    id: "contractual",
    title: "Mise en Place Contractuelle",
    duration: "3 jours à 2 mois",
    description: "Accords et premiers paiements",
    steps: [
      { step: "Signature du contrat", calendar: "2 mois avant lancement", responsible: "Client + ProKitchens" },
      { step: "Règlement du Forfait Remboursable", calendar: "Sous 3 jours après signature", responsible: "Client", risk: "Trésorerie / validation interne" },
      { step: "Règlement des Frais d'Intégration", calendar: "Sous 3 jours après signature", responsible: "Client", risk: "Trésorerie / validation interne" },
      { step: "Réunion de lancement avec le Responsable Onboarding", calendar: "Dès règlement", responsible: "Client + ProKitchens", risk: "Réunion trop tardive vis-à-vis de la date de lancement souhaitée" },
      { step: "Règlement de la première Redevance mensuelle", calendar: "Au plus tard 10 jours avant", responsible: "Client", risk: "Trésorerie / validation interne / alignement date de démarrage" },
    ],
  },
  {
    id: "administrative",
    title: "Formalités Administratives",
    duration: "10 jours à 6 semaines",
    description: "Enregistrement légal et conformité",
    steps: [
      { step: "Création de la société (si nécessaire)", calendar: "Avant signature", responsible: "Client", risk: "Durées différentes en fonction des greffes" },
      { step: "Création d'un établissement secondaire", calendar: "10 jours à 6 semaines", responsible: "Client", risk: "Durées différentes en fonction des greffes" },
      { step: "Souscription de l'assurance multirisques professionnelle", calendar: "1 jour à 1 semaine", responsible: "Client", risk: "Dépend du broker" },
      { step: "Transmission des documents administratifs à notre Responsable Onboarding", calendar: "1 à 2 semaines", responsible: "Client", risk: "Retard / omission document" },
    ],
  },
  {
    id: "regulatory",
    title: "Conformité Réglementaire",
    duration: "2 à 4 semaines",
    description: "Sécurité alimentaire et normes de consommation",
    steps: [
      { step: "Déclaration DDPP (autorités sécurité alimentaire)", calendar: "2-4 semaines avant ouverture", responsible: "Client" },
      { step: "Formation hygiène alimentaire HACCP", calendar: "2-4 semaines avant ouverture", responsible: "Client" },
      { step: "Mise en place du tableau des allergènes", calendar: "Avant ouverture", responsible: "Client" },
    ],
  },
  {
    id: "works",
    title: "Travaux & Installation Cuisine",
    duration: "1 semaine à 12 semaines",
    description: "Déploiement physique et équipement",
    steps: [
      { step: "Transmission de la liste d'équipement et plan de cuisine", calendar: "Sous 1 semaine après signature", responsible: "Client", risk: "Manque de précision des informations transmises pouvant causer du retard" },
      { step: "Validation technique des équipements", calendar: "Sous 1 semaine", responsible: "ProKitchens", risk: "Conformité / Puissance électrique" },
      { step: "Validation du devis et paiement des travaux", calendar: "1 jour", responsible: "Client", risk: "Trésorerie / validation interne" },
      { step: "Achat ou location du matériel", calendar: "1-2 semaines", responsible: "Client", risk: "Délais fournisseurs / Coûts" },
      { step: "Livraison des équipements", calendar: "1-12 semaines", responsible: "Client + Fournisseur", risk: "Dépend livraison" },
      { step: "Réalisation des travaux éventuels", calendar: "10 jours à 3 semaines", responsible: "ProKitchens", risk: "Dépend délai réception des pièces et complexité des travaux" },
      { step: "Signature du PV de réception des travaux", calendar: "1 heure", responsible: "ProKitchens + Client" },
      { step: "Installation et mise en service du matériel", calendar: "3-6 semaines", responsible: "Client" },
      { step: "État des lieux d'entrée", calendar: "1 heure", responsible: "Client + ProKitchens" },
    ],
  },
  {
    id: "operations",
    title: "Préparation de l'Activité",
    duration: "Durée variable",
    description: "Menu, approvisionnements et équipe",
    steps: [
      { step: "Finalisation de la carte / des menus", calendar: "Continu", responsible: "Client", risk: "Offre non stabilisée" },
      { step: "Choix des emballages et consommables", calendar: "Continu", responsible: "Client", risk: "Problèmes qualité / Coûts / Délais livraison" },
      { step: "Choix des fournisseurs alimentaires", calendar: "Continu", responsible: "Client", risk: "Délais fournisseurs / Coûts" },
      { step: "Recrutement ou mobilisation de l'équipe", calendar: "Continu", responsible: "Client", risk: "Nombre ETP insuffisant / Mauvais profils" },
      { step: "Formation des équipes aux procédures internes", calendar: "Continu", responsible: "Client", risk: "Process de formation inadapté ou incomplet" },
    ],
  },
  {
    id: "delivery",
    title: "Intégration Plateformes de Livraison",
    duration: "1-6 semaines au total",
    description: "Activation des canaux de commande en ligne",
    steps: [
      { step: "Création ou activation des comptes sur les plateformes de livraison", calendar: "2-6 semaines", responsible: "Client", risk: "Dépend Uber / Deliveroo et délais de réponse du client" },
      { step: "Intégration des comptes sur les plateformes de livraison dans notre logiciel Otter", calendar: "1-2 jours", responsible: "Client + ProKitchens" },
      { step: "Création des menus et ajout des photos sur les plateformes", calendar: "1-2 jours", responsible: "Client", risk: "Menu peu fourni ou mal pensé / Photos peu attrayantes / Peu de possibilités d'upsell" },
    ],
  },
  {
    id: "launch",
    title: "Lancement Officiel",
    duration: "1 semaine à 3 jours avant ouverture",
    description: "Tests finaux et mise en ligne",
    steps: [
      { step: "Tests matériels et premières commandes test", calendar: "1 semaine à 3 jours avant le lancement", responsible: "Client", risk: "Pas de phase de test, ou trop tardive pour rectifier" },
      { step: "Lancement officiel de l'activité", calendar: "Entre 2 semaines et 2 mois après la signature du contrat", responsible: "Client" },
    ],
  },
];
