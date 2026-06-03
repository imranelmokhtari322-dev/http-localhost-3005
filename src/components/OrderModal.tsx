import React, { useState } from "react";
import { X, Check, ShoppingBag, ArrowRight, CreditCard, ShieldCheck, Mail, Send, Sparkles, AlertCircle, Phone } from "lucide-react";
import { Plan } from "../types";
import { standardPlans, multiPlans } from "../data";

interface OrderModalProps {
  isOpen: boolean;
  selectedPlanId: string | null;
  onClose: () => void;
}

export default function OrderModal({ isOpen, selectedPlanId, onClose }: OrderModalProps) {
  // Combine all plans for selection
  const allPlans = [...standardPlans, ...multiPlans];
  
  // States
  const [selectedPlan, setSelectedPlan] = useState<Plan>(
    allPlans.find(p => p.id === selectedPlanId) || allPlans.find(p => p.id === "std-12m") || allPlans[0]
  );
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    device: "Android Box / Firestick (Aanbevolen)",
    appPreference: "TiviMate (Aanbevolen)",
    includeAdult: false,
    paymentMethod: "iDEAL via Pay"
  });

  const [step, setStep] = useState<"form" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize dynamic plan selection changes
  React.useEffect(() => {
    if (selectedPlanId) {
      const found = allPlans.find(p => p.id === selectedPlanId);
      if (found) setSelectedPlan(found);
    }
  }, [selectedPlanId]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const found = allPlans.find(p => p.id === e.target.value);
    if (found) setSelectedPlan(found);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Vul alstublieft uw naam en e-mailadres in.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate real network submission with timer
    setTimeout(() => {
      setIsSubmitting(false);
      setStep("success");
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-white border border-slate-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl z-10 transition-transform duration-300 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-250 border-slate-200 flex items-center justify-between bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-600" />
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
              {step === "form" ? "Veilig IPTV Totaal Bestellen" : "Bestelling Ontvangen!"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable body content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {step === "form" ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Plan Information Card Container */}
              <div className="bg-gradient-to-r from-brand-50 to-brand-100/40 p-4 rounded-xl border border-brand-200">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-700 font-bold block">
                      Geselecteerd pakket
                    </span>
                    <h4 className="text-sm font-semibold text-slate-905 text-slate-900">
                      {selectedPlan.screens > 1 ? "IPTV MULTISCHERM" : "IPTV STANDAARD"} - {selectedPlan.duration} Maanden
                    </h4>
                  </div>
                  <div className="text-right">
                    {selectedPlan.previousPrice && (
                      <span className="text-sm line-through text-slate-500 block">€{selectedPlan.previousPrice}</span>
                    )}
                    <span className="text-lg font-bold text-slate-900">€{selectedPlan.price}</span>
                  </div>
                </div>

                {/* Switch Plan Select inside modal */}
                <div className="mt-3">
                  <label htmlFor="modal-plan-selector" className="text-[11px] font-medium text-slate-500 block mb-1">
                    Wijzig uw IPTV pakket:
                  </label>
                  <select
                    id="modal-plan-selector"
                    value={selectedPlan.id}
                    onChange={handlePlanChange}
                    className="w-full bg-white border border-slate-250 border-slate-200 rounded-lg text-xs py-2 px-3 text-slate-800 focus:outline-none focus:border-brand-500"
                  >
                    <optgroup label="Standaard Abonnementen (1 Scherm)">
                      {standardPlans.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.duration} Maanden Standaard - €{p.price}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Multischerm Abonnementen (Meerdere schermen)">
                      {multiPlans.map(p => (
                        <option key={p.id} value={p.id}>
                          {p.duration} Maanden / {p.screens} Schermen - €{p.price}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              {/* Form Input fields */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="name">
                  Volledige Naam <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Bijv. Robert de Jong"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="email">
                    E-mailadres <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="uwname@domein.nl"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1" htmlFor="whatsapp">
                    <Phone className="w-3 h-3 text-emerald-500" /> WhatsApp Nummer (Optioneel)
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="Bijv. +31 6 12345678"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition-all placeholder:text-slate-400"
                  />
                  <span className="text-[9px] text-slate-500 block mt-0.5">Voor supersnelle service & levering info</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="device">
                    Type Apparaat
                  </label>
                  <select
                    id="device"
                    name="device"
                    value={formData.device}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm text-slate-800 focus:outline-none focus:border-brand-500 transition-all"
                  >
                    <option value="Android Box / Firestick (Aanbevolen)">Android Box / Firestick</option>
                    <option value="Samsung Smart TV (IBO Player / Smarters)">Samsung Smart TV</option>
                    <option value="LG Smart TV (IBO Player)">LG Smart TV</option>
                    <option value="Apple TV / iPhone iPad">Apple TV / iOS</option>
                    <option value="Windows / Mac Computer">Windows / Mac PC</option>
                    <option value="Chromecast met Google TV">Chromecast TV</option>
                    <option value="MAG Mediabox">MAG Box</option>
                    <option value="Anders / Weet ik niet">Anders / Weet ik niet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="appPreference">
                    Welke IPTV App gebruikt u?
                  </label>
                  <select
                    id="appPreference"
                    name="appPreference"
                    value={formData.appPreference}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm text-slate-800 focus:outline-none focus:border-brand-500 transition-all"
                  >
                    <option value="TiviMate (Aanbevolen">TiviMate (Aanbevolen)</option>
                    <option value="IBO Player (Top voor Smart-TV)">IBO Player</option>
                    <option value="IPTV Smarters Pro">IPTV Smarters Pro</option>
                    <option value="XC IPTV Player">XC IPTV Player</option>
                    <option value="Geen voorkeur, stuur m3u URL">Stuur m3u playlist link</option>
                    <option value="Hulp nodig bij keuze">Graag advies van klantenservice</option>
                  </select>
                </div>
              </div>

              {/* Adult channel switch button */}
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="mr-3 text-left">
                  <span className="text-xs font-bold text-slate-800 block">X-Rated / Adult Kanalen</span>
                  <span className="text-[10px] text-slate-500">Wilt u gratis erotische zenders toevoegen aan uw pakket?</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="includeAdult"
                    checked={formData.includeAdult}
                    onChange={handleInputChange}
                    className="sr-only peer cursor-pointer"
                  />
                  <div className="w-10 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-350 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-500 peer-checked:after:bg-white" />
                </label>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 text-left">
                  Kies uw Betaalmethode
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { 
                      id: "iDEAL via Pay", 
                      label: "iDEAL (Nederland)", 
                      logos: ["https://upload.wikimedia.org/wikipedia/commons/d/d7/Logo_iDEAL.svg"] 
                    },
                    { 
                      id: "Bancontact via Pay", 
                      label: "Bancontact (België)", 
                      logos: ["https://upload.wikimedia.org/wikipedia/commons/e/f8/Bancontact_logo_colour.svg"] 
                    },
                    { 
                      id: "Creditcard", 
                      label: "Creditcard", 
                      logos: [
                        "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
                        "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                      ] 
                    },
                    { 
                      id: "Crypto", 
                      label: "Crypto (BTC/USDT)", 
                      logos: [
                        "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
                        "https://upload.wikimedia.org/wikipedia/commons/e/f5/Tether_logo.svg"
                      ] 
                    }
                  ].map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center justify-between p-3.5 rounded-xl border text-xs cursor-pointer transition-all gap-2 min-h-[52px] ${
                        formData.paymentMethod === method.id
                          ? "bg-brand-50/85 border-brand-500 text-brand-900 ring-1 ring-brand-500/10"
                          : "bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={formData.paymentMethod === method.id}
                        onChange={handleInputChange}
                        className="sr-only cursor-pointer"
                      />
                      <div className="flex items-center gap-2.5 w-full">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${formData.paymentMethod === method.id ? "border-brand-500" : "border-slate-300"}`}>
                          {formData.paymentMethod === method.id && <div className="w-2 h-2 bg-brand-500 rounded-full" />}
                        </div>
                        <span className="font-bold leading-tight block text-xs">{method.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Direct Activatie Note */}
              <div className="flex gap-2 p-3 bg-brand-50/50 text-slate-600 rounded-xl border border-brand-200 text-[10px] leading-relaxed text-left">
                <AlertCircle className="w-4.5 h-4.5 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Tip:</strong> Zodra u de bestelling verzendt, maakt ons systeem uw account aan. U ontvangt de betalingsinstructie en zenderlijst binnen <strong>15-30 minuten</strong> in uw mailbox en via WhatsApp.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-500/20 active:translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Account Genereren...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5 text-white" />
                    Abonnement Activeren
                  </>
                )}
              </button>
            </form>
          ) : (
            // Success Screen with Instructions
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-600 shadow-xl shadow-emerald-500/10 animate-bounce">
                <ShieldCheck className="w-9 h-9" />
              </div>

              <div>
                <h4 className="font-display font-extrabold text-xl text-slate-900">Hartelijk dank, {formData.name}!</h4>
                <p className="text-xs text-brand-600 font-semibold mt-1">Uw IPTV Totaal bestelling is in gang gezet.</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left space-y-2.5 text-xs text-slate-600">
                <p className="font-bold text-slate-900 border-b border-slate-100 pb-1">Wat gebeurt er nu?</p>
                
                <div className="flex gap-2 items-start">
                  <span className="bg-brand-100 text-brand-700 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">1</span>
                  <p>In onze database is uw pakket <strong>IPTV {selectedPlan.screens > 1 ? "Multischerm" : "Standaard"} ({selectedPlan.duration} mnd)</strong> voorbereid.</p>
                </div>

                <div className="flex gap-2 items-start">
                  <span className="bg-brand-100 text-brand-700 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">2</span>
                  <p>We verzenden binnen <strong>15-30 minuten</strong> een e-mail naar <strong>{formData.email}</strong> met de veilige IDEAL of cryptobetaallink en uw inloggegevens.</p>
                </div>

                {formData.whatsapp && (
                  <div className="flex gap-2 items-start">
                    <span className="bg-brand-100 text-brand-700 w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">3</span>
                    <p>Onze helpdesk stuurt u een kopie via WhatsApp op <strong>{formData.whatsapp}</strong> voor directe verbinding & persoonlijke installatiehulp.</p>
                  </div>
                )}
              </div>

              <div className="p-3 bg-emerald-500/5 rounded-xl border border-emerald-500/10 text-left">
                <p className="text-[10px] text-slate-500 leading-normal">
                  <strong>Controleer uw spambox:</strong> Geen e-mail ontvangen na 20 minuten? Controleer de map 'Ongewenste e-mail' of neem direct contact op met onze zender-activatiedienst via support@iptvtotaalnl.nl.
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Sluit Venster
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
