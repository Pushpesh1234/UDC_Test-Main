import ProductTop from '../components/ProductTop'
import siteImage from '../assets/product/site.png'
import siteImage2 from '../assets/product/site2.jpg'
import sitetImage3 from '../assets/product/site3.jpg'
import siteImage4 from '../assets/product/site4.jpg'
import siteImage5 from '../assets/product/site5.jpg'
import sitetImage6 from '../assets/product/site6.jpg'

const SiteStore=()=>{

    const siteData = {
            h: "Powerful, no-code website builder",
            p: "Create multi-page websites, beautiful landing pages, and online stores with a full set of ecommerce tools on board.",
            img:siteImage, h_2: "Create websites, landing pages, and online stores",
            p_2: "Use our intuitive, no-code website builder to create beautiful sites, landing pages, and online stores that are fully integrated with Bitrix24 CRM and online marketing tools.",
            img_2: siteImage2,
            h_3: "Hassle-free website building",
            p_3: "Pick a template that matches your needs, customize its blocks, add your content, and it's done! No coding skills are required, the whole process is super-easy and the results are always amazing.",
            img_3:sitetImage3,
            btn:"CREATE WEBSITE IN BITRIX24",

             h_4: "AI-powered content",
            p_4: "Use our AI assistant CoPilot to generate ready-made websites and landing pages in a matter of minutes. Based on your prompt, CoPilot will come up with an appropriate design, copy, images, and web forms, which you can tweak later if needed.",
            img_4: siteImage4,
            btn_1:"TRY COPILOT IN BITRIX24",

             h_5: "Integrated with Bitrix24 CRM",
            p_5: "Thanks to the integration with the rest of the Bitrix24 tools, every submitted web form, incoming phone call, or live chat message on your website will automatically result in a new lead or deal added to CRM.",
            img_5:siteImage5 ,
            btn_2:"CREATE WEBSITE IN BITRIX24",

             h_6: "More than just website builder",
            p_6: "In addition to various site building tools, Bitrix24 features everything you need to manage your sales, clients, and team: CRM, task management, chat, video calls and conferencing, file storage, calendar, online documents, mobile app, work time tracking, and more.",
            img_6:sitetImage6,
           


        }
    return(
        <ProductTop data={siteData}/>
    )
}

export default SiteStore