import { React } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import HomePage from "./Page/HomePage";
import AboutPage from "./Page/AboutPage";
import Service from "./Page/Service";
import BladderC from "./components/BladderC";
import PenisCancer from "./components/PenisCancer";
import Varicocele from "./components/Varicocele";
import Impotence from "./components/Impotence";
import Incoti from "./components/Incoti";
import Infert from "./components/Infert"
import ProstateGland from "./components/ProstateGland";
import ProstateCancer from "./components/ProstateCancer";
import Endouro from "./components/Endouro";
import KidneyTrans from "./components/KidneyTrans";
import AgingM from "./components/AgingM";
import Andro from "./components/Andro";
import PenisEn from "./components/PenisEn";
import BloodUrine from "./components/BloodUrine";
import KidneyCancer from "./components/KidneyCancer";
import Robot from "./components/Robot";
import CaseStudies from "./Page/CaseStudies";
import Contact from "./Page/Contact";
import FaqPage from "./Page/FaqPage"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UrinaryTract from "./components/UrinaryTract";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/BladderC" element={<BladderC />} />
          <Route path="/penisCancer" element={<PenisCancer />} />
          <Route path="/Impotence" element={<Impotence />} />
          <Route path="/Incoti" element={<Incoti />} />
          <Route path="/ProstateGland" element={<ProstateGland />} />
          <Route path="/Varicocele" element={<Varicocele />} />
          <Route path="/ProstateCancer" element={<ProstateCancer />} />
          <Route path="/UrinaryTract" element={<UrinaryTract />} />
          <Route path="/Endouro" element={<Endouro />} />
          <Route path="/Infert" element={<Infert />} />
          <Route path="/KidneyTrans" element={<KidneyTrans />} />
          <Route path="/BloodUrine" element={<BloodUrine />} />
          <Route path="/KidneyCancer" element={<KidneyCancer />} />
          <Route path="/AgingM" element={<AgingM />} />
          <Route path="/Andro" element={<Andro />} />
          <Route path="/PenisEn" element={<PenisEn />} />
          <Route path="/Robot" element={<Robot />} />
          <Route path="/caseStuies" element={<CaseStudies />} />
          {/* <Route path="/faq" element={<Faqs />} /> */}
          <Route path="/Faq" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
