import { Plan, BlogPost, Review, FaqItem, DeviceBrand } from "./types";

export const standardPlans: Plan[] = [
  {
    id: "std-6m",
    duration: 6,
    price: 39,
    pricePerMonth: "6,50",
    previousPrice: 79,
    popular: false,
    screens: 1,
    features: [
      "SD/HD/FULL HD/4K/8K/HDR-VR",
      "+80.000 Kanalen + Netflix",
      "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
      "+200.000 Films & Series",
      "Dagelijkse Updates",
      "Alle Sport PPV Events",
      "VIP 24/7 Support",
      "Enterprise Anti-Freeze PRO",
      "Persoonlijke VIP Manager",
      "Alle Apparaten",
      "VPN Inbegrepen",
      "Exclusieve VIP Content",
      "Videoland, Netflix, Amazon, HBO, Apple TV, Hulu"
    ]
  },
  {
    id: "std-12m",
    duration: 12,
    price: 69,
    pricePerMonth: "5,75",
    previousPrice: 139,
    popular: true,
    screens: 1,
    bonusText: "Best Verkocht",
    features: [
      "SD/HD/FULL HD/4K/8K/HDR-VR",
      "+80.000 Kanalen + Netflix",
      "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
      "+200.000 Films & Series",
      "Dagelijkse Updates",
      "Alle Sport PPV Events",
      "VIP 24/7 Support",
      "Enterprise Anti-Freeze PRO",
      "Persoonlijke VIP Manager",
      "Alle Apparaten",
      "VPN Inbegrepen",
      "Exclusieve VIP Content",
      "Videoland, Netflix, Amazon, HBO, Apple TV, Hulu"
    ]
  },
  {
    id: "std-24m",
    duration: 24,
    price: 119,
    pricePerMonth: "4,96",
    previousPrice: 239,
    popular: false,
    screens: 1,
    features: [
      "SD/HD/FULL HD/4K/8K/HDR-VR",
      "+80.000 Kanalen + Netflix",
      "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
      "+200.000 Films & Series",
      "Dagelijkse Updates",
      "Alle Sport PPV Events",
      "VIP 24/7 Support",
      "Enterprise Anti-Freeze PRO",
      "Persoonlijke VIP Manager",
      "Alle Apparaten",
      "VPN Inbegrepen",
      "Exclusieve VIP Content",
      "Videoland, Netflix, Amazon, HBO, Apple TV, Hulu"
    ]
  }
];

export const multiPlans: Plan[] = [
  {
    id: "multi-6m-2s",
    duration: 6,
    price: 69,
    pricePerMonth: "11,50",
    previousPrice: 139,
    popular: false,
    screens: 2,
    bonusText: "+1 Maand Gratis!",
    features: [
      "SD/HD/FULL HD/4K/8K/HDR-VR",
      "+80.000 Kanalen + Netflix",
      "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
      "+200.000 Films & Series",
      "Dagelijkse Updates",
      "Alle Sport PPV Events",
      "VIP 24/7 Support",
      "Enterprise Anti-Freeze PRO",
      "Persoonlijke VIP Manager",
      "Alle Apparaten",
      "VPN Inbegrepen",
      "Exclusieve VIP Content",
      "Videoland, Netflix, Amazon, HBO, Apple TV, Hulu"
    ]
  },
  {
    id: "multi-12m-2s",
    duration: 12,
    price: 119,
    pricePerMonth: "9,92",
    previousPrice: 239,
    popular: true,
    screens: 2,
    bonusText: "+3 Maanden Gratis!",
    features: [
      "SD/HD/FULL HD/4K/8K/HDR-VR",
      "+80.000 Kanalen + Netflix",
      "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
      "+200.000 Films & Series",
      "Dagelijkse Updates",
      "Alle Sport PPV Events",
      "VIP 24/7 Support",
      "Enterprise Anti-Freeze PRO",
      "Persoonlijke VIP Manager",
      "Alle Apparaten",
      "VPN Inbegrepen",
      "Exclusieve VIP Content",
      "Videoland, Netflix, Amazon, HBO, Apple TV, Hulu"
    ]
  },
  {
    id: "multi-24m-2s",
    duration: 24,
    price: 199,
    pricePerMonth: "8,29",
    previousPrice: 399,
    popular: false,
    screens: 2,
    bonusText: "+3 Maanden Gratis!",
    features: [
      "SD/HD/FULL HD/4K/8K/HDR-VR",
      "+80.000 Kanalen + Netflix",
      "RTL, NPO, ZIGGO, SBS, ESPN, VTM",
      "+200.000 Films & Series",
      "Dagelijkse Updates",
      "Alle Sport PPV Events",
      "VIP 24/7 Support",
      "Enterprise Anti-Freeze PRO",
      "Persoonlijke VIP Manager",
      "Alle Apparaten",
      "VPN Inbegrepen",
      "Exclusieve VIP Content",
      "Videoland, Netflix, Amazon, HBO, Apple TV, Hulu"
    ]
  }
];

export const reviews: Review[] = [
  {
    id: "rev-1",
    name: "Robert S.",
    location: "Utrecht",
    date: "28 Feb 2026",
    rating: 5,
    comment: "Eindelijk een IPTV aanbieder die echt levert wat beloofd wordt! Geen haperingen tijdens de Formule 1 en geweldige 4K beeldkwaliteit. De support hielp me direct met de installatie op m'n Chromecast met Google TV.",
    verified: true,
    avatarSeed: "Robert"
  },
  {
    id: "rev-2",
    name: "Yasmine A.",
    location: "Rotterdam",
    date: "15 Jan 2026",
    rating: 5,
    comment: "Geweldig zenderaanbod en de films & series sectie is ongelooflijk uitgebreid. IPTV Totaal is de beste die ik tot nu toe heb gehad. Werkt perfect op de LG TV via IBO Player app.",
    verified: true,
    avatarSeed: "Yasmine"
  },
  {
    id: "rev-3",
    name: "Sven de V.",
    location: "Groningen",
    date: "4 Dec 2025",
    rating: 5,
    comment: "Ik heb het 2-schermen 12 maanden pakket gekocht zodat ik op tv en m'n zoon op z'n kamer tegelijk kunnen streamen. Werkt vlekkeloos en we hebben 3 maanden gratis gekregen. Echt een topdeal!",
    verified: true,
    avatarSeed: "Sven"
  },
  {
    id: "rev-4",
    name: "Klara de J.",
    location: "Amsterdam",
    date: "19 Nov 2025",
    rating: 5,
    comment: "De zapsnelheid is super en de tv-gids (EPG) klopt altijd. De klantenservice reageerde binnen 10 minuten op mijn vragen via e-mail. Een absolute aanrader voor iedereen die van kabel af wil.",
    verified: true,
    avatarSeed: "Klara"
  }
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Wat is IPTV Totaal?",
    answer: "IPTV Totaal is de absolute nummer 1 aanbieder van digitale televisie via internet in Nederland en België. Met onze dienst krijg je via een stabiele internetverbinding direct toegang tot alle tv-kanalen (meer dan 80.000+ live zenders), sportzenders, live overzichten, en een enorme bibliotheek van meer dan 200.000 films en series in Full HD, Ultra HD en 4K kwaliteit."
  },
  {
    id: "faq-2",
    question: "Wat heb ik nodig om IPTV te kunnen kijken?",
    answer: "Je hebt enkel twee dingen nodig: 1. Een stabiele internetverbinding (minimaal 15-20 Mbps voor storingsvrij Full HD/4K streamen). 2. Een compatibel apparaat. Dit kan een Samsung/LG Smart TV zijn, een Android mediaspeler (zoals Nokia, Formuler, Xiaomi box), een Amazon Firestick, Apple TV, iPhone, Android smartphone of een gewone computer/laptop."
  },
  {
    id: "faq-3",
    question: "Hoe wordt mijn IPTV abonnement geactiveerd?",
    answer: "Na het afronden van je bestelling gaan we direct voor je aan de slag. Doorgaans ontvang je binnen 15 tot 30 minuten de inloggegevens en een duidelijke, stap-voor-stap handleiding in je mail en op Whatsapp. Je sluit de speler aan, vult de gegevens in, en je kunt direct kijken."
  },
  {
    id: "faq-4",
    question: "Kan ik op meerdere schermen tegelijk kijken (Multi-screen)?",
    answer: "Een standaard IPTV Totaal abonnement is bedoeld voor 1 scherm tegelijkertijd. Je kunt de gegevens wel op meerdere apparaten instellen (bijvoorbeeld je mobiel én je tv), maar niet gelijktijdig streamen. Wil je dat wel? Dan hebben we de populaire IPTV Multischerm abonnementen voor 2 schermen. Hiermee stream je gelijktijdig in het hele huis."
  },
  {
    id: "faq-5",
    question: "Welke applicaties adviseren jullie te gebruiken?",
    answer: "Voor Smart TV's (Samsung/LG) adviseren we IBO Player of IPTV Smarters Pro. Voor Android & Firestick gebruikers is TiviMate Premium veruit de allerbeste en snelste interface. Voor Apple iOS en Apple TV is IPTV Smarters Player of XciPhone een geweldige keuze."
  },
  {
    id: "faq-6",
    question: "Moet ik een VPN gebruiken met IPTV Totaal?",
    answer: "Het gebruik van een VPN is niet verplicht om onze IPTV Totaal-dienst te streamen. Onze servers zijn zwaar beveiligd en maken gebruik van encryptie. Echter, we raden een goede VPN (zoals NordVPN of Surfshark) altijd aan voor de ultieme bescherming van je online privacy en om eventuele provider-throttling te omzeilen."
  },
  {
    id: "faq-7",
    question: "Welke betaalmethoden ondersteunen jullie?",
    answer: "Wij blinken uit in betrouwbaarheid en privacy. Via ons beveiligde betalingssysteem kun je gemakkelijk afrekenen met iDEAL, Creditcard, of Crypto (Bitcoin/Tether). De betaallink is tevens via support beschikbaar om snelle verwerking te garanderen."
  },
  {
    id: "faq-8",
    question: "Is de installatie ingewikkeld?",
    answer: "Absoluut niet! We sturen je een uiterst overzichtelijke gids met foto's en video's mee. Zelfs als je niet technisch bent, heb je onze IPTV zenders binnen 5 minuten op je tv draaien. En mocht je er onverhoopt toch niet uitkomen, dan neemt onze support-afdeling je op afstand stap-voor-stap mee om het op te lossen."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Beveiliging & privacy IPTV | Complete gids voor veilig streamen",
    category: "Beveiliging",
    author: "Klara Jönsson",
    date: "14 Dec 2025",
    readTime: "6 min leestijd",
    excerpt: "IPTV is enorm populair geworden. Het biedt vrijheid, flexibiliteit en toegang tot gigantisch veel content. Maar diezelfde vrijheid brengt ook risico’s met zich mee. Waar je bij traditionele televisie...",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    content: [
      "IPTV is enorm populair geworden. Het biedt vrijheid, flexibiliteit en toegang tot gigantisch veel content. Maar diezelfde vrijheid brengt ook risico’s met zich mee. Waar je bij traditionele televisie via de kabel of ether een directe en afgeschermde verbinding hebt, verloopt IPTV volledig via het internet. Dit betekent dat je digitale voetafdruk en privacy op het spel staan als je geen extra maatregelen neemt.",
      "Een van de grootste risico's is het monitoren van je internetverkeer. Internetproviders (ISP's) kunnen exact analyseren hoeveel data je verbruikt en vaak ook welk type verkeer er door je verbinding stroomt. Bij piekmomenten of zwaar streamingverkeer kunnen sommige providers besluiten om je internetsnelheid tijdelijk te begrenzen (throttling). Dit veroorzaakt het beruchte bufferen en haperen, juist tijdens een spannende sportwedstrijd of film.",
      "Daarnaast spelen beveiligingsrisico's op het netwerk een rol. Kwaadwillende derden of onbeveiligde wifi-netwerken kunnen data onderscheppen. Om jezelf optimaal te beschermen is het gebruik van een betrouwbare VPN (Virtual Private Network) ten zeerste aanbevolen. Een VPN versleutelt al je streamingverkeer met sterke encryptie en verbergt je daadwerkelijke IP-adres, waardoor je anoniem en veilig geniet van je favoriete content.",
      "Door een VPN te activeren op uw Smart TV, Amazon Fire TV Stick, Android TV of smartphone voordat u uw IPTV-stream start, voorkomt u snelheidsbeperkingen en beschermt u uw privacy volledig. Kies altijd voor een betrouwbare, premium VPN-provider zoals NordVPN, ExpressVPN of Surfshark voor de beste snelheden en onbreekbare privacybescherming."
    ]
  },
  {
    id: "blog-2",
    title: "Wat is m3u-link? Ontdek alles over IPTV afspeellijsten",
    category: "IPTV Gidsen",
    author: "Robert S.",
    date: "02 Dec 2025",
    readTime: "5 min leestijd",
    excerpt: "Ontvang je na de bestelling een m3u-url en weet je niet wat je ermee moet? Geen zorgen! Leer hier de ins and outs van m3u-playlists en hoe de inlogverbinding werkt.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    content: [
      "Een M3U (of M3U8) is simpelweg een bestandsindeling voor multimediaplaylists. In de wereld van IPTV is een M3U-link een unieke web-URL die uw tv-speler vertelt waar de live TV-feeds, EPG-gegevens en de on-demand films & series vandaan gehaald kunnen worden.",
      "Wanneer u een IPTV Totaal abonnement afsluit, krijgt u een lange link die er ongeveer zo uitziet: http://serverurl.com/get.php?auth=username&password=pass&output=ts.",
      "U hoeft deze link niet zelf te downloaden of handmatig te bewerken. U kopieert deze link simpelweg in uw IPTV app (zoals VLC, GSE Smart IPTV of IPTV Smarters). De app leest de URL uit, categoriseert automatisch alle duizenden internationale sportzenders, Nederlandse tv-kanalen en VOD-bibliotheken en presenteert ze in een prachtige interactieve interface.",
      "Tip: Tegenwoordig raden we vaker de 'Xtream Codes API' methode aan. Dit is veiliger en overzichtelijker. Hiervoor hoeft u alleen de Server URL, uw Gebruikersnaam en Wachtwoord in te typen. Het resultaat is sneller inladen, betere zenderlogo's en een feilloos werkende tv-gids (EPG)!"
    ]
  },
  {
    id: "blog-3",
    title: "Wat heb je nodig voor IPTV? De ultieme opstartgids",
    category: "Hardware",
    author: "Sven de V.",
    date: "10 Nov 2025",
    readTime: "7 min leestijd",
    excerpt: "Wil je af van je dure, beperkte kabelabonnement en overstap maken naar IPTV Totaal? Dit is de ultieme hardware- en softwarelijst om vlekkeloos en in 4K UHD te kunnen streamen.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
    content: [
      "Overstappen naar IPTV Totaal is de beste keuze voor uw portemonnee en uw kijkplezier. Maar wat heeft u nu daadwerkelijk nodig om een stabiele bioscoopervaring in uw eigen woonkamer te creëren?",
      "Ten eerste is een goede internetverbinding de absolute basis. Hoewel zenders ook laden bij 8 Mbps, raden we voor high-fidelity 4K en 60fps sportstreams een stabiele download van minimaal 25 Mbps aan. Gebruik indien mogelijk een fysieke ethernet-kabel naar uw tv-box in plaats van wifi om plotselinge signaalverstoringen te elimineren.",
      "Ten tweede: De hardware. U heeft geen dure, nieuwe tv nodig. Een Smart TV van Samsung of LG ondersteunt direct moderne IPTV-apps. Heeft u een oudere tv? Geen probleem! Plug simpelweg een Amazon Fire TV Stick 4K (circa €45-€60) of een Google Chromecast met Google TV in uw HDMI-poort. Dit tovert elke tv om in een razendsnel multimedia-centrum.",
      "Ten slotte heeft u een IPTV Player app nodig. Download een app (TiviMate of IBO Player hebben onze voorkeur), voer de Xtream Codes in die u binnen 15 minuten na bestelling van IPTV Totaal ontvangt, en uw complete televisie-revolutie is voltooid!"
    ]
  },
  {
    id: "blog-4",
    title: "TiviMate: Installatie en Configuratie Handleiding",
    category: "Software",
    author: "Klara Jönsson",
    date: "15 Oct 2025",
    readTime: "8 min leestijd",
    excerpt: "Gebruik je een Android-tv box of een Firestick? Ontdek waarom TiviMate de onbetwiste koning onder de IPTV apps is en leer hoe je deze stap voor stap installeert en optimaliseert.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    content: [
      "Als u een Android-gebaseerd apparaat heeft, zoals een Formuler box, Nvidia Shield, Xiaomi Mi Box of een Amazon Firestick, dan is TiviMate de absolute gouden standaard. Geen enkele andere IPTV app biedt een interface die zo dicht ligt bij de beleving van een traditionele, luxe tv-ontvanger (zoals Ziggo of KPN).",
      "Waarom is TiviMate zo gewild? De zapsnelheid is nagenoeg direct, de EPG (tv-gids) laadt razendsnel in de vertrouwde rasterweergave, u kunt gemakkelijk favorietenlijsten creëren en u heeft features zoals een Picture-in-Picture-modus en multiscreen weergave van wel 4 sportzenders tegelijkertijd.",
      "Zo installeert u het met IPTV Totaal: 1. Zoek naar 'TiviMate' in de Google Play Store op uw tv en installeer de app. (Voor Firestick-gebruikers dient dit via de 'Downloader' app te gebeuren). 2. Open TiviMate, kies 'Add Playlist' en selecteer 'Xtream Codes'. 3. Voer de server-adres, uw unieke gebruikersnaam en wachtwoord in die u van ons heeft ontvangen. 4. Klik op 'Next' en laat TiviMate de kanalen en tv-gids ophalen. Dit kan 1 tot 2 minuten duren.",
      "Eenmaal geladen, raden we aan om direct in de instellingen de 'EPG Auto-Update' aan te zetten. Hierdoor bent u altijd verzekerd van de juiste programma-informatie voor alle Nederlandse, Belgische en internationale kanalen. Veel kijkplezier!"
    ]
  }
];

export const deviceBrands: DeviceBrand[] = [
  { name: "Samsung", className: "text-white select-none opacity-80" },
  { name: "LG", className: "text-white select-none opacity-80" },
  { name: "Android TV", className: "text-white select-none opacity-80" },
  { name: "Formuler", className: "text-white select-none opacity-80" },
  { name: "Windows", className: "text-white select-none opacity-80" },
  { name: "Apple TV", className: "text-white select-none opacity-80" },
  { name: "Amazon Fire", className: "text-white select-none opacity-80" },
  { name: "MAG Boxes", className: "text-white select-none opacity-80" },
  { name: "Chromecast", className: "text-white select-none opacity-80" },
  { name: "Sony", className: "text-white select-none opacity-80" },
  { name: "Philips", className: "text-white select-none opacity-80" },
  { name: "Xiaomi MI", className: "text-white select-none opacity-80" },
  { name: "TCL Smart", className: "text-white select-none opacity-80" },
  { name: "iPhone / iPad", className: "text-white select-none opacity-80" },
  { name: "PlayStation", className: "text-white select-none opacity-80" },
  { name: "Xbox", className: "text-white select-none opacity-80" },
  { name: "Nintendo Switch", className: "text-white select-none opacity-80" }
];
