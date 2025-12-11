import ProductTop from '../components/ProductTop'
import crmImage from '../assets/product/crm.png'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'


const teleData={
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

const Telephony=()=>{
    return(
        <>
        <ProductTop data={teleData}/>
        </>
    );
}
 export default Telephony;