import React, { useState, useEffect } from "react";
import { Play, Tv, Volume2, ShieldCheck, Film, Compass, Heart, Settings, HeartPulse, Sparkles, User } from "lucide-react";

export default function DeviceMockup() {
  const [activeChannel, setActiveChannel] = useState("Ziggo Sport Select 4K");
  const [currentRating, setCurrentRating] = useState(5);
  const [activeTab, setActiveTab] = useState("live"); // live, movies, series

  const liveChannels = [
    { name: "Ziggo Sport Select 4K", prog: "Formule 1: GP Zandvoort - Live", time: "14:00 - 16:30", category: "Sport" },
    { name: "ESPN 1 Ultra HD", prog: "Eredivisie: Ajax vs Feyenoord - Live", time: "14:30 - 16:45", category: "Sport" },
    { name: "Viaplay HD", prog: "Darts Premier League - Live", time: "19:00 - 23:00", category: "Sport" },
    { name: "NPO 1 Full HD", prog: "NOS Journaal / Studio Sport", time: "18:00 - 19:00", category: "NL" },
    { name: "RTL 4 HD", prog: "The Voice Holland", time: "20:30 - 22:30", category: "NL" }
  ];

  const movies = [
    { title: "Dune: Part Two", year: "2024", duration: "2h 46m", rating: "9.2", genre: "Sci-Fi", bg: "bg-slate-700" },
    { title: "Gladiator II", year: "2024", duration: "2h 28m", rating: "8.9", genre: "Actie", bg: "bg-amber-900" },
    { title: "Oppenheimer 4K", year: "2023", duration: "3h 00m", rating: "9.4", genre: "Drama", bg: "bg-neutral-800" },
    { title: "Spider-Man: No Way Home", year: "2021", duration: "2h 28m", rating: "8.8", genre: "Fantasie", bg: "bg-red-950" }
  ];

  return (
    <div id="iptv-devices-showcase" className="relative select-none w-full max-w-4xl mx-auto py-6">
      {/* Glow Effects behind devices */}
      <div className="absolute -inset-4 bg-brand-500/10 rounded-[3rem] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -right-8 -top-8 w-48 h-48 bg-brand-400/20 rounded-full blur-2xl pointer-events-none" />

      {/* Main TV Frame */}
      <div className="relative mx-auto bg-slate-900 rounded-2xl p-3 border-4 border-slate-700 shadow-2xl overflow-hidden shadow-brand-500/10">
        
        {/* Inner Screen */}
        <div className="relative bg-[#090d16] rounded-lg aspect-[16/9] w-full overflow-hidden flex flex-col font-sans">
          
          {/* TV Screen Top bar */}
          <div className="h-9 border-b border-white/5 bg-[#0d1424] px-4 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-semibold text-slate-300">IPTV TOTAAL PLAYER v4.1</span>
              <span className="bg-brand-500/20 text-brand-400 text-[9px] px-1.5 py-0.5 rounded font-bold font-mono">STABIEL</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="font-mono">IPTV NL #1</span>
              <span>Verbeterde Buffering (0.2s)</span>
              <div className="flex items-center gap-1 font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                99.9% UPTIME
              </div>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* TV Screen Sidebar */}
            <div className="w-16 sm:w-20 bg-[#070b13] border-r border-white/5 flex flex-col items-center py-4 justify-between">
              {/* Profile icon */}
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-brand-600 flex items-center justify-center text-white ring-1 ring-white/10">
                  <User className="w-4 h-4" />
                </div>
                <span className="text-[8px] text-slate-400">Klant</span>
              </div>

              {/* Main TV navigation */}
              <div className="flex flex-col gap-4 w-full px-2">
                <button
                  onClick={() => setActiveTab("live")}
                  className={`flex flex-col items-center gap-1 py-1 px-1 rounded-md transition-all ${
                    activeTab === "live" ? "text-brand-400 bg-brand-500/10" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Tv className="w-4.5 h-4.5" />
                  <span className="text-[8px] font-bold">Live TV</span>
                </button>
                <button
                  onClick={() => setActiveTab("movies")}
                  className={`flex flex-col items-center gap-1 py-1 px-1 rounded-md transition-all ${
                    activeTab === "movies" ? "text-brand-400 bg-brand-500/10" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Film className="w-4.5 h-4.5" />
                  <span className="text-[8px] font-bold">Films VOD</span>
                </button>
                <button
                  onClick={() => setActiveTab("series")}
                  className={`flex flex-col items-center gap-1 py-1 px-1 rounded-md transition-all ${
                    activeTab === "series" ? "text-brand-400 bg-brand-500/10" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Compass className="w-4.5 h-4.5" />
                  <span className="text-[8px] font-bold">Series</span>
                </button>
              </div>

              {/* Settings icon */}
              <div className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300">
                <Settings className="w-4 h-4" />
                <span className="text-[8px]">Apps</span>
              </div>
            </div>

            {/* TV Screen Content Area */}
            <div className="flex-1 bg-[#0b101c] p-4 flex flex-col overflow-hidden">
              {activeTab === "live" && (
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-bold text-slate-200 flex items-center gap-1">
                      <Tv className="w-4.5 h-4.5 text-brand-400" />
                      Nederlandse Premium TV & Sport (4K HDR)
                    </span>
                    <span className="text-[10px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      ZAP SNELHEID &lt; 0.3S
                    </span>
                  </div>

                  {/* Channel Active Preview Panel */}
                  <div className="h-28 rounded-xl bg-slate-950 p-3 border border-white/5 relative flex flex-col justify-between overflow-hidden">
                    {/* Fake Video BG elements */}
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-950/40 via-purple-950/10 to-slate-950/40 opacity-75" />
                    
                    {/* Live Stream visual indicators */}
                    <div className="relative z-10 flex justify-between">
                      <div>
                        <span className="bg-red-600 text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase mr-2 animate-pulse inline-flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-white rounded-full inline-block animate-ping" />
                          LIVE - 4K ULTRA HD
                        </span>
                        <span className="font-mono text-[10px] text-brand-300">STREAMPURE® LAAG LATENCY</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-300">
                        <Volume2 className="w-4 h-4 text-brand-400" />
                        <span className="font-mono text-[10px] bg-slate-900/60 px-2 rounded border border-white/5">E-AC-3 AUDIO</span>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h4 className="text-sm font-display font-extrabold text-white">{activeChannel}</h4>
                      <p className="text-xs text-slate-300 font-medium">
                        {liveChannels.find(c => c.name === activeChannel)?.prog || "Sport Event Live"}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Tijd: {liveChannels.find(c => c.name === activeChannel)?.time || "14:00 - 17:00"} | EPG Beveiligd & Synchroon
                      </p>
                    </div>

                    {/* Progress tracking line */}
                    <div className="relative z-10 w-full h-1 bg-slate-800 rounded-full overflow-hidden mt-1">
                      <div className="bg-brand-500 h-full w-[45%]" />
                    </div>
                  </div>

                  {/* Grid Channels */}
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 overflow-y-auto">
                    {liveChannels.map((chan) => (
                      <div
                        key={chan.name}
                        onClick={() => setActiveChannel(chan.name)}
                        className={`p-2 rounded-lg cursor-pointer border text-left transition-all flex items-center justify-between ${
                          activeChannel === chan.name
                            ? "bg-brand-600/20 border-brand-500/55"
                            : "bg-slate-900/40 border-white/5 hover:bg-[#151c2e]"
                        }`}
                      >
                        <div className="truncate">
                          <p className="text-[10px] font-bold text-white truncate">{chan.name}</p>
                          <p className="text-[9px] text-slate-400 truncate">{chan.prog}</p>
                        </div>
                        <Play className={`w-3 h-3 flex-shrink-0 ${activeChannel === chan.name ? "text-brand-400 fill-brand-400" : "text-slate-500"}`} />
                      </div>
                    ))}
                  </div>

                </div>
              )}

              {activeTab !== "live" && (
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[12px] font-bold text-slate-200">
                        {activeTab === "movies" ? "Video-On-Demand (VOD): Nieuwe Bioscoopfilms" : "On-Demand Series: Netflix, HBO & Disney+ Netflix originals"}
                      </span>
                      <span className="text-[9px] bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded font-bold font-mono">
                        200.000+ COMPLEET AANBOD
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {movies.map((m, i) => (
                        <div key={i} className="bg-slate-900 rounded-lg overflow-hidden border border-white/5 flex flex-col justify-between shadow-md">
                          <div className={`h-16 flex items-center justify-center relative ${m.bg}`}>
                            {/* Visual Abstract Layer */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                            <span className="absolute top-1 right-1 bg-brand-500 text-white text-[8px] font-bold px-1 rounded font-mono">4K HDR</span>
                            <Film className="w-5 h-5 text-white/30" />
                          </div>
                          <div className="p-1.5 text-left bg-slate-900">
                            <h5 className="text-[10px] font-extrabold text-white truncate">{m.title}</h5>
                            <div className="flex justify-between items-center text-[8px] text-slate-400 mt-1">
                              <span>{m.genre}</span>
                              <span className="text-amber-400 font-bold">★ {m.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 p-2 bg-[#090e17] rounded-lg border border-white/5 text-[10px] text-slate-400 leading-normal flex gap-2 items-center">
                    <span className="bg-brand-500/20 text-brand-400 font-bold px-1.5 py-0.5 rounded text-[8px] flex-shrink-0 animate-pulse">UP-TO-DATE</span>
                    <span>Dagelijks automatische updates van films en series inclusief Nederlandse ondertiteling en geluidsopties.</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* TV Stand elements */}
        <div className="w-full flex justify-center mt-1">
          <div className="w-24 h-2 bg-slate-800 rounded-t-md" />
        </div>
        <div className="w-full flex justify-center -mt-0.5">
          <div className="w-32 h-1 bg-slate-700 rounded-md" />
        </div>
      </div>

      {/* Floating Mobile Phone Mockup aligned right-center */}
      <div className="absolute -right-4 -bottom-6 hidden sm:block w-28 bg-slate-950 rounded-2xl p-1.5 border border-slate-700 shadow-2xl shadow-black/80">
        <div className="bg-[#0b101d] aspect-[9/19] rounded-xl overflow-hidden flex flex-col border border-white/10 p-1">
          <div className="w-8 h-2.5 bg-black rounded-b-md mx-auto mb-1.5 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
          </div>

          <div className="flex-1 flex flex-col justify-between p-1 text-left text-[6px]">
            <div className="flex justify-between text-slate-400">
              <span className="font-bold">IPTV Totaal App</span>
              <span>100%</span>
            </div>

            <div className="space-y-1 my-2">
              <div className="p-1 bg-slate-800 rounded font-bold text-white">🇳🇱 Eredivisie Live</div>
              <div className="p-1 bg-slate-800 rounded font-bold text-slate-300">⚽ Premier League</div>
              <div className="p-1 bg-brand-500 text-white rounded font-bold">🎬 Oppenheimer (4K)</div>
            </div>

            <div className="text-[5px] text-slate-500 text-center">
              Altijd in uw broekzak
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
