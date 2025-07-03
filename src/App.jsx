import Home from "./components/Home";
import Devops from './components/devops';
import TechStackPage from './components/TechStackPage';
import ProfileData from './components/ProfileCard/ProfileData';
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Dt from "./components/DigitalTransformationService.jsx";
import FullstackService from "./components/FullstackService.jsx";
import CloudService from "./components/CloudService.jsx";
import TalentHiring from './components/Talent_Hiring.jsx'
import MobileDevelopmentService from "./components/mobileDevelopmentService.jsx";
import AiMachineLearning from "./components/AI&ML.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import OurStory from "./components/OurStory";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/whyChooseUs";
import Footer from "./components/footer";
import AboutUsNexotra from "./components/AboutUsNexotra";
import Company from "./components/Company";
import Blogs from "./components/Insights/Blogs";
import BlogPost from "./components/Insights/BlogPost";
import TheTeam from "./components/TheTeam";
import TechGridSection from "./components/TechGrid/TechGridSection";
import Teamscards from "./components/Teamscards";
import Cybersecurity from "./components/CyberSecurityService.jsx";


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
       <Navbar /> 
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <AboutUsNexotra />
              <OurStory />
              {/* <About /> */}
              <ServicesSection />
              <WhyChooseUs />
               <TechStackPage />
              <TheTeam />
              {/* <Services /> */}
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/ServicesSection" element={<ServicesSection />} />
        <Route
          path="/company"
          element={
            <>
              <Company /> <Footer />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digital-transformation" element={<Dt />} />
        <Route path="/services/full-stack" element={<FullstackService />} />
        <Route path="/services/Talent-Hiring" element={<TalentHiring />} />
        <Route path="/services/cybersecurity"element={<Cybersecurity />} />
        <Route path="/services/cloud-integration" element={<CloudService />} />
        <Route
          path="/services/mobile-development"
          element={<MobileDevelopmentService />}
        />
        <Route path="/services/AI&ML" element={<AiMachineLearning />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/post/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
