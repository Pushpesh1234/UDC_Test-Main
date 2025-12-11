import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./contact.css";
import FAQ from '../components/FAQ'

const Contact = () => {
  useEffect(() => {
    // Inject Bitrix24 form script directly into the form container
    const script = document.createElement("script");
    script.src = "https://cdn.bitrix24.com/b21918073/crm/form/loader_1.js";
    script.async = true;
    script.setAttribute("data-b24-form", "inline/1/ytigoz");
    script.setAttribute("data-skip-moving", "true");

    const container = document.getElementById("b24form-container");
    if (container) {
      container.innerHTML = ""; // Clear any previous script/form
      container.appendChild(script);
    }
  }, []);

  const contactFAQ=  [
        {
            query: "What is CRM",
            answer: "CRM is a Customer Relationship Management Software",
            unique_1:"headingOne",
            unique_2:"collapseOne"
        },
        {
            query: "Who uses CRM software?",
            answer: "CRM software is used by businesses of all sizes—from small startups to large enterprises—across industries like sales, marketing, real estate, finance, customer service, and more. Sales teams, marketers, support agents, and business owners rely on CRM systems to organize contacts, track interactions, automate workflows, and improve customer relationships.",
            unique_1:"headingTwo",
            unique_2:"collapseTwo"
        },
        {
            query: "What integrations are available with Bitrix24 CRM?",
            answer: "Bitrix24 integrates with popular email services (Gmail, Outlook), telephony providers, messengers (WhatsApp, Facebook Messenger), e-commerce platforms, and many third-party apps via REST API and Zapier. You can synchronize calendars, contacts, and automate data flows across tools.",
            unique_1:"headingThree",
            unique_2:"collapseThree"
        }
    ];

  return (
    <>
      {/* Top Banner */}
      <div className="banner-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}assets/img/header-banner.jpg`}
          alt="Contact Banner"
          className="img-fluid w-100"
        />
      </div>

      {/* Contact Form and Info */}
      <div className="contact-section py-5">
        <Container>
          <Row>
            {/* Left: Form */}
            <Col md={7}>
              <h2 className="form-headline">Send us a message</h2>
              <div id="b24form-container" />
            </Col>

            {/* Right: Info */}
            <Col md={5} className="contact-info mt-4 mt-md-0">
              <p>
                Unique Design Consultant is one of the leading consulting
                companies in India, renowned for its products, services and
                after-sales support.
              </p>
              <ul className="list-unstyled">
                <li>
                  <i className="fa fa-envelope mr-2"></i>{" "}
                  info@uniquedesignconsultnt.in
                </li>
                <li>
                  <i className="fa fa-phone mr-2"></i> +91-8958847686
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Company Info Section */}
<section className="about-contact-section py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <img
          src={`${import.meta.env.BASE_URL}assets/img/project_06.jpg`}
          alt="Business Automation"
          className="img-fluid rounded"
        />
      </div>
      <div className="col-md-6">
        <p>
          <strong>Unique Design Consultant</strong> is one of the leading consulting company in India,
          renowned for its products, services and after-sales support.
        </p>
        <p>
          UDC is engaged in bringing new ways of simplifying the corporate life. Our team provides
          consultation to companies with good conduct, right business techniques and sensible rates.
          We are known as complete solution destination. We are the Consultant. We help companies to reduce
          their current running cost by implementing the latest technology which are running in the market.
        </p>
        <p>
          Our founder Mr. Deepak Kumar started Unique Design Consultant in 2021. By his continuous hard work,
          he achieved great success and today is an expert in this sector.
        </p>
      </div>
    </div>
  </div>
</section>
<FAQ faq={contactFAQ}/>
    </>
  );
};

export default Contact;
