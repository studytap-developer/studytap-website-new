
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
