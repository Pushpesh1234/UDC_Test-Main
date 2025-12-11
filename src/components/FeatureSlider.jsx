import React, { useRef, useEffect } from "react";
import "./FeatureSlider.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const FeatureSlider = () => {
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  // ✅ AUTO SLIDE ONLY
  useEffect(() => {
    if (!sliderRef.current) return;

    const cardWidth = 330; // card width with gap

    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;

      // Slide smoothly
      slider.scrollLeft += cardWidth;

      // Reset when end reaches
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0;
      }
    }, 2500);

    return () => clearInterval(intervalRef.current);
  }, []);

  const features = [
    { title: "CRM & Sales", description: "Boost Sales & Customer Relationships with Bitrix24's All-in-One CRM Lead management helps capture, track & nurture potential clients✨", color: "#4e54c8", logo: "Bitrix24 CRM", path: "/crm-sales" },
    { title: "Pipeline Management", description: "Bitrix24 Pipeline Management, we help you organize your sales efforts, gain crystal-clear visibility into deal flow, and drive growth with efficient automation. ✨", color: "#0077b6", logo: "Bitrix24 Pipeline", path: "/pipeline-management" },
    { title: "Projects", description: "Organize & Track Work Project Management provides the tools you need to organize work, manage team capacity, track deadlines ✨", color: "#00b894", logo: "Bitrix24 Projects", path: "/project-management" },
    { title: "Communication", description: "Unify All Comms Drive Engagement & Stronger Customer Connections A unified internal communication system is vital for modern teams.✨", color: "#38b000", logo: "Bitrix24 Messenger", path: "/communications" },
    { title: "Copilot AI", description: "Your Smart Assistant Bitrix24 CoPilot AI is integrated across all your core modules from CRM and Tasks ✨", color: "#ff9f1c", logo: "Bitrix24 Copilot", path: "/copilot" },
    { title: "Automation", description: "Streamline Workflows Bitrix24 Sales Automation** allows you to configure powerful workflows that handle routine administration, lead nurturing ✨", color: "#6c5ce7", logo: "Bitrix24 Automation", path: "/sales-automation" },
  ];

  return (
    <div className="feature-slider-section">
      <h2 className="title">Our Core Features</h2>

      <div className="slider-wrapper">
        <div className="slider-container" ref={sliderRef}>
          {features.map((item, index) => (
            <Link
              to={item.path}
              className="slider-card"
              style={{ backgroundColor: item.color }}
              key={index}
              data-aos="fade-up"
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="logo">{item.logo}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;
