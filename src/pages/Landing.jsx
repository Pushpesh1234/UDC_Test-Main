import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import themeBack from '../assets/theme/themeBack.jpg'
import themeBack2 from '../assets/theme/themeBack2.jpg'
import themeBack3 from '../assets/theme/themeBack3.jpg'
import themeBack4 from '../assets/theme/themeBack4.jpg'
import themeBack5 from '../assets/theme/themeBack5.jpg'
import themeBack6 from '../assets/theme/themeBack6.jpg'
import themeBack7 from '../assets/theme/themeBack7.jpg'
import back1 from '../assets/theme/back1.png'

import b24icon from '../assets/theme/b24Icon.png'
import zicon from '../assets/theme/zIcon.png'
import Odoo from '../assets/theme/Odoo.png'
import Zwcad from '../assets/theme/Zwcad.png'
import glass from "../assets/theme/glass.jpg"

import css from './Landing.module.css'

// import FeatureSlider from '../components/FeatureSlider'
// import Testimonial from '../components/Testimonial'
// import Pricing from '../components/Pricing'
// import Technology from '../components/Technology'
// import FAQ from '../components/FAQ'
// import DepartmentSection from "../components/DepartmentSection"

const slides = [
  themeBack, themeBack2, themeBack3, themeBack4,
  themeBack5, themeBack6, themeBack7, back1
];




const Landing = () => {
 

  // useEffect(() => {
  //   setMountStatus(false)
  // }, [])
  return (
    <div className={css.mainLanding}>

      {/* ⭐ HERO CAROUSEL */}
      <div
        id="carouselHero"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2500"
       >
        <div className="carousel-inner">
          {slides.map((img, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <img src={img} className={`d-block w-100 ${css.carouselImage}`} />

              {/* Overlay Content */}
              <div className={css.heroOverlay}>
                <div className={css.heroContent}>
                  <h1>
                    Are You Ready to grow your <span>Business?</span>
                  </h1>
                  <p>
                    Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀
                    All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place. One of the leading consulting
                    companies in India, renowned for its products, services, and after-sales support.
                  </p>

                  <div className={css.heroButtons}>
                     <Link
                to="/product-page"
                
              >
                <button className={css.primaryBtn}>Learn More</button>
              </Link>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}

      </div>




      {/* ⭐ ABOUT SECTION */}
      <section className={css.aboutSection}>
        <h2>About <span>Company</span></h2>
        <p>
          Unique Design Consultant (UDC) is an India-based Bitrix24 Gold Partner delivering
          CRM, ERP, and automation solutions globally. We specialize in
          <b> Bitrix24, Zoho, Odoo, and ZWCAD.</b>
        </p>

        <div className={css.aboutCard}>
          <div>
            <h3>DEEPAK KUMAR — CEO OF COMPANY</h3>
            <p>
              As a trusted India-based Bitrix24 Gold Partner, we specialize in delivering custom CRM setups, workflow automation, business process optimization, and system integrations tailored to every industry.With a strong focus on digital transformation, we help businesses automate daily operations, enhance team productivity, improve customer experience, and scale faster with smart, efficient, and fully connected systems. Our team provides custom development, cloud & on-premise deployment, API integrations, data migration, and 24×7 global support, ensuring a seamless technology experience from start to finish.Whether you are a startup, SME, or enterprise, UDC empowers your business with reliable CRM–ERP solutions, advanced automation, and long-term support to achieve measurable growth and operational excellence.
            </p>
          </div>

          <div className={css.clientBox}>
            <h1>530+</h1>
            <span>Happy Clients</span>
          </div>
        </div>
      </section>

      {/* ⭐ GROWTH SECTION */}
      <section className={css.growthSection} style={{ backgroundImage: `url(${glass})` }}>
        <div className={css.growthGlass}>

          <div className={css.growthLeft}>
            <div className={css.experienceCircle}>
              <h1>5+</h1>
              <span>Years Experience</span>
            </div>
            <button className={css.primaryBtn}>Book a Demo</button>
          </div>

          <div className={css.growthRight}>
            <h2>Ready To Grow Your Business?</h2>
            <p>
              UDC helps businesses scale smarter with powerful CRM, ERP, and automation solutions tailored to their unique processes. As a trusted Bitrix24 Gold Partner in India, we deliver end-to-end implementation, customization, and support for Bitrix24, Zoho, Odoo, and ZWCAD.
              Our solutions simplify workflow management, improve team collaboration, boost productivity, and enable businesses to achieve faster digital transformation. Whether you’re a startup or an enterprise, UDC provides the technology and expertise you need to automate operations and drive consistent business growth—locally and globally.
            </p>

            <div className={css.productGrid}>
              <div className={css.productCard}>
                <img src={b24icon} width="70" />
                <p>All-in-one CRM to manage sales, projects, and teamwork.Work smarter, collaborate faster, and grow your business.</p>
              </div>

              <div className={css.productCard}>
                <img src={zicon} width="70" />
                <p>Smart cloud software to run your entire business digitally.From CRM to finance everything connected, perfectly integrated.</p>
              </div>

              <div className={css.productCard}>
                <img src={Odoo} width="70" />
                <p>One powerful platform for all your business operations.Customize, automate, and scale effortlessly with Odoo.</p>
              </div>

              <div className={css.productCard}>
                <img src={Zwcad} width="70" />
                <p>Fast, lightweight, and professional CAD drafting solution.Design with precision, speed, and complete reliability.</p>
              </div>
            </div>
          </div>

        </div>
      </section>




      {/* ⭐ OTHER SECTIONS */}
      
      

     
      
      
     

    </div>
  );
};

export default Landing;