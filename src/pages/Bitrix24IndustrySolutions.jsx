import React from "react";
import "./IndustrySolutions_List.css";

const sectors = [
  {
    title: "Bitrix24: Creative & Digital Agencies",
    desc: "Manage all your agency’s operations in one place, including tools for sales, projects, communication and collaboration.",
    img: "/UDC_Test-Main/assets/img/creative.png",
    link: "Bitrix24",
  },
  {
    title: "Bitrix24: HR Absense Management",
    desc: "Manage leave requests and approvals and fully control annual entitlements of your teams.",
    img: "/UDC_Test-Main/assets/img/Absence.png",
    link: "#",
  },
  {
    title: "Bitrix24: Legal Project Management",
    desc: "Manage your tasks, record all time spent on projects, view time reports with budget analysis and roll up time into bills.",
    img: "/UDC_Test-Main/assets/img/Case.png",
    link: "#",
  },
  {
    title: "Bitrix24: Automotive CRM",
    desc: "Spend less time on sales admin and more time closing deals with our all-in-one automotive CRM.",
    img: "/UDC_Test-Main/assets/img/Automotive.png",
    link: "#",
  },
  {
    title: "Bitrix24: Recruitment Agencies",
    desc: "Manage roles, candidates and the interview process through to onboarding and engagement.",
    img: "/UDC_Test-Main/assets/img/Operations.png",
    link: "#",
  },
  {
    title: "Bitrix24: Healthcare CRM",
    desc: "Manage appointments, set reminders and view full patient records in one easy to use platform.",
    img: "/UDC_Test-Main/assets/img/healthcare.png",
    link: "#",
  },
  {
    title: "Bitrix24: Helpdesk Module",
    desc: "Automate support communications and create and view Bitrix24 Helpdesk tickets directly inside CRM page.",
    img: "/UDC_Test-Main/assets/img/My-project.png",
    link: "#",
  },
  {
    title: "Bitrix24: Nonprofits & Charities",
    desc: "Manage your contacts database, integrate communications and track donations.",
    img: "/UDC_Test-Main/assets/img/CHARITY.png",
    link: "#",
  },
];

export default function SectorSolutions() {
  return (
    <div className="sector-page">

      {/* ⭐ NEW HERO SECTION (same as Intreface) */}
      <div className="industry-hero">
        <h1>BITRIX24 INDUSTRY SOLUTIONS</h1>
      </div>

      <h1 className="sector-title"> INDUSTRY solutions FOR BITRIX24</h1>
      <p className="sector-subtitle">
        High specification and full featured industry sector solutions custom made for Bitrix24 users
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