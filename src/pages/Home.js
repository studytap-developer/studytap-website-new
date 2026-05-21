
import React from "react";
import { Star, Download, BookOpen, FolderTree, RefreshCw, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
     const reels = [
    { title: "EDTA Shortcut", video: "/reels/v1.mp4" },
    { title: "R18 Chemistry Hack", video: "/reels/v2.mp4" },
    { title: "Ion Exchange Resin", video: "/reels/v3.mp4" },
    { title: "Exam Tips", video: "/reels/v4.mp4" },
  ];

  const [reelOpen, setReelOpen] = React.useState(false);
  const [activeReel, setActiveReel] = React.useState(null);

  const openReel = (index) => {
    setActiveReel(index);
    setReelOpen(true);
  };

  const closeReel = () => {
    setReelOpen(false);
    setActiveReel(null);
  };

  return (

<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white bg-slate-300">



  {/* ---------------- SECTION 1 ---------------- */}

<section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background animation blobs */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
          <Star className="w-4 h-4 mr-2 fill-current" />
          Trusted by 30,000+ Students
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="text-blue-500">Tap it!</span><br />
          <span className="text-gray-900">Get it!</span><br />
          <span className="text-gray-900">Read it!</span><br />
          <span className="text-blue-400">Excel in it!</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Access 10 years of previous question papers with answers for JNTUH & JNTUK.
          Download branch-wise, semester-wise content anytime, anywhere.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-10 flex-wrap">
            <a href="https://play.google.com/store/apps/details?id=com.studytap " target="_blank" rel="noopener noreferrer">
          <button className="group px-6 py-3 bg-black text-white rounded-lg font-semibold hover:scale-105 transition-all duration-200 flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>
          </a>

          <a href="https://apps.apple.com/in/app/studytap/id6443762838 " target="_blank" rel="noopener noreferrer">
  <button className="group px-6 py-3 bg-black text-white rounded-lg font-semibold hover:scale-105 transition-all duration-200 flex items-center gap-3">
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
    </svg>
    <div className="text-left">
      <div className="text-xs">Download on the</div>
      <div className="text-sm font-semibold">App Store</div>
    </div>
  </button>
</a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold">30K +</div>
            <p className="text-sm text-gray-600">Downloads</p>
          </div>
          <div>
            <div className="text-3xl font-bold">14</div>
            <p className="text-sm text-gray-600">Engineering Branches</p>
          </div>
          <div>
            <div className="text-3xl font-bold flex items-center gap-1">
              4.2 <Star className="w-5 h-5 fill-gray-900" />
            </div>
            <p className="text-sm text-gray-600">Succes Rating</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative">
        <div className="bg-white rounded-2xl shadow-xl p-4">
          <img
            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Students working together"
            className="rounded-xl w-full"
          />
        </div>
      </div>

    </div>
  </div>
</section>



  {/* ---------------- SECTION 2 ---------------- */}
  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-blue-500">StudyTap</span>?</h2>
      <p className="text-gray-600 text-lg">Everything you need to excel in your engineering exams, all in one place</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8 mb-10">
      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        <div className="bg-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <BookOpen className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Question Banks</h3>
        <p className="text-gray-600 leading-relaxed">Access 10 years of previous question papers with detailed answers for all engineering branches.</p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        <div className="bg-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <FolderTree className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Branch-Wise Organization</h3>
        <p className="text-gray-600 leading-relaxed">Question papers organized by branch, semester, and subject for easy navigation and study.</p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition">
        <div className="bg-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
          <RefreshCw className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">JNTUH & JNTUK Coverage</h3>
        <p className="text-gray-600 leading-relaxed">
          Complete coverage of R18, R19, R20, R22, R23 regulations for both universities.
        </p>
      </div>
    </div>

    <div className="text-center">
        <button
      onClick={() => navigate("/products")}
      className="bg-blue-500 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-600 transition font-medium"
    >
      View All Features
      <ArrowRight className="w-5 h-5" />
    </button>
    </div>
  </section>

  {/* ---------------- SECTION 3 ---------------- */}
  <section className="bg-blue-300 text-white py-20">
    <div className="max-w-4xl mx-auto text-center px-6">
      <h2 className="text-4xl font-bold mb-6">Ready to Excel in Your Exams?</h2>
      <p className="text-lg mb-10 text-blue-50">Join 50,000+ students already using StudyTap to ace engineering exams</p>

      <div className="flex gap-4 justify-center">
              <button
      onClick={() => navigate("/products")}
      className="bg-white text-blue-500 px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-200 transition font-medium"
    >
      View All Features
      <ArrowRight className="w-5 h-5" />
    </button>
           <button
      onClick={() => navigate("/branches")}
      className="bg-white text-blue-500 px-8 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-blue-200 transition font-medium"
    >
    Explore Branchesƒ
      <ArrowRight className="w-5 h-5" />
    </button>
    
      </div>
    </div>
  </section>

  {/* ================= REELS SECTION ================= */}

  <>
      {/* ================= REELS SECTION ================= */}
      <section className="bg-[#f5f5f7]">
        <div className="max-w-7xl mx-auto px-6 py-16">

          <div
            className="
              flex gap-6 overflow-x-auto snap-x snap-mandatory
              md:grid md:grid-cols-4 md:gap-6 md:overflow-hidden
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {reels.slice(0, 4).map((reel, idx) => (
              <button
                key={idx}
                className="
                  snap-start min-w-[220px] md:min-w-0
                  bg-white rounded-[30px]
                  shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  hover:shadow-[0_16px_45px_rgba(0,0,0,0.12)]
                  transition-all hover:-translate-y-1
                  overflow-hidden
                "
              >
                {/* REELS VIDEO CARD */}
                <div className="relative w-full h-[380px] md:h-[420px] overflow-hidden bg-black">

                  {/* Preview video (muted) */}
                  <video
                    src={reel.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />

                  {/* Gradient overlay (unchanged) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                  {/* Watch button */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      openReel(idx);
                    }}
                    className="absolute bottom-5 left-1/2 -translate-x-1/2
                               bg-white/95 backdrop-blur
                               rounded-full px-6 py-2.5
                               text-sm font-semibold shadow-lg cursor-pointer"
                  >
                    ▶ Watch
                  </div>

                </div>
              </button>
            ))}
          </div>

          {/* View More on Instagram button */}
          <div className="flex justify-center mt-10">
            {/* Gradient border ring */}
            <div
              className="p-[2px] rounded-full"
              style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888, #8134af, #515bd4)" }}
            >
              <a
                href="https://www.instagram.com/studytap.official/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-3 px-8 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 group"
                style={{ background: "linear-gradient(135deg, #f58529 0%, #dd2a7b 40%, #8134af 70%, #515bd4 100%)" }}
              >
                {/* Shine sweep on hover */}
                <span
                  className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)" }}
                />
                {/* Instagram icon */}
                <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="relative z-10 text-sm tracking-wide">View More on Instagram</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      {reelOpen && activeReel !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm
                     flex items-center justify-center"
          onClick={closeReel}
        >
          <div
            className="relative w-[90%] max-w-[420px] h-[75vh]
                       bg-black rounded-[28px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeReel}
              className="absolute top-4 right-4 z-10
                         bg-white/90 rounded-full px-3 py-1
                         text-sm font-semibold"
            >
              ✕
            </button>

            {/* Video with sound */}
            <video
              src={reels[activeReel].video}
              className="w-full h-full object-cover"
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </>
</div>

  );
}

export default App;


