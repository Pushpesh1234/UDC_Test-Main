import React, { useEffect } from "react";
import "./ProductPage.css";
import b24Icon from "../assets/theme/b24Icon.png";
import zIcon  from "../assets/theme/zIcon.png";
import odooIcon from "../assets/theme/odooIcon.png";
import Zwcad from "../assets/theme/Zwcad.png";
import { Link, useLocation } from "react-router-dom";

export default function ProductPage() {
  // Parallax / tilt effect
  useEffect(() => {
    const cards = document.querySelectorAll(".dg-card");
    if (!cards) return;

    function onMove(e) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left) - rect.width / 2;
      const y = (e.clientY - rect.top) - rect.height / 2;
      const rx = (y / rect.height) * -10; // rotateX
      const ry = (x / rect.width) * 10;   // rotateY
      this.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
      const logo = this.querySelector(".dg-logo");
      if (logo) logo.style.transform = `translateY(${y * -0.03}px) translateX(${x * -0.02}px)`;
    }

    function onLeave() {
      this.style.transform = "";
      const logo = this.querySelector(".dg-logo");
      if (logo) logo.style.transform = "";
      // remove shine
      const shine = this.querySelector(".dg-shine");
      if (shine) shine.style.transform = "";
    }

    cards.forEach(card => {
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    
    <div className="dg-page">
      {/* Ambient shapes */}
      <div className="dg-ambient amp1" />
      <div className="dg-ambient amp2" />
      <div className="dg-ambient amp3" />

      <header className="dg-hero">
        <div className="dg-hero-inner">
          <h1 class="dg-title">Smart Enterprise Tools</h1>
          <p className="dg-tagline">
            At Unique Design Consultant, we deliver intelligent solutions that connect your business systems seamlessly. From workflow automation to enhanced collaboration, our offerings empower companies to scale efficiently while maintaining full control. Every solution is thoughtfully designed to drive measurable impact.
          </p>

          <div className="dg-hero-ctas">
            <a className="dg-btn primary" href="#contact">Get a Demo</a>
            <a className="dg-btn ghost" href="#compare"></a>
          </div>
        </div>

        {/* decorative ring */}
        <div className="dg-ring" aria-hidden="true" />
      </header>

      <section className="dg-products">
        <h2 className="dg-section-title">Explore Our Solutions</h2>

        <div className="dg-grid">
          {/* Bitrix24 */}
          <article className="dg-card">
            <div className="dg-card-top">
              <img src={b24Icon} alt="Bitrix24" className="dg-logo" />
              <span className="dg-badge best">BESTSELLER</span>
            </div>
            <h3></h3>
            <p className="dg-desc">Complete CRM, collaboration, telephony and automation in one unified suite.</p>
            <div className="dg-footer">
              <a className="dg-cta" href="#demo">Request Demo</a>
              <span className="dg-pill">ALL IN • ONE PLATFORM</span>
            </div>
            <div className="dg-shine" />
          </article>

          {/* Zoho */}
          <article className="dg-card">
            <div className="dg-card-top">
              <img src={zIcon}alt="Zoho" className="dg-logo" />
              <span className="dg-badge new">POPULAR</span>
            </div>
            <h3></h3>
            <p className="dg-desc">Cloud-first apps for CRM, finance, HR and automation  modular & scalable.</p>
            <div className="dg-footer">
              <a className="dg-cta" href="#demo">Request Demo</a>
              <span className="dg-pill">Cloud • Automation</span>
            </div>
            <div className="dg-shine" />
          </article>

          {/* Odoo */}
          <article className="dg-card">
            <div className="dg-card-top">
              <img src={odooIcon} alt="Odoo" className="dg-logo" />
              <span className="dg-badge pro">NEW</span>
            </div>
            <h3></h3>
            <p className="dg-desc">Modular ERP with extensive modules for inventory, accounting, and ecommerce.</p>
            <div className="dg-footer">
              <a className="dg-cta" href="#demo">Request Demo</a>
              <span className="dg-pill">ERP • Inventory</span>
            </div>
            <div className="dg-shine" />
          </article>

          {/* ZWCAD */}
          <article className="dg-card">
            <div className="dg-card-top">
              <img src={Zwcad} alt="ZWCAD" className="dg-logo" />
              <span className="dg-badge pro">Flexible</span>
            </div>
            <h3></h3>
            <p className="dg-desc">High-performance CAD tool compatible with DWG for architects and engineers.</p>
            <div className="dg-footer">
              <a className="dg-cta" href="#demo">Request Demo</a>
              <span className="dg-pill">CAD • DWG</span>
            </div>
            <div className="dg-shine" />
          </article>
        </div>
      </section>

      <section className="dg-cta-strip">
        <div className="dg-cta-inner">
          <div>
            <h3>Want a tailored demo?</h3>
            <p>Tell us your stack we’ll configure and demo a solution in 48 hours.</p>
          </div>
          <a className="dg-btn primary large" href="#contact">Book a Demo</a>
        </div>
        <section id="faq" className="diamond-faq-section py-5">
  <div className="container">
    <h2 className="text-center mb-5 diamond-faq-title">
      Frequently Asked Questions
    </h2>

    <div className="accordion diamond-accordion" id="faqAccordion">

      {/* FAQ 1 */}
      <div className="accordion-item diamond-card">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
            What products do you offer?
          </button>
        </h2>
        <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            We offer enterprise solutions such as Bitrix24, Zoho, Odoo, and ZWCAD fully integrated for maximum efficiency.
          </div>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="accordion-item diamond-card">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
            Do you provide implementation & support?
          </button>
        </h2>
        <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Yes from setup to customization to lifetime support, we take care of everything.
          </div>
        </div>
      </div>

      {/* FAQ 3 */}
      <div className="accordion-item diamond-card">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
            Can I integrate multiple software products?
          </button>
        </h2>
        <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Absolutely  we specialize in multi-platform integrations with custom workflows.
          </div>
        </div>
      </div>

      {/* FAQ 4 */}
      <div className="accordion-item diamond-card">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
            Do you provide product demos?
          </button>
        </h2>
        <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div className="accordion-body">
            Yes we provide fully guided demos tailored to your business needs.
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

      </section>
    </div>
    
  );
}