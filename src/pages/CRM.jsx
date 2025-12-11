// import css from './CRM.module.css'

import ProductTop from '../components/ProductTop'
import FAQ from '../components/FAQ'
import crmImage from '../assets/product/crm.png'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'
const CRM = () => {
    const crmData = {
        h: "Free CRM software for your business",
        p: "Sell more. Sell better. Sell faster with Bitrix24 a single platform to cover all your needs.",
        img: crmImage, h_2: "CRM that's packed with sales, marketing, and analytics tools",
        p_2: "Bitrix24 CRM has everything you need to acquire leads, turn them into deals, receive payments, manage inventory, e-sign documents, run marketing campaigns, increase customer engagement, grow customer retention, track sales metrics, and more.",
        img_2: crmImage2,
        h_3: "Serious automation capabilities",
        p_3: "Set up automated client notifications via SMS or email, use our customizable triggers to automatically move leads/deals down the sales pipeline, configure automated notifications to your sales reps based on the lead/deal status.",
        img_3: crmImage3,
        btn: "AUTOMATE YOUR SALES"
    }

    const crmFAQ = [
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
            <ProductTop data={crmData}  />
            <FAQ faq={crmFAQ}/>
        </>

    )
}

export default CRM;