import ProductTop from '../components/ProductTop'
import siteImage from '../assets/product/site.png'
import siteImage2 from '../assets/product/site2.jpg'
import sitetImage3 from '../assets/product/site3.jpg'

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
            btn:"CREATE WEBSITE IN BITRIX24"
        }
    return(
        <ProductTop data={siteData}/>
    )
}

export default SiteStore