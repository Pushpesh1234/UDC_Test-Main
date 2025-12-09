import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <>
      {/* TOP TEXT SECTION */}
      <div className="udc-intro-text">
        <p>
          <strong>Unique Design Consultant (UDC)</strong> is an India-based Bitrix24 Gold Partner 
          delivering CRM, ERP, and business automation solutions globally. We specialize in 
          <strong> Bitrix24, Zoho, Odoo, and ZWCAD</strong>, helping businesses streamline operations, 
          enhance customer relationships, and achieve faster digital growth.
        </p>
      </div>

      <div className="udc-about-section">

        {/* LEFT IMAGE */}
        <div className="udc-about-image">
          <img 
            src="/UDC_Test-Main/assets/img/udc1.jpg" 
            alt="UDC About"
          />
        </div>

        <div className="udc-about-content">
  <h2>About UDC</h2>

  <p>
    UDC (Unique Design Consultant) is a leading IT solutions provider offering 
    end-to-end CRM and ERP implementation services for platforms like 
    <strong> Bitrix24, Zoho CRM, Odoo ERP, and ZWCAD</strong>. As a trusted 
    India-based Bitrix24 Gold Partner, we specialize in delivering custom CRM setups, 
    workflow automation, business process optimization, and system integrations 
    tailored to every industry.
  </p>

  <p>
    With a strong focus on digital transformation, we help businesses automate 
    daily operations, enhance team productivity, improve customer experience, 
    and scale faster with smart, efficient, and fully connected systems. Our 
    team provides custom development, cloud & on-premise deployment, API 
    integrations, data migration, and 24×7 global support, ensuring a seamless 
    technology experience from start to finish.
  </p>

  <p>
    Whether you are a startup, SME, or enterprise, UDC empowers your business 
    with reliable CRM–ERP solutions, advanced automation, and long-term support 
    to achieve measurable growth and operational excellence.
  </p>
</div>

      </div>

      {/* FEATURES (YOUR EXISTING CODE) */}
      <div className="features-wrapper">

        {/* BOX 1 */}
        <div className="feature-box">
          <div className="monitor-frame">
            <img src="/UDC_Test-Main/assets/img/logo.png" alt="CRM" className="monitor-screen" />
          </div>

          <h4 className="feature-small-title"></h4>
          <h2 className="feature-title">
            ALL IN ONE PLATFORM <br />
          </h2>
          <div className="feature-underline"></div>

          <p className="feature-text">
            Bitrix24 is an all-in-one business management platform that brings your CRM, Projects, Tasks, Collaboration, Communication, Contact Center, HR, and Marketing into one unified workspace. Trusted by over 12 million+ companies worldwide, Bitrix24 helps businesses streamline their operations, improve team productivity, and deliver exceptional customer experiences all from a single platform.
          </p>

          <a href="#" className="feature-link">Bitrix24 CRM &gt;&gt;&gt;</a>
        </div>

        {/* BOX 2 */}
        <div className="feature-box">
          <div className="monitor-frame">
            <img src="/UDC_Test-Main/assets/img/Planner.png" alt="Project" className="monitor-screen" />
          </div>

          <h4 className="feature-small-title">Zoho</h4>
          <h2 className="feature-title">
            <br /> 
          </h2>
          <div className="feature-underline"></div>

          <p className="feature-text">
            Bitrix24 has extensive organisational features to enhance efficiency at personal
            and group levels. Tasks can be defined for oneself, assigned or delegated to a 
            colleague. Project management features of the product are embedded in the ‘groups’.
          </p>

          <a href="#" className="feature-link">Bitrix24 Project Management &gt;&gt;&gt;</a>
        </div>

        {/* BOX 3 */}
        <div className="feature-box">
          <div className="monitor-frame">
            <img src="/UDC_Test-Main/assets/img/Workflows.png" alt="Communication" className="monitor-screen" />
          </div>

          <h4 className="feature-small-title"></h4>oddo Erp
          <h2 className="feature-title">
            COMMUNICATION & <br /> COLLABORATION
          </h2>
          <div className="feature-underline"></div>

          <p className="feature-text">
            Time is money and nothing is faster than real time communications. Bitrix24 gives you 
            a wide choice of real time communication tools, from instant messaging and group chat 
            to phone calls, mobile messaging, video calls and videoconferencing.
          </p>

          <a href="#" className="feature-link">Bitrix24 Collaboration &gt;&gt;&gt;</a>
        </div>
      </div>

        <div className="feature-box">
          <div className="monitor-frame">
            <img src="/UDC_Test-Main/assets/img/Planner.png" alt="Project" className="monitor-screen" />
          </div>

          <h4 className="feature-small-title">ZWCD</h4>
          <h2 className="feature-title">
            PROJECT & TASK <br /> MANAGEMENT
          </h2>
          <div className="feature-underline"></div>

          <p className="feature-text">
            Bitrix24 has extensive organisational features to enhance efficiency at personal
            and group levels. Tasks can be defined for oneself, assigned or delegated to a 
            colleague. Project management features of the product are embedded in the ‘groups’.
          </p>

          <a href="#" className="feature-link">Bitrix24 Project Management &gt;&gt;&gt;</a>
        </div>
    </>
  );
};

export default FeaturesSection;
