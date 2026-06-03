import React, { useState } from "react";
import { BlogPost } from "../types";
import { Calendar, User, Clock, ArrowRight, X, ChevronRight, Share2, CornerDownRight } from "lucide-react";

interface BlogSectionProps {
  posts: BlogPost[];
  onOpenOrder: () => void;
}

export default function BlogSection({ posts, onOpenOrder }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleShare = (postTitle: string) => {
    alert(`Bedankt voor het delen van "${postTitle}"! De link is gekopieerd naar uw klembord.`);
  };

  return (
    <div className="space-y-8">
      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-brand-300 hover:bg-slate-50/20 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group shadow-sm cursor-pointer"
          >
            <div>
              {/* Card Image banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-brand-600/95 backdrop-blur-sm text-white text-[10px] font-bold py-1 px-2.5 rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
              </div>

              {/* Content body Info */}
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-3 text-[10px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 leading-snug group-hover:text-brand-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {post.excerpt.replace("...", "")}
                  <span className="text-brand-600 font-semibold hover:underline inline-flex items-center gap-0.5 ml-1">
                    ...lees verder
                  </span>
                </p>
              </div>
            </div>

            {/* Read CTA Button */}
            <div className="p-4 pt-0 border-t border-slate-100 pb-5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPost(post);
                }}
                className="w-full flex items-center justify-between mt-3 text-xs font-bold text-brand-600 group-hover:text-brand-700 transition-colors cursor-pointer"
              >
                <span>Lees Gids Volledig</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>      {/* Immersive Blog Post Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Modal Backdrop */}
          <div
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-md"
            onClick={() => setSelectedPost(null)}
          />

          <div className="relative bg-white border border-slate-200 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl z-10 transition-all duration-300 max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Image Header Banner */}
            <div className="relative h-48 sm:h-64 bg-slate-100 flex-shrink-0">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              
              {/* Category Badge overlay */}
              <span className="absolute top-4 left-4 bg-brand-600 text-white text-[10px] sm:text-[11px] font-bold py-1 px-3 rounded-full uppercase tracking-widest bh-shadow">
                {selectedPost.category}
              </span>

              {/* Close Button overlay */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-white/80 p-2 rounded-full text-slate-705 text-slate-805 hover:text-slate-950 hover:bg-white shadow transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Post Scrollable Workspace body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-6">
              
              {/* Blog Metadata Row */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-mono border-b border-slate-100 pb-4">
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-md">
                  <User className="w-3.5 h-3.5 text-brand-605" />
                  Geschreven door: {selectedPost.author}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5 text-brand-605" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 px-2.5 py-1 rounded-md">
                  <Clock className="w-3.5 h-3.5 text-brand-605" />
                  {selectedPost.readTime}
                </span>
              </div>

              {/* Main Title heading */}
              <h3 className="font-display font-extrabold text-xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                {selectedPost.title}
              </h3>

              {/* Content Paragraphs mapper */}
              <div className="space-y-4 text-sm sm:text-base text-slate-605 text-slate-700 leading-relaxed font-sans">
                {selectedPost.content.map((paragraph, index) => (
                  <p key={index} className="capitalize-first-letter">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share and Next Actions Footer */}
              <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-2xl mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left w-full sm:w-auto">
                  <span className="text-[11px] sm:text-xs text-slate-500 block font-semibold">
                    Klaar voor de ultieme tv-revolutie?
                  </span>
                  <span className="text-xs sm:text-sm text-slate-900 font-extrabold block">
                    Bestel IPTV Totaal in 5 minuten.
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleShare(selectedPost.title)}
                    className="p-2 sm:p-3 bg-slate-200/60 hover:bg-slate-200 border border-slate-300 rounded-xl text-slate-700 hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer"
                    title="Deel dit artikel"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedPost(null);
                      onOpenOrder();
                    }}
                    className="flex-1 sm:flex-initial bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl transition-all shadow-md shadow-brand-500/10 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Bestel Nu
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
