import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
      <ScrollToTop smooth="true" color="#000" />
    </div>
  );
}

export default App;
