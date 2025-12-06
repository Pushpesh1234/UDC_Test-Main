import React from "react";
import "./IndustrySolutions_List.css";

const sectors = [
  {
    title: "Bitrix24: WhatsApp Plug-in",
    desc: "Engage with customers on their preferred channel of communication with Bitrix24 CRM integration and intelligent message routing.",
    img: "/UDC_Test-Main/assets/img/Chat.png",
    link: "Bitrix24",
  },
  {
    title: "Twilio Flex Plug-in",
    desc: "Multi channel call centre solution including WhatsApp, Facebook Messenger, SMS and voice, intelligent routing, automated chatbots and detailed reporting.",
    img: "/UDC_Test-Main/assets/img/Twilio-.png",
    link: "#",
  },
  {
    title: "Sales Map",
    desc: "View Leads and Deals on a map with pin location indicators, pop up tabs and slide in records.",
    img: "/UDC_Test-Main/assets/img/Map.png",
    link: "#",
  },
  {
    title: "Bitrix24: Customer Data Processing",
    desc: "Our CDP module integrates with all your marketing data sources and uses machine learning to spot trends, identify opportunities and create automated actions.",
    img: "/UDC_Test-Main/assets/img/CDP.png",
    link: "#",
  },
  {
    title: "Bitrix24: Case & Time Management",
    desc: "Tasks and document management, time recording, billing and chat and email communication for professional services businesses.",
    img: "/UDC_Test-Main/assets/img/Case time.png",
    link: "#",
  },
  {
    title: "Bitrix24: Chatbots",
    desc: "Automated chatbot integration which can be programmed to handle sales or support and integrate with multiple communication channels",
    img: "/UDC_Test-Main/assets/img/chatbots.png",
    link: "#",
  },
  {
    title: "Bitrix24: SendGrid Integration",
    desc: "Automate support communications and create and view Bitrix24 Helpdesk tickets directly inside CRM page.",
    img: "/UDC_Test-Main/assets/img/System.png",
    link: "#",
  },
  {
    title: "Bitrix24 Sign",
    desc: "Create documents and send them to your counterparty for electronic signature in a few clicks with Bitrix24 Sign.",
    img: "/UDC_Test-Main/assets/img/sign.png",
    link: "#",
  },
];

export default function SectorSolutions() {
  return (
    <div className="sector-page">

      {/* ⭐ NEW HERO SECTION (same as Intreface) */}
      <div className="industry-hero">
        <h1>Applications & Widgets</h1>
      </div>

      <h1 className="sector-title"> Applications for Bitrix24</h1>
      <p className="sector-subtitle">
        High specification and full featured plug-ins, widgets and applications custom made for Bitrix24
      </p>

      <div className="sector-container">
        {sectors.map((item, index) => (
          <div className="sector-block" key={index}>
            <img className="sector-img" src={item.img} alt={item.title} />

            <h2 className="sector-heading">{item.title}</h2>

            <div className="underline"></div>

            <p className="sector-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}