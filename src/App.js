// src/App.js
// import React from 'react';

// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <h1 className="text-4xl font-bold text-blue-600">
//         Hello Tailwind CSS in React!
//       </h1>
//     </div>
//   );
// }

// export default App;





// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';


// import Footer from './components/Footer';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home />;
//       case 'about':
//         return <About />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar onNavigate={setCurrentPage} />
//       <main className="flex-grow">
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;




// import { useState } from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import About from './components/About';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'home':
//         return <Home />;
//       case 'about':
//         return <About />;
//       case 'services':
//         return <Services />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar onNavigate={setCurrentPage} />
//       <main className="flex-grow">
//         {renderPage()}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Branches from "./pages/Branches";
import Contact from "./pages/Contact";
import TermsOfUse from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Reviews from "./pages/Reviews";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/products" element={<Products />} />
          <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
