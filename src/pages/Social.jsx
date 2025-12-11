import ProductTop from '../components/ProductTop'
import socialImg from '../assets/product/social.png'
import social2Img from '../assets/product/social2.jpg'
import social3Img from '../assets/product/social3.jpg'

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
            btn:"GET BITIX CHAT AND & CALLS"
        }
    return(
        <ProductTop data={socialData}/>
    )
}

export default Social;