// import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle, Star } from 'lucide-react';

// export default function Home() {
//   const features = [
//     {
//       icon: Zap,
//       title: 'Lightning Fast',
//       description: 'Optimized performance that delivers results at incredible speeds.',
//     },
//     {
//       icon: Shield,
//       title: 'Secure & Reliable',
//       description: 'Enterprise-grade security keeping your data safe and protected.',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Scalable Growth',
//       description: 'Built to grow with your business, from startup to enterprise.',
//     },
//   ];

//   const benefits = [
//     'Easy to integrate and customize',
//     'Professional support team available 24/7',
//     'Regular updates and improvements',
//     'Cost-effective solutions for all businesses',
//   ];

//   return (
//     <div className="bg-white">
//       <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
//           <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
//               <Star className="w-4 h-4 mr-2 fill-current" />
//               Trusted by 10,000+ customers worldwide
//             </div>
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//               Transform Your
//               <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Digital </span>
//               Experience
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Empower your business with cutting-edge solutions designed to drive growth,
//               increase efficiency, and deliver exceptional results.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center">
//                 Get Started Free
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="px-8 py-4 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-lg transition-all duration-200">
//                 Watch Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Why Choose Us
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Discover the features that make us the preferred choice for thousands of businesses
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
//               >
//                 <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <feature.icon className="w-7 h-7 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-4xl font-bold text-gray-900 mb-6">
//                 Everything You Need to Succeed
//               </h2>
//               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                 Our comprehensive platform provides all the tools and features you need
//                 to take your business to the next level.
//               </p>
//               <ul className="space-y-4 mb-8">
//                 {benefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start">
//                     <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
//                     <span className="text-gray-700 text-lg">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//               <button className="group px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-200 flex items-center">
//                 Learn More
//                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>

//             <div className="relative">
//               <div className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
//                 <div className="bg-white rounded-xl p-6 mb-4">
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-sm font-semibold text-gray-500">PERFORMANCE</span>
//                     <span className="text-2xl font-bold text-green-500">+127%</span>
//                   </div>
//                   <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                     <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: '85%' }}></div>
//                   </div>
//                 </div>
//                 <div className="bg-white rounded-xl p-6">
//                   <h4 className="font-semibold text-gray-900 mb-3">Success Metrics</h4>
//                   <div className="space-y-3">
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600">User Satisfaction</span>
//                       <span className="font-bold text-gray-900">98%</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600">Uptime</span>
//                       <span className="font-bold text-gray-900">99.9%</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600">Response Time</span>
//                       <span className="font-bold text-gray-900">&lt;50ms</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

     
//     </div>
//   );
// }



import { Star, Download, BookOpen, FolderTree, RefreshCw, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function App() {
    const navigate = useNavigate();
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
    Explore Branches
      <ArrowRight className="w-5 h-5" />
    </button>
    
      </div>
    </div>
  </section>

</div>

  );
}

export default App;
