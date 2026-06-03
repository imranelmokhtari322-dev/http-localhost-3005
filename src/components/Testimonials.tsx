import React from "react";
import { Review } from "../types";
import { Star, ShieldCheck, Heart } from "lucide-react";

interface TestimonialsProps {
  reviews: Review[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
  return (
    <div className="space-y-10">
      {/* Trust Badge overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto bg-white border border-slate-200 p-5 rounded-2xl text-center shadow-sm">
        <div className="flex flex-col items-center justify-center p-2">
          <span className="text-3xl font-black text-slate-900">4.9 / 5</span>
          <div className="flex gap-1 my-1.5 justify-center">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs text-slate-500 font-medium">Beste Beoordeelde IPTV Provider</span>
        </div>
        
        <div className="flex flex-col items-center justify-center p-2 border-y sm:border-y-0 sm:border-x border-slate-100">
          <span className="text-3xl font-black text-slate-900">1.450+</span>
          <span className="text-xs font-bold text-brand-600 mt-1.5 uppercase tracking-wider">Ervaringen</span>
          <span className="text-xs text-slate-500 font-medium mt-0.5">Tevreden Nederlandse & Belgische klanten</span>
        </div>

        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex items-center gap-1 text-emerald-600 font-bold justify-center">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-3xl font-black">100%</span>
          </div>
          <span className="text-xs font-bold text-slate-705 text-slate-800 mt-1.5">Gegarandeerde Betrouwbaarheid</span>
          <span className="text-xs text-slate-500 font-medium mt-0.5">Geen verborgen kosten, Direct online</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl flex flex-col justify-between hover:border-brand-200 transition-all duration-350 relative group hover:shadow-lg hover:shadow-brand-500/5 capitalize-first-letter"
          >
            {/* Top quote design details */}
            <div className="absolute top-4 right-6 text-slate-100 font-serif text-5xl leading-none font-bold select-none pointer-events-none group-hover:text-slate-200 transition-colors">
              ”
            </div>

            <div className="space-y-4">
              {/* Star row */}
              <div className="flex items-center gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
                <span className="text-slate-400 text-xs ml-1">{rev.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic relative z-10">
                "{rev.comment}"
              </p>
            </div>

            {/* Profile info footer container */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center font-display font-extrabold text-brand-600 uppercase text-xs">
                  {rev.avatarSeed.substring(0, 2)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                    {rev.name}
                    <span className="text-[10px] text-slate-500 font-normal font-medium">uit {rev.location}</span>
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5 text-emerald-600 text-[10px] sm:text-[11px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                    Geverifieerde IPTV Klant
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
