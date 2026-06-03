import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Tv,
  CheckCircle,
  HelpCircle,
  Smartphone,
  Laptop,
  PlayCircle,
  ShieldCheck,
  Star,
  Zap,
  Clock,
  ArrowUpRight,
  Sparkles,
  PhoneCall,
  Settings,
  ChevronDown,
  Info,
  ChevronUp,
  Mail,
  AlertTriangle,
  Monitor,
  Heart,
  Network
} from "lucide-react";

// Data and components
import { standardPlans, multiPlans, faqItems, reviews, blogPosts, deviceBrands } from "./data";
import Navbar from "./components/Navbar";
import OrderModal from "./components/OrderModal";
import Accordion from "./components/Accordion";
import Testimonials from "./components/Testimonials";
import BlogSection from "./components/BlogSection";
import { Plan } from "./types";

export default function App() {
  // Modal state
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);

  // Pricing switch (std or multi screen)
  const [pricingType, setPricingType] = useState<"standard" | "multiscreen">("standard");

  // Device guidance interactive state
  const [selectedBrandInfo, setSelectedBrandInfo] = useState<string | null>("Samsung");

  const deviceManuals: Record<string, string> = {
    Samsung: "Aanbevolen App: IBO Player of IPTV Smarters Pro. Zoek simpelweg in de Samsung App Store naar 'IBO Player'. Nadat u de app start, vult u uw Xtream Codes in die u van ons ontvangt.",
    LG: "Aanbevolen App: IBO Player of IPTV Smarters Pro. Zoek in de LG Content Store naar 'IBO Player'. Start de app en vul de m3u-link of API details in om binnen 2 minuten te zappen.",
    "Android TV": "Aanbevolen App: TiviMate Premium (Beste) of XC IPTV. Installeer TiviMate via de Google Play Store. Het inladen van onze 80.000+ zenders duurt zo'n 30 seconden.",
    Formuler: "Aanbevolen App: MyTVOnline 2 of MyTVOnline 3. Systeem is standaard voorbereid. Configureer eenvoudig een XC-portal met de URL en inloggegevens van uw IPTV Totaal pakket.",
    Windows: "Aanbevolen App: VLC Media Player of IPTV Smarters Pro desktop msi. Kopieer simpelweg de M3U link in VLC (Media -> Netwerkstroom openen) of gebruik Xtream Codes login.",
    "Apple TV": "Aanbevolen App: IPTV Smarters Player of GSE Smart IPTV. Verkrijgbaar in de iOS App Store om zenders soepel te synchroniseren.",
    "Amazon Fire": "Aanbevolen App: TiviMate of XC IPTV. Gebruik de gratis app 'Downloader' om de TiviMate APK te downloaden. U krijgt een eenvoudige video-handleiding meegestuurd.",
    "MAG Boxes": "Aanbevolen App: Ingebouwde Stalker Portal. Stuur ons bij uw bestelling het MAC-adres van uw MAG box (op de sticker aan de onderkant) en wij activeren de portal op afstand.",
    Chromecast: "Aanbevolen App: TiviMate Premium of IPTV Smarters. Cast direct vanaf uw smartphone of draai de app direct op de nieuwere Chromecast met Google TV.",
    Sony: "Draait op Android OS. Installeer 'TiviMate' of 'XC IPTV' rechtstreeks uit de Google Play Store en geniet van 4K beelden met uw Sony beeldprocessor.",
    Philips: "Heeft Android TV ingebouwd. Download 'TiviMate' of 'IPTV Smarters Pro' via de Google Play Store en start de directe 15-minuten activering.",
    "Xiaomi MI": "Xiaomi MI Box S en MI TV Stick draaien Android TV. Installeer 'TiviMate' en profiteer van de allerbeste prestaties en Direct-ZAP snelheid.",
    "TCL Smart": "Draait op Android TV of Roku. Voor Android Smart TV, download simpelweg 'TiviMate' of 'XC IPTV' uit de store voor topkwaliteit.",
    "iPhone / iPad": "Aanbevolen App: IPTV Smarters Player of LillyPlayer uit de App Store. Vul uw gebruikersnaam en wachtwoord in om onderweg alle kanalen live te kijken.",
    PlayStation: "Aanbevolen App: PleX, Nanomid of IPTV Smarters. Start uw PS4/PS5 console-browser, navigeer naar een webplayer website of configureer de PleX Media Server integratie om al onze 80.000+ topzenders soepel op uw console te bekijken.",
    Xbox: "Aanbevolen App: DuplexPlay of MyIPTV Player. Download 'MyIPTV Player' of 'DuplexPlay' rechtstreeks uit de Microsoft Store op uw Xbox One of Series X/S. Voer simpelweg de Xtream API details in om onmiddellijk in 4K UHD te gamen of zenders te streamen.",
    "Nintendo Switch": "Streaming op de Switch is mogelijk via de verborgen ingebouwde webbrowser door DNS om te leiden naar Google, of door gebruik te maken van de 'PPPlay' homebrew mediaspeler app op een aangepaste Switch. Perfect voor draagbaar streamen thuis."
  };

  // Scroll handler helper
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleOpenOrder = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    } else {
      setSelectedPlanId(null);
    }
    setIsOrderModalOpen(true);
  };

  // Scroll to top helper
  const [showScrollTop, setShowScrollTop] = useState(false);
  React.useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white relative text-slate-800 selection:bg-brand-100 selection:text-brand-900 flex flex-col justify-between">
      
      {/* Sticky Top Header Navigation */}
      <Navbar onOpenOrderModal={handleOpenOrder} onScrollToSection={handleScrollToSection} />

      {/* Hero Section Banner */}
      <section
        id="home"
        className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#080e1c] via-[#040914] to-[#030712] px-4 sm:px-6 lg:px-8"
      >
        {/* Abstract structural grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
        
        {/* Radial highlight spot */}
        <div className="absolute top-[-10%] left-[20%] w-[60%] h-[50%] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center space-y-10 relative z-10">
          
          {/* Headline and promo badges */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 text-xs font-bold uppercase tracking-wider"
            >
              <Zap className="w-3.5 h-3.5 fill-brand-400 animate-pulse" />
              Tijdelijke Actie: Tot 50% Korting op alle pakketten
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight"
            >
              IPTV Totaal – Het Beste <span className="bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">4K IPTV-Abonnement</span> van Nederland
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-305 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Krijg direct toegang tot meer dan <strong className="text-white">80.000+ Live TV-kanalen</strong> en een gigantisch aanbod van <strong className="text-white">200.000+ films en series</strong> op aanvraag (VOD). Stream al je favoriete sporten, Formule 1 en Eredivisie in Full HD & Ultra HD met razendsnelle zapping en zonder bufferen!
            </motion.p>
          </div>

          {/* Call-to-action Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => handleScrollToSection("prijzen")}
              className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-xl shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Bekijk Abonnementen
            </button>
            <button
              onClick={() => handleScrollToSection("werkwijze")}
              className="bg-slate-900/60 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              Hoe werkt het?
            </button>
          </motion.div>

          {/* Quick core metrics list footer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-slate-400 text-xs sm:text-sm font-semibold border-t border-slate-900 pt-8">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span>80.000+ Kanalen</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span>200.000+ Films & Series</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span>Geen Bufferen & HD/4K</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-400" />
                <span>15-Minuten Levering</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Onboarding Steps Section (How it works? / Jouw Ultieme IPTV Totaal Ervaring Begint Nu) */}
      <section id="werkwijze" className="py-20 bg-white border-y border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
              Snel En Eenvoudig Starten
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Jouw Ultieme IPTV Totaal Ervaring Begint Nu
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Geen gedoe met moeilijke kabels of onbetrouwbare kastjes. Onze service is 100% digitaal en geoptimaliseerd voor directe activatie op elk apparaat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between hover:border-brand-300 hover:shadow-lg hover:shadow-slate-100 transition-all text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 font-bold border border-brand-200 relative">
                  <Tv className="w-5.5 h-5.5" />
                  <span className="absolute -top-1.5 -right-1.5 bg-brand-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">1</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">Plaats Je Bestelling</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Kies uit ons 6, 12 of 24 maanden pakket. Selecteer of je een Standaard of een handig Multi-screen abonnement wilt. Vul je gegevens in en verzend de bestelling.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between hover:border-brand-300 hover:shadow-lg hover:shadow-slate-100 transition-all text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 font-bold border border-purple-200 relative">
                  <Laptop className="w-5.5 h-5.5" />
                  <span className="absolute -top-1.5 -right-1.5 bg-purple-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">2</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">Snelle Installatie</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Binnen 15-30 minuten ontvang je de complete inloggegevens en een overzichtelijke, stap-voor-stap handleiding. Download de speler, voer de codes in en zap direct!
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f0faf6] border border-brand-200 p-6 sm:p-8 rounded-2xl relative flex flex-col justify-between hover:border-brand-400 hover:shadow-lg hover:shadow-slate-100 transition-all text-left">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold border border-emerald-200 relative">
                  <Sparkles className="w-5.5 h-5.5 animate-pulse" />
                  <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">3</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 flex items-center gap-1">Ontspan en Geniet <span className="text-emerald-600 font-semibold">• Direct Actief</span></h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Leun achterover, pak je favoriete snacks en geniet van onbeperkt kijken. Live tv-kanalen, gigantisch sportaanbod of on-demand bioscoopfilms; alles is binnen handaberik.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Advantages section (Beste IPTV Totaal - Waarom Kiezen?) */}
      <section id="voordelen" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
                Beste IPTV Totaal
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                Waarom Kiezen voor IPTV Totaal? De Voordelen!
              </h2>
            </div>
          </div>

          {/* 4 Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-brand-300 hover:shadow-lg hover:shadow-slate-100 transition-all text-left">
              <span className="bg-brand-100 text-brand-700 font-bold px-2 py-1 rounded text-[9px] uppercase font-mono block w-max mb-3">OMNIPRESENT</span>
              <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-2">Werkt op elk apparaat</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Of u nu kijkt via uw Samsung of LG Smart TV, Android mediabox, Apple TV, iPad of laptop; onze service levert overal dezelfde vloeiende prestaties.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-slate-50 border border-slate-205 rounded-xl hover:border-brand-300 hover:shadow-lg hover:shadow-slate-100 transition-all text-left">
              <span className="bg-emerald-100 text-emerald-700 font-bold px-2 py-1 rounded text-[9px] uppercase font-mono block w-max mb-3">SNELLER DAN KABEL</span>
              <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-2">Directe activatie</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Geen installateurs over de vloer of postpakketjes afwachten. Na uw bestelling wordt uw account door onze helpdesk direct online geconfigureerd.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-slate-50 border border-slate-205 rounded-xl hover:border-brand-300 hover:shadow-lg hover:shadow-slate-100 transition-all text-left">
              <span className="bg-purple-100 text-purple-700 font-bold px-2 py-1 rounded text-[9px] uppercase font-mono block w-max mb-3">REUSACHTING</span>
              <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-2">Gigantisch aanbod</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Met meer dan 80.000+ internationale tv-zenders en 200.000+ films en talloze series, is er altijd wat te zien voor het hele gezin.
              </p>
            </div>

            <div className="p-5 sm:p-6 bg-slate-50 border border-slate-205 rounded-xl hover:border-brand-300 hover:shadow-lg hover:shadow-slate-100 transition-all text-left">
              <span className="bg-amber-100 text-amber-700 font-bold px-2 py-1 rounded text-[9px] uppercase font-mono block w-max mb-3">STAP-VOOR-STAP</span>
              <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-2">Eenvoudige installatie</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Iedereen kan IPTV Totaal installeren. Met onze duidelijke instructieboekjes bent u binnen 5 minuten volledig verbonden en klaar om te streamen.
              </p>
            </div>

          </div>

          {/* Double Horizontal detailed layout info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            
            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-4 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-600 font-bold font-mono">?</div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">Wat is IPTV en Wat Heb Je Nodig?</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                IPTV staat voor Internet Protocol Television. Simpel gezegd betekent dit dat televisie wordt gestreamd via uw betrouwbare internetverbinding in plaats van via een traditionele schotel of coaxkabel. Om te genieten van IPTV Totaal heeft u alleen een degelijke internetverbinding nodig (draadloos of bij voorkeur bekabeld) en een speler, zoals een Smart TV of een streaming-stick.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl space-y-4 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold font-mono">⚙</div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">Hoe Begin Ik met Kijken op IPTV Totaal?</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                Beginnen is heel makkelijk! Klik op 'Bestel Nu', kies uw pakket, en vul uw naam en e-mail in. Ons team bereidt uw Xtream Codes of m3u playlist voor. Binnen 20 minuten ontvangt u de zenders en betalingsinstructies. Download de app (IBO Player of TiviMate), log in, en start direct met streamen in haarscherpe 4K kwaliteit!
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Sport live action showcase segment (Ervaar Elk Sportmoment Live met IPTV Totaal!) */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
          
          <div className="space-y-3">
            <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
              De Ultieme Sportzenders Aanbieder
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Ervaar Elk Sportmoment Live met IPTV Totaal!
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Nooit meer een wedstrijd missen door dure losse sportabonnementen. Met IPTV Totaal krijgt u alle premium sportkanalen in één compleet pakket!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-2">
            <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex gap-3.5 hover:border-brand-200 hover:bg-slate-50/50 hover:shadow-sm transition-all duration-300">
              <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Interactieve TV-gids (EPG)</h4>
                <p className="text-xs text-slate-500 leading-normal mt-1 font-medium">Zie direct wanneer uw favoriete teams, Formule 1 coureurs of topboksers moeten spelen met een synchrone tv-gids.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex gap-3.5 hover:border-brand-200 hover:bg-slate-50/50 hover:shadow-sm transition-all duration-300">
              <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Eenvoudig Terugkijken tot 7 dagen</h4>
                <p className="text-xs text-slate-500 leading-normal mt-1 font-medium">Wedstrijd gemist of laat thuis uit uw werk? Geen probleem! Met onze handige Catchup-functie kijkt u alles eenvoudig terug.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex gap-3.5 hover:border-brand-200 hover:bg-slate-50/50 hover:shadow-sm transition-all duration-300">
              <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Reusachtige Video-On-Demand (VOD)</h4>
                <p className="text-xs text-slate-500 leading-normal mt-1 font-medium">Dagelijkse updates van sportdocumentaires, analyses, herhalingen en vechtsport evenementen.</p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-150 p-5 rounded-2xl flex gap-3.5 hover:border-brand-200 hover:bg-slate-50/50 hover:shadow-sm transition-all duration-300">
              <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Pay-Per-View (PPV) Evenementen</h4>
                <p className="text-xs text-slate-500 leading-normal mt-1 font-medium">Mis geen enkele UFC-vechtavond, boksgala of pay-per-view spectakel. Alles zit standaard verwerkt in onze abonnementen.</p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => handleScrollToSection("prijzen")}
              className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all cursor-pointer shadow-sm shadow-brand-500/10"
            >
              Start Direct Met Streamen
            </button>
            <p className="text-xs text-slate-500 font-semibold">
              ⭐ Inclusief alle zenders van <strong>ESPN (1,2,3,4)</strong>, <strong>Ziggo Sport Select</strong>, <strong>Viaplay</strong> en meer!
            </p>
          </div>

        </div>
      </section>

      {/* Device grid & platform Logos (IPTV Totaal: Eenvoudig Kijken op Al Jouw Apparaten) */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
              Universele Compatibiliteit
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              IPTV Totaal: Eenvoudig Kijken op Al Jouw Apparaten
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Onze IPTV servers blinken uit in flexibiliteit. We ondersteunen nagenoeg elk apparaat en elke populaire streaming-app op de markt. Klik op een merk hieronder om te zien hoe de installatie werkt!
            </p>
          </div>

          {/* Interactive Brand Badge Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 max-w-5xl mx-auto">
            {deviceBrands.map((brand) => {
              const getBrandLogo = (name: string) => {
                switch (name) {
                  case "Samsung":
                    return (
                      <img
                        src="/samsung-logo.svg"
                        className="max-h-[10px] object-contain"
                        alt="Samsung"
                      />
                    );
                  case "LG":
                    return (
                      <img
                        src="/lg-logo.png"
                        className="max-h-[15px] object-contain"
                        alt="LG"
                      />
                    );
                  case "Android TV":
                    return (
                      <img
                        src="/android-tv-logo.svg"
                        className="max-h-[17px] object-contain"
                        alt="Android TV"
                      />
                    );
                  case "Formuler":
                    return (
                      <img
                        src="/formuler-logo.png"
                        className="max-h-[13px] object-contain"
                        alt="Formuler"
                      />
                    );
                  case "Windows":
                    return (
                      <img
                        src="/windows-logo.png"
                        className="max-h-[14px] object-contain"
                        alt="Windows"
                      />
                    );
                  case "Apple TV":
                    return (
                      <img
                        src="/appletv-logo.png"
                        className="max-h-[13px] object-contain"
                        alt="Apple TV"
                      />
                    );
                  case "Amazon Fire":
                    return (
                      <img
                        src="/amazon-fire-logo.png"
                        className="max-h-[11px] object-contain"
                        alt="Amazon Fire"
                      />
                    );
                  case "MAG Boxes":
                    return (
                      <img
                        src="/magbox-logo.png"
                        className="max-h-[15px] object-contain"
                        alt="MAG Boxes"
                      />
                    );
                  case "Chromecast":
                    return (
                      <img
                        src="/chromecast-logo.png"
                        className="max-h-[14px] object-contain"
                        alt="Chromecast"
                      />
                    );
                  case "Sony":
                    return (
                      <img
                        src="/sony-logo.png"
                        className="max-h-[12px] object-contain"
                        alt="Sony"
                      />
                    );
                  case "Philips":
                    return (
                      <img
                        src="/philips-logo.png"
                        className="max-h-[13px] object-contain"
                        alt="Philips"
                      />
                    );
                  case "Xiaomi MI":
                    return (
                      <img
                        src="/xiaomi-logo.png"
                        className="max-h-[14px] object-contain"
                        alt="Xiaomi"
                      />
                    );
                  case "TCL Smart":
                    return (
                      <img
                        src="/tcl-logo.png"
                        className="max-h-[13px] object-contain"
                        alt="TCL"
                      />
                    );
                  case "iPhone / iPad":
                    return (
                      <img
                        src="/ipad-logo.png"
                        className="max-h-[14px] object-contain"
                        alt="iPhone / iPad"
                      />
                    );
                  case "PlayStation":
                    return (
                      <img
                        src="/playstation-logo.png"
                        className="max-h-[13px] object-contain"
                        alt="PlayStation"
                      />
                    );
                  case "Xbox":
                    return (
                      <img
                        src="/xbox-logo.png"
                        className="max-h-[14px] object-contain"
                        alt="Xbox"
                      />
                    );
                  case "Nintendo Switch":
                    return (
                      <img
                        src="/nintendo-switch-logo.png"
                        className="max-h-[13px] object-contain"
                        alt="Nintendo Switch"
                      />
                    );
                  default:
                    return null;
                }
              };
              
              return (
                <button
                  key={brand.name}
                  onClick={() => setSelectedBrandInfo(brand.name)}
                  className={`py-3 px-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                    selectedBrandInfo === brand.name
                      ? "bg-brand-50/75 border-brand-500 text-brand-900 shadow-sm ring-1 ring-brand-500/10 font-bold"
                      : "bg-slate-50/50 border-slate-200 text-slate-600 hover:border-brand-200 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm border border-slate-100 p-1 group-hover:scale-105 transition-transform">
                      {getBrandLogo(brand.name)}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <span className="text-[11px] sm:text-xs font-bold leading-tight block truncate text-slate-800 group-hover:text-slate-950 transition-colors">
                        {brand.name}
                      </span>
                      <span className="text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-wider font-semibold block mt-px group-hover:text-slate-500 transition-colors">
                        {selectedBrandInfo === brand.name ? "Actief" : "Bekijk"}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-1.5">
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      selectedBrandInfo === brand.name ? "bg-brand-500 scale-125 shadow-sm shadow-brand-500/20" : "bg-slate-300 group-hover:bg-brand-400"
                    }`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Brand Instruction Card */}
          <AnimatePresence mode="wait">
            {selectedBrandInfo && (
              <motion.div
                key={selectedBrandInfo}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 p-5 sm:p-6 rounded-2xl relative"
              >
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 border border-brand-200 flex items-center justify-center font-display font-black text-sm flex-shrink-0">
                    TV
                  </div>
                  <div className="text-left space-y-1.5 flex-1">
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      Installatie handleiding voor {selectedBrandInfo}
                      <span className="bg-emerald-500/15 text-emerald-700 border border-emerald-200/50 font-mono text-[9px] px-1.5 py-0.5 rounded font-bold">GEMAKKELIJK</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">
                      {deviceManuals[selectedBrandInfo] || "Onze IPTV app ondersteunt de m3u-link of API logins. Na het bestellen ontvangt u een uiterst duidelijke handleiding met stappen."}
                    </p>
                    <div className="flex justify-start gap-4 pt-1 text-[10.5px] text-slate-500 font-semibold uppercase font-mono">
                      <span>✓ 4K Gecertificeerd</span>
                      <span>✓ Xtream codes login</span>
                      <span>✓ Catchup support</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Pricing / Plans (Flexibel Abonneren: Kies Jouw IPTV Totaal Pakket) */}
      <section id="prijzen" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 relative">
        <div className="absolute top-[-15%] right-[-10%] w-[50%] h-[40%] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-12 relative z-10 text-center">
          
          <div className="space-y-4 max-w-3xl mx-auto">
            {/* Promo mini-badges */}
            <div className="flex flex-wrap justify-center items-center gap-2">
              <span className="bg-brand-50 border border-brand-200 text-brand-700 font-bold px-2.5 py-1 rounded-full text-[10px] uppercase font-mono">Geen verborgen kosten</span>
              <span className="bg-purple-50 border border-purple-200 text-purple-700 font-bold px-2.5 py-1 rounded-full text-[10px] uppercase font-mono">24/7 klantenservice</span>
              <span className="bg-indigo-50 border border-indigo-200 text-indigo-700 font-bold px-2.5 py-1 rounded-full text-[10px] uppercase font-mono">Dagelijkse VOD updates</span>
            </div>

            <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
              Flexibel Abonneren: Kies Jouw IPTV Totaal Pakket
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Prijzen en Abonnementen
            </h2>
            <p className="text-slate-605 text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Geniet van onbeperkte premium streaming tegen de allerlaagste prijzen. Onze zenderactivatie is altijd vliegensvlug!
            </p>
          </div>

          {/* Pricing Toggle slider */}
          <div className="flex justify-center">
            <div className="bg-slate-100 p-1.5 rounded-xl border border-slate-200 inline-flex items-center gap-2 shadow-inner">
              <button
                onClick={() => setPricingType("standard")}
                className={`py-2 px-4 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  pricingType === "standard"
                    ? "bg-brand-600 text-white shadow font-extrabold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Standaard (1 Scherm)
              </button>
              <button
                onClick={() => setPricingType("multiscreen")}
                className={`py-2 px-4 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  pricingType === "multiscreen"
                    ? "bg-brand-600 text-white shadow font-extrabold"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                IPTV Multischerm (2 Schermen)
              </button>
            </div>
          </div>

          {/* Render Plans */}
          <div className={`grid grid-cols-1 gap-8 mx-auto items-stretch transition-all duration-300 ${
            pricingType === "standard" ? "md:grid-cols-3 max-w-5xl" : "md:grid-cols-2 max-w-3xl"
          }`}>
            {(pricingType === "standard" ? standardPlans : multiPlans).map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl border text-left flex flex-col justify-between p-6 sm:p-8 relative transition-all duration-350 ${
                  plan.popular
                    ? "bg-gradient-to-b from-brand-50/20 to-white border-brand-500 shadow-xl shadow-brand-500/10 ring-2 ring-brand-500/10 translate-y-[-4px]"
                    : "bg-white border-slate-200 hover:border-brand-200 hover:shadow-md transition-all rounded-2xl"
                }`}
              >
                {/* Popular Badge banner ribbon */}
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-brand-500 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Meest Gekozen
                  </span>
                )}

                {/* Duration month card heading */}
                <div className="border-b border-slate-100 pb-5">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">
                    {plan.duration} Maanden
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 uppercase tracking-wider font-extrabold">
                    {plan.screens > 1 ? `IPTV MULTISCHERM (${plan.screens} Schermen)` : "Snel IPTV ACCOUNT"}
                  </p>
                  
                  {/* Price display tags */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-display font-black text-slate-900">€{plan.price}</span>
                    <span className="text-slate-500 text-xs font-bold font-mono">/ totaal</span>
                    {plan.previousPrice && (
                      <span className="text-sm line-through text-slate-400 ml-2">€{plan.previousPrice}</span>
                    )}
                  </div>
                  
                  <p className="text-[11px] text-brand-600 mt-1.5 font-extrabold">
                    Dat is slechts €{plan.pricePerMonth} per maand!
                  </p>
                  
                  {plan.bonusText && (
                    <span className="mt-2.5 inline-block bg-emerald-100 text-emerald-700 border border-emerald-250 text-[10px] px-2 py-0.5 rounded font-black font-mono">
                      ★ {plan.bonusText}
                    </span>
                  )}
                </div>

                {/* Features item listing */}
                <ul className="my-6 space-y-2.5 flex-1 select-none">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-semibold text-left">
                      <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Ordering Action CTA button */}
                <button
                  onClick={() => handleOpenOrder(plan.id)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-center text-xs sm:text-sm active:scale-98 transition-all cursor-pointer ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-md shadow-brand-500/20 hover:from-brand-500 hover:to-brand-400"
                      : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  Koop nu
                </button>
              </div>
            ))}
          </div>

          <div className="pt-4 text-slate-500 text-[11px] sm:text-xs">
            🔒 Beveiligde transactie via Pay met volledige zendergarantie. Geen automatische verlenging!
          </div>

        </div>
      </section>

      {/* Technical Specifications Section (Maximale Flexibiliteit) */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Column 1 - Compatibility devices list */}
            <div className="space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
                  Veiligheid en Privacy
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-tight">
                  Maximale Flexibiliteit voor Elk Apparaat / Universele Compatibiliteit
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Met IPTV Totaal is er geen sprake van hardwarebeperkingen of ingewikkelde setup-stappen:
                </p>
              </div>

              <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-700 font-semibold">
                <p>
                  <strong>• Smart TV’s:</strong> Configureer in 2 minuten via IBO Player of IPTV Smarters op Samsung en LG TV's.
                </p>
                <p>
                  <strong>• Android Apparaten:</strong> TiviMate is leverbaar op alle Android TV's, mediaspelers, Nvidia Shields en tablets.
                </p>
                <p>
                  <strong>• iOS (iPhone, iPad, Apple TV):</strong> Draai IPTV Smarters Player of IPTV player Lite rechtstreeks uit de officiële App Store.
                </p>
                <p>
                  <strong>• Windows & Mac Computers:</strong> Open VLC media player or de IPTV Smarters Pro desktop app om overal zenders te kunnen streamen.
                </p>
                <p>
                  <strong>• MAG Boxen en Formuler:</strong> Directe Stalker Portal & Portal-API ondersteuning aanwezig voor de puristen.
                </p>
              </div>
            </div>

            {/* Column 2 - Technical requirements guidelines */}
            <div className="space-y-6 text-left">
              <div className="space-y-3">
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-600 uppercase tracking-widest block font-mono">
                  Snelheidsbehoefte & Legale info
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-tight">
                  Compatibele Apps en Technische Vereisten
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  De benodigde internetsnelheid voor het soepel buffervrij streamen van IPTV Totaal:
                </p>
              </div>

              {/* Speeds Grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Standard SD</span>
                  <span className="text-brand-600 font-extrabold font-mono text-sm sm:text-base mt-1 block">5 - 10 Mbps</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Full HD</span>
                  <span className="text-teal-600 font-extrabold font-mono text-sm sm:text-base mt-1 block">15 - 25 Mbps</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-center">
                  <span className="text-[10px] text-slate-505 text-slate-500 uppercase font-bold tracking-wider block">4K UHD</span>
                  <span className="text-amber-600 font-extrabold font-mono text-sm sm:text-base mt-1 block font-black">25 - 50 Mbps</span>
                </div>
              </div>

              {/* Legality answer */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5 text-left">
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">Is IPTV Totaal legaal?</span>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Ja, IPTV is een gevestigde technologische industrie (denk aan Netflix of KPN). Het gebruiken van de IPTV Totaal m3u-link is volledig betrouwbaar en uw privacy is gegarandeerd. Voor maximale veiligheid adviseren wij het gebruik van een VPN om eventuele ISP throttling te weren.
                </p>
              </div>
            </div>

          </div>

          {/* Privacy Quote Badge highlight bar */}
          <div className="p-6 bg-[#f5faf8] border border-emerald-200 rounded-2xl text-center max-w-4xl mx-auto space-y-2">
            <h4 className="font-display font-black text-emerald-800 text-base sm:text-lg">
              "Jouw Privacy is Onze Absolute Prioriteit"
            </h4>
            <p className="text-xs text-emerald-950 max-w-2xl mx-auto leading-normal font-semibold">
              Onze servers zijn uitgerust met AES-256 zendercriminologie en anti-track firewalls. Er worden GEEN logs bijgehouden en uw surfgedrag blijft volledig verborgen en anoniem.
            </p>
          </div>

        </div>
      </section>

      {/* Reviews / Testimonials section (Ervaringen met IPTV Totaal) */}
      <section className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
              Wat Onze Klanten Zeggen
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Ervaringen met IPTV Totaal
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We hebben al meer dan 1.450 tevreden klanten geholpen aan de ultieme kijkervaring. Ontdek hun betrouwbare verhalen!
            </p>
          </div>

          <Testimonials reviews={reviews} />

        </div>
      </section>

      {/* IPTV Totaal Blog Section */}
      <section id="blog" className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
              Lees Onze Gidsen & Tips
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              IPTV Totaal Blog
            </h2>
            <p className="text-slate-605 text-slate-605 text-slate-605 text-slate-600 text-xs sm:text-sm">
              Altijd op de hoogte van de nieuwste updates, apps en beveiligingstrends.
            </p>
          </div>

          <BlogSection posts={blogPosts} onOpenOrder={() => handleOpenOrder("std-12m")} />

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 bg-white border-b border-slate-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[10px] sm:text-[11px] font-bold text-brand-600 uppercase tracking-widest block font-mono">
              Heb Je Vragen over IPTV?
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
              Veelgestelde Vragen (FAQ)
            </h2>
            <p className="text-slate-606 text-slate-600 text-xs sm:text-sm">
              Niet zeker over de installatie of de betaalmethodes? Hier beantwoorden we alle belangrijke vragen uitgebreid!
            </p>
          </div>

          <Accordion items={faqItems} />

        </div>
      </section>

      {/* Footer Banner CTA (IPTV Totaal: Uw Sleutel tot Onbeperkt Premium Entertainment) */}
      <section className="py-16 sm:py-20 bg-slate-50 text-center border-y border-slate-200 px-4 relative overflow-hidden">
        {/* Glow dots decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-56 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="bg-brand-100 text-brand-700 font-bold px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-widest inline-block border border-brand-200">
            DIRECT ACTIVEREN • GEEN TV-HAPERING
          </span>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            IPTV Totaal: Uw Sleutel tot Onbeperkt Premium Entertainment
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-medium">
            Profiteer vandaag nog van de scherpste kortingen en zeg uw dure kabelabonnement definitief op. Kijk alle sporten en films waar en wanneer u maar wilt.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleScrollToSection("prijzen")}
              className="bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-lg shadow-brand-500/20 transform hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              Bekijk Abonnementen
            </button>
            <button
              onClick={() => handleOpenOrder("std-12m")}
              className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              Bestel Nu
            </button>
          </div>

          <div className="flex justify-center items-center gap-6 text-slate-500 text-[11px] sm:text-xs font-semibold">
            <span>✓ Dagelijkse updates</span>
            <span>✓ 24/7 Whatsapp Support</span>
            <span>✓ Geld-terug garantie</span>
          </div>
        </div>
      </section>

      {/* Main Footer Column lists and disclaimers */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-200 pb-10">
            {/* Column 1 - Brand Info */}
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white font-bold">
                  <Tv className="w-4 h-4" />
                </div>
                <span className="font-display font-extrabold text-sm text-slate-900 tracking-wide">
                  IPTV TOTAAL <span className="text-brand-600 font-extrabold">NL</span>
                </span>
              </div>
              <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                De absolute nummer 1 IPTV provider in Nederland en België. Geniet van meer dan 80.000+ live zenders en een onbeperkte on-demand catalogus in 4K UHD.
              </p>
              <div className="flex items-center gap-1 text-xs text-slate-600 font-bold font-mono">
                <Mail className="w-3.5 h-3.5 text-brand-600" />
                support@iptvtotaalnl.nl
              </div>
            </div>

            {/* Column 2 - Main Navigation links */}
            <div className="text-left space-y-3.5">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Navigatie</h4>
              <ul className="space-y-2 text-xs text-slate-600 font-bold">
                <li><button onClick={() => handleScrollToSection("home")} className="hover:text-brand-600 transition-colors cursor-pointer text-left">Home</button></li>
                <li><button onClick={() => handleScrollToSection("prijzen")} className="hover:text-brand-600 transition-colors cursor-pointer text-left">IPTV Pakketten</button></li>
                <li><button onClick={() => handleScrollToSection("voordelen")} className="hover:text-brand-600 transition-colors cursor-pointer text-left">Voordelen</button></li>
                <li><button onClick={() => handleScrollToSection("blog")} className="hover:text-brand-600 transition-colors cursor-pointer text-left">IPTV Totaal Blog</button></li>
                <li><button onClick={() => handleScrollToSection("faq")} className="hover:text-brand-600 transition-colors cursor-pointer text-left">Veelgestelde Vragen</button></li>
              </ul>
            </div>

            {/* Column 3 - Information terms and return policies */}
            <div className="text-left space-y-3.5">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Informatie</h4>
              <ul className="space-y-2 text-xs text-slate-600 font-bold">
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert("De algemene leveringsvoorwaarden en herroepingsrecht zijn gedekt onder reselling policy."); }} className="hover:text-brand-600 transition-colors text-left block">Algemene Voorwaarden</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Uw privacy wordt geverifieerd via anonieme AES-256 coderingen."); }} className="hover:text-brand-600 transition-colors text-left block">Privacybeleid</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert("We hanteren een 7 dagen niet-goed-geld-terug garantie op activeerfouten."); }} className="hover:text-brand-600 transition-colors text-left block">Restitutiebeleid</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); alert("IPTV Totaal is een reseller en host geen data of audio/video streams."); }} className="hover:text-brand-600 transition-colors text-left block">Disclaimer</a></li>
              </ul>
            </div>

            {/* Column 4 - Support note */}
            <div className="text-left space-y-3.5">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Zender Activering</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                Heeft u hulp nodig of heeft u specifieke vragen over uw account? Onze activeringhelpdesk staat binnen 15 minuten voor u klaar via Whatsapp of E-mail.
              </p>
              <button
                onClick={() => handleOpenOrder("std-12m")}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs transition-all cursor-pointer"
              >
                Direct Hulp Aanvragen
              </button>
            </div>
          </div>

          {/* Legal Reseller Disclaimer Notice area */}
          <div className="py-8 text-left text-[10.5px] text-slate-500 leading-normal border-b border-slate-200 space-y-2 select-none font-semibold">
            <p className="flex items-center gap-1.5 text-xs text-slate-705 font-bold uppercase font-mono">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> WETTELIJKE NOTITIE & RESELLER DISCLAIMER
            </p>
            <p className="capitalize-first-letter">
              IPTV Totaal NL is een onafhankelijke technologische reseller. Wij hosten, bezitten of beheren zelf GEEN servers, mediabestanden of videostreams. Alle auteursrechtelijk beschermde materialen, tv-kanalen en radio-stromen worden geleverd door externe partijen over het internet. Onze service richt zich uitsluitend op het technisch configureren en koppelen van gebruikers aan deze onafhankelijke externe streaming-providers. Wij raden onze gebruikers ten strengste aan om de lokale wet- en regelgeving met betrekking tot auteursrechten te respecteren.
            </p>
          </div>

          {/* Bottom Copyright brand label */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-bold">
            <p className="text-center sm:text-left">
              2025 © Alle rechten voorbehouden door IPTV Totaal NL - De Nr. 1 Aanbieder van Premium IPTV Abonnementen
            </p>
            <div className="flex gap-4">
              <span className="cursor-pointer hover:text-brand-600 transition-colors" onClick={() => alert("Klantenservice is momenteel 100% online.")}>● Helpdesk Live Tracker</span>
              <span>•</span>
              <span className="font-mono text-brand-600">v4.1 STABLE</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Action WhatsApp and Scroll-to-Top Pills bottom container */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        
        {/* Contact WhatsApp floating Button */}
        <button
          onClick={() => handleOpenOrder("std-12m")}
          className="bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:p-4 rounded-full shadow-2xl shadow-emerald-500/20 active:translate-y-0.5 transition-all flex items-center gap-2 group cursor-pointer border border-emerald-500/20"
          title="Direct Bestellen via Whatsapp / E-mail"
        >
          <PhoneCall className="w-5.5 h-5.5 text-white animate-pulse" />
          <span className="font-sans font-bold text-xs max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap block">
            Bestel IPTV Direct
          </span>
        </button>

        {/* Scroll To Top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="bg-white border border-slate-200 text-slate-600 hover:text-slate-950 p-3 rounded-full shadow-lg active:translate-y-0.5 transition-all cursor-pointer"
              title="Terug naar boven"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>

      {/* Booking Form Checkout Modal Window */}
      <OrderModal
        isOpen={isOrderModalOpen}
        selectedPlanId={selectedPlanId}
        onClose={() => setIsOrderModalOpen(false)}
      />

    </div>
  );
}
