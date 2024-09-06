import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <LandingPage />
              </>
            }
          />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
