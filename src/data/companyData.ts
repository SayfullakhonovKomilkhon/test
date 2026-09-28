export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  included: string[];
  imageUrl: string;
  badgeText: string;
  idealFor: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'kontor' | 'team' | 'detaljer' | 'spesial';
  categoryLabel: string;
  description: string;
  location: string;
  imageUrl: string;
  aspectClass: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  highlight: string;
}

export const COMPANY_INFO = {
  name: '3R RENHOLD AS',
  orgNumber: '825 259 082',
  foundedYear: '2020',
  employeeCount: 7,
  address: {
    street: 'Tenorveien 2A',
    postalCode: '1859',
    city: 'Slitu',
    country: 'Norge',
    municipality: 'Indre Østfold',
    region: 'Østfold / Viken',
  },
  contact: {
    phone: '+47 69 88 00 00',
    displayPhone: '+47 69 88 00 00',
    email: 'post@3rrenhold.no',
    hours: 'Mandag – Fredag: 07:00 – 17:00',
    emergencyHours: 'Døgnvakt etter forhåndsavtale for bedrifter',
  },
  certifications: [
    'Offentlig godkjent renholdsbedrift (Arbeidstilsynet)',
    'Registrert i Renholdsregisteret',
    'HMS-kort på samtlige ansatte',
    'Miljøvennlige svanemerkede kjemikalier',
  ],
  tagline: 'Rent. Trygt. Profesjonelt.',
  subheading: 'Profesjonelle renholdstjenester for bedrifter og private i Norge.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'bedriftsrenhold',
    title: 'Bedriftsrenhold',
    tagline: 'Regelmessig renhold for kontorer og næringseiendom',
    shortDesc: 'Regelmessig renhold av kontorer og kommersielle lokaler tilpasset bedriftens åpningstider og arbeidshverdag.',
    fullDesc: 'Et rent og representativt kontormiljø øker trivselen, reduserer sykefravær og gir besøkende et profesjonelt førsteinntrykk. Vi skreddersyr en renholdsplan basert på lokalenes størrelse, slitasje og bruksmønster.',
    included: [
      'Støvtørking av pulter, frie flater og teknisk utstyr',
      'Støvsuging og vask av gulvflater med skånsomme midler',
      'Desinfisering av kontaktflater (dørhåndtak, lysbrytere)',
      'Tømming av avfallsbøtter og kildesortering',
      'Renhold av møterom og fellesarealer',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    badgeText: 'Bedriftsavtale',
    idealFor: 'Kontorer, næringsbygg, klinikker og institusjoner',
  },
  {
    id: 'daglig-renhold',
    title: 'Daglig renhold',
    tagline: 'Kontinuerlig renhet og sunn hygiene i hverdagen',
    shortDesc: 'Profesjonelt daglig renhold som opprettholder et ulastelig og innbydende arbeidsmiljø dag etter dag.',
    fullDesc: 'For lokaler med høy aktivitet er kontinuerlig renhold avgjørende for god innendørs luftkvalitet og smittevern. Våre faste renholdere sørger for at alt er klargjort før arbeidsdagen starter.',
    included: [
      'Daglig overflaterenhold og tørrmopping/fuktmopping',
      'Komplett rengjøring og desinfisering av toaletter',
      'Påfylling av forbruksmateriell (papir, såpe, desinfeksjon)',
      'Rydding og rengjøring av kjøkkenkrok/kantineområder',
      'Løpende kvalitetskontroll etter fastsatte sjekklister',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    badgeText: 'Faste rutiner',
    idealFor: 'Kjøpesentre, åpne kontorlandskap og skoler',
  },
  {
    id: 'hovedvask',
    title: 'Hovedvask',
    tagline: 'Grundig dyprens fra gulv til tak',
    shortDesc: 'Dyp og grundig rengjøring av alle flater, kriker og kroker med profesjonelt spesialutstyr.',
    fullDesc: 'Selv med godt daglig renhold samler det seg smuss på utilgjengelige steder over tid. En periodisk hovedvask fornyer lokalene og fjerner fastgrodd støv, fett og urenheter.',
    included: [
      'Vask av vegger, tak, karmer, lister og dører',
      'Rengjøring bak og under tunge møbler og radiatorer',
      'Grundig avkalking av fliser og fuger på våtrom',
      'Dyprens av ventilasjonsventiler og belysningselementer',
      'Maskinell skuring og overflatebeskyttelse av gulv',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    badgeText: 'Dyprens',
    idealFor: 'Årlig oppfrisking, etter renovering eller før sesongstart',
  },
  {
    id: 'flyttevask',
    title: 'Flyttevask',
    tagline: 'Komplett utvask med 100% godkjent-garanti',
    shortDesc: 'Total og grundig nedvask før eller etter overtakelse av bolig eller næringslokaler med overtakelsesgaranti.',
    fullDesc: 'Kravene til flyttevask er strenge ved boligsalg og avslutning av leieforhold. Vi garanterer at vasken blir godkjent av ny eier eller utleier, og retter eventuelle mangler kostnadsfritt innen 48 timer.',
    included: [
      'Rengjøring av hvitevarer innvendig og utvendig (ovn, kjøleskap, oppvaskmaskin)',
      'Rens av sluk, rør og avtrekksvifter',
      'Vask av alle skap, skuffer og hyller på inn- og utsider',
      'Vindusvask innvendig og utvendig (inkludert karmer)',
      'Skriftlig garantiattest for overtakelse',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    badgeText: 'Overtakelsesgaranti',
    idealFor: 'Boligsalg, utleieskifte og flytting av bedriftslokaler',
  },
  {
    id: 'vindusvask',
    title: 'Vindusvask',
    tagline: 'Krystallklart resultat uten striper eller skjolder',
    shortDesc: 'Skånsom og effektiv vask av vinduer, glassfasader og innvendige glassvegger for optimalt lysinnslipp.',
    fullDesc: 'Rene vinduer slipper inn maksimalt dagslys og forbedrer både fasadens utseende og trivselen innendørs. Vi benytter spesialvann og ergonomiske nalemetoder for et perfekt, stripefritt resultat.',
    included: [
      'Vask av ruter på innside og utside',
      'Avtørking av karmer, sprosser og sålebenker',
      'Innvendige glassvegger i kontorlandskap',
      'Fjerning av kalkavleiringer og partikkelbelegg',
      'Tilgang til høythengende vinduer med teleskoputstyr',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80',
    badgeText: 'Stripefritt',
    idealFor: 'Fasader, butikkvinduer, kontorbygg og private boliger',
  },
  {
    id: 'spesialrengjoring',
    title: 'Spesialrengjøring',
    tagline: 'Skreddersydde oppdrag og teknisk krevende flater',
    shortDesc: 'Spesialiserte renholdstjenester som byggrenhold, tepperens, polishbehandling og luktsanering.',
    fullDesc: 'Ulike overflater krever spesialkunnskap og skånsomme metoder for å bevare materialenes levetid. Vi har kompetanse og maskinpark for de mest krevende oppgavene.',
    included: [
      'Byggvask og grovrengjøring etter håndverkere',
      'Dyprens og impregnering av tekstilmøbler og tepper',
      'Boning, polish og forsegling av linoleum og tregulv',
      'Desinfisering og luktnøytralisering',
      'Høytrykksvask av inngangspartier og utendørsarealer',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=900&q=80',
    badgeText: 'Teknisk ekspertise',
    idealFor: 'Byggeplasser, verksteder, restauranter og spesialanlegg',
  },
];

export const PILLARS: PillarItem[] = [
  {
    id: 'profesjonell-service',
    title: 'Profesjonell service',
    description: 'Våre faste medarbeidere har godkjent opplæring, bærer synlig ID og opptrer med diskresjon og høflighet i dine lokaler.',
    highlight: 'Kvalifisert personell med HMS-kort',
  },
  {
    id: 'hoy-kvalitet',
    title: 'Høy kvalitet',
    description: 'Vi følger strenge standarder for renholdskvalitet og benytter skånsomme, miljøvennlige produkter som beskytter overflatene.',
    highlight: 'Standardiserte kontrollpunkter',
  },
  {
    id: 'palitelighet',
    title: 'Pålitelighet',
    description: 'Forutsigbarhet er kjernen i vårt arbeid. Vi leverer presist til avtalt tid, med faste kontaktpersoner og klare avtaler.',
    highlight: 'Leveringsgaranti og punktlighet',
  },
  {
    id: 'tilpassede-losninger',
    title: 'Tilpassede løsninger',
    description: 'Ingen lokaler er like. Vi utarbeider en behovsrettet renholdsplan som matcher din turnus, budsjett og ønsker.',
    highlight: 'Fleksible renholdsavtaler',
  },
];

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Kontorrenhold i moderne kontorlandskap',
    category: 'kontor',
    categoryLabel: 'Kontor',
    description: 'Daglig støvtørking og overflaterenhold av åpne arbeidsstasjoner i Oslo/Viken-regionen.',
    location: 'Kontorbygg, Indre Østfold',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    aspectClass: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'gal-2',
    title: 'Profesjonell medarbeider i uniform',
    category: 'team',
    categoryLabel: 'Personale',
    description: 'Kvalifisert renholder utfører presisjonsrengjøring med moderne mikrofibersystem.',
    location: 'Næringsbygg, Slitu',
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-3',
    title: 'Plettfritt og innbydende møterom',
    category: 'detaljer',
    categoryLabel: 'Interiør',
    description: 'Hygieniske overflater og krystallklare glassvegger som gir et førsteklasses inntrykk.',
    location: 'Hovedkontor, Askim',
    imageUrl: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-4',
    title: 'Rengjøring av spiserom og kjøkken',
    category: 'detaljer',
    categoryLabel: 'Kjøkken',
    description: 'Desinfiserte benkeplater i rustfritt stål og hygienisk rengjorte fellesfasiliteter.',
    location: 'Bedriftskantine, Mysen',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-5',
    title: 'Grundig sanitærromsrenhold',
    category: 'detaljer',
    categoryLabel: 'Sanitær',
    description: 'Komplett avkalking og antibakteriell vask av toaletter, armaturer og fliser.',
    location: 'Kommunehus, Viken',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    aspectClass: 'md:col-span-1 md:row-span-1',
  },
  {
    id: 'gal-6',
    title: 'Avansert og miljøsertifisert utstyr',
    category: 'spesial',
    categoryLabel: 'Utstyr',
    description: 'HEPA-støvsugere, ergonomiske moppesystemer og svanemerkede rengjøringsmidler.',
    location: 'Sentralt lager, Slitu',
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=1200&q=80',
    aspectClass: 'md:col-span-2 md:row-span-1',
  },
];
