import ProductTop from '../components/ProductTop'
import socialImg from '../assets/product/social.png'
import social2Img from '../assets/product/social2.jpg'
import social3Img from '../assets/product/social3.jpg'
import social4Img from '../assets/product/social4.jpg'
import social5Img from '../assets/product/social5.jpg'
import social6Img from '../assets/product/social6.jpg'

const Social=()=>{

    const socialData = {
            h: "Online workspace for the whole team",
            p: "Through its wide variety of communication and collaboration tools, Bitrix24 enables teams to work efficiently and smoothly wherever they are – at home, in the office, or on the go.",
            img:socialImg, 
            h_2: "The driving force behind your team",
            p_2: "Bitrix24 features everything you need for productive team collaboration and communication: chat, online meetings, tasks, calendar, file storage, online documents, workflow automation, and more.",
            img_2: social2Img, h_3:"Instant and efficient commun ication possible",
            p_3: "Use our chat to quickly exchange messages and files. Make video calls to have a group discussion, daily planning meeting, or presentation.",
            img_3:social3Img,
            btn:"GET BITIX CHAT AND & CALLS",

            h_4:"Productive collaboration",
            p_4:"Schedule events and organize meetings in our calendar, create and co-edit documents online, manage and share your files in a secure cloud storage – all inside Bitrix24.",
            img_4:social4Img,
            btn_1:"TRY COLLABRATION IN BITRIX24",

            h_5:"AI-powered workspace",
            p_5:"Our AI assistant can easily generate original ideas, create texts of any complexity on any topic, or even serve as a brainstorming partner to help you validate your own ideas.",
            img_5:social5Img,
            btn_2:"TRY COPILOT IN BITRIX24",

            h_6:"More than just collaboration",
            p_6:"In addition to various communication and collaboration tools, Bitrix24 features CRM, task management, workflow automation, HR management tools, work time tracking, and more.",
            img_6:social6Img
            
        }
    return(
        <ProductTop data={socialData}/>
    )
}

export default Social;