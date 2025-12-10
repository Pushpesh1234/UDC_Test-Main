import { useState, useRef,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BitrixShowcase from "./components/BitrixShowcase";
import FeatureSlider from "./components/FeatureSlider";
import Technology from "./components/Technology";
import Pricing from "./components/Pricing";
import Bitrix24CRM from './pages/Bitrix24CRM';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonial from './components/Testimonial';
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import IndustryVertical from "./components/IndustryVertical";
import Contact from "./pages/ContactUs";
import DepartmentSection from "./components/DepartmentSection";
import BitrixPopupForm from './components/BitrixPopupForm';
import LeadManagementPage from './pages/LeadManagementPage'; // This looks correct
import PipelineManagementPage from './pages/PipelineManagementPage'
import ProjectManagementPage from './pages/ProjectManagementPage'
import SalesAutomationPage from './pages/SalesAutomationPage';
import CommunicationsPage from './pages/CommunicationsPage';
import CoPilotAIPage from './pages/CoPilotAIPage';
import ScrollToTop from "./ScrollToTop"; 
import FeaturesSection from "./components/FeaturesSection";
import Bitrix24IndustrySolutions from "./pages/Bitrix24IndustrySolutions";
import TaskProjects from "./pages/TaskProJects";
import CRM from "./pages/CRM";
import Landing from "./pages/Landing";
import { Button } from "react-bootstrap"; 

// 1. 🚀 IMPORT YOUR NEW PAGE HERE
// Make sure this path is correct!


function App() {
  const [showAuth, setShowAuth] = useState(false);
  const popupFormRef = useRef(); 
   useEffect(() => {
    // Prevent browser restoring previous scroll and jump to anchors
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Remove any hash (e.g. #contact) or trailing /contact on initial load
    const { hash, pathname, search } = window.location;
    const base = "/UDC_Test-Main";
    if (hash === "#contact" || pathname.endsWith("/contact")) {
      const newUrl = base + (search || "");
      window.history.replaceState(null, "", newUrl);
    }

    // Ensure page is at top on first render (fixes mobile jump-to-footer)
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter basename="/UDC_Test-Main">
      <div className="font-sans">
        <Navbar
  onAuthOpen={() => setShowAuth(true)}
  onOpenForm={() => popupFormRef.current.open("Navbar")}
/>
 <ScrollToTop />
                <Routes>
                    {/* Landing is now the default page on site open */}
                    <Route path="/" element={<Landing />} />

                    {/* Preserve the previous homepage composition at /home */}
                    <Route
                        path="/home"
                        element={
                            <>
                                <Hero onPopupOpen={() => popupFormRef.current.open()} />
                                <FeaturesSection />
                                <BitrixShowcase onOpenForm={(label) => popupFormRef.current.open(label)} />
                                <FeatureSlider />
                                <Technology />
                                <IndustryVertical onOpenForm={() => popupFormRef.current.open("Industry Vertical")} />
                                <DepartmentSection onPopupOpen={() => popupFormRef.current.open()} />
                                <Testimonial />
                                <WhyChooseUs onPopupOpen={() => popupFormRef.current.open()} />
                            </>
                        }
                    />

{/*           <Route path="/Bitrix24CRM" element={<Bitrix24CRM />} /> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/services" element={<Services onPopupOpen={() => popupFormRef.current.open()} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
<Route path="/bitrix24-crm" element={<CRM />} />
<Route path="/task-projects" element={<TaskProjects />} />
{/* <Route path="/social-intranet" element={<Bitrix24Applications />}/>
<Route path="/documents" element={<Bitrix24Applications />}/>
<Route path="/chat-viedos" element={<Bitrix24Applications />}/>
<Route path="/drive" element={<Bitrix24Applications />}/>
<Route path="/calenders" element={<Bitrix24Applications />}/>
<Route path="/mail" element={<Bitrix24Applications />}/>
<Route path="/cleints" element={<Bitrix24Applications />}/>
<Route path="/telephony" element={<Bitrix24Applications />}/>
<Route path="/hr" element={<Bitrix24Applications />}/>
<Route path="/mobile" element={<Bitrix24Applications />}/>
<Route path="/sites" element={<Bitrix24Applications />}/> */}

          
          {/* 2. ✅ ADD THE NEW ROUTE HERE for your "CRM & Sales" page */}
          <Route path="/crm-sales" element={<LeadManagementPage />} />
          <Route path="/pipeline-management" element={<PipelineManagementPage />} />
          <Route path="/project-management" element={<ProjectManagementPage />} />
          <Route path="/sales-automation" element={<SalesAutomationPage />} />
          <Route path="/communications" element={<CommunicationsPage />} />
          <Route path="/copilot" element={<CoPilotAIPage />} />
        </Routes>

      
        <BitrixPopupForm ref={popupFormRef} />

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;