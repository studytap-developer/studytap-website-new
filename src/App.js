

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

<a
  href="https://t.me/studytapofficial"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-24 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition z-50"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="30" 
    height="30" 
    viewBox="0 0 24 24" 
    fill="white"
  >
    <path d="M9.964 15.568l-.396 5.587c.568 0 .814-.243 1.11-.535l2.663-2.525 5.518 4.029c1.012.557 1.734.264 2.002-.937l3.627-17.202h-.001c.323-1.518-.582-2.112-1.556-1.744L.68 9.143C-.791 9.726-.78 10.53.406 10.89l5.64 1.762 13.085-8.257c.62-.413 1.185-.184.72.266"/>
  </svg>
</a>



 <a
  href="https://wa.me/6304702631"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 32 32"
    fill="white"
  >
    <path d="M16.027 3c-7.167 0-13 5.771-13 12.889 0 2.271.635 4.479 1.842 6.415L3 29l7.012-1.832c1.865 1.004 3.98 1.532 6.015 1.532h.001c7.168 0 13-5.771 13-12.889S23.195 3 16.027 3zm7.61 18.306c-.317.888-1.836 1.704-2.515 1.814-.679.112-1.52.161-2.457-.152-.566-.185-1.293-.419-2.23-.819-3.927-1.691-6.492-5.523-6.692-5.787-.197-.263-1.6-2.13-1.6-4.063 0-1.933 1.017-2.886 1.377-3.273.36-.388.782-.484 1.043-.484.262 0 .522.003.75.014.242.01.565-.091.884.674.317.765 1.07 2.637 1.164 2.829.095.194.158.42.03.682-.126.262-.189.42-.377.644-.189.226-.397.506-.568.679-.189.188-.386.394-.166.772.22.379.977 1.61 2.1 2.61 1.443 1.273 2.663 1.668 3.04 1.856.378.188.598.157.817-.095.22-.252.943-1.1 1.196-1.477.252-.379.504-.315.846-.189.341.126 2.159 1.02 2.527 1.205.368.188.61.284.699.442.094.158.094.925-.224 1.812z" />
  </svg>
</a>

      <Footer/>
    </Router>
  );
}

export default App;
