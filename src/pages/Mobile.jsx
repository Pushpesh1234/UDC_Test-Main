import ProductTop from '../components/ProductTop'
import crmImage from '../assets/product/crm.png'
import crmImage2 from '../assets/product/crm2.jpg'
import crmImage3 from '../assets/product/crm3.jpg'

const mobileData={
        h: "Mobile communications",
        p: "Stay in touch with your team and on top of your projects with the Bitrix24 mobile app. Featuring tasks, team messenger, video calls, calendar, and other tools, this is the ultimate means of collaboration and communication.",
        img: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/header-human-mobile-communications.1366w.png.webp?1764863685915", 
        h_2: "Messenger",

        p_2: "Our messenger is a secure way of keeping all your team communications inside the company. Create chats and channels, communicate with external users (freelancers, contractors) via Collab, share files and give reactions.",

        img_2:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/messenger.png.webp?1764863685915",

        h_3: "Comments",

        p_3: "Comments in the Bitrix24 mobile messaging app are a quick and easy way to discuss work-related issues and share important information with your team. Likes, reactions, and quotes add a bit of human touch to the usual office communication routine.",
        img_3: "https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/comments.png.webp?1764863685915",
        btn: "AUTOMATE YOUR SALES",

          h_4:"Video calls",
          p_4:"Why spend time exchanging messages when you can make a quick video call? Resolving work issues and discussing new ideas is always easier that way. Start an online meeting right from a chat, an event in your calendar, or directly from any task in our mobile app.",
          img_4:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/video-calls.png.webp?1764863685915",
           btn_1:"START FOR FREE",

          h_5:"Channels",
          p_5:"Create a channel for company announcements, employee onboarding, or industry news to share information in a way that’s both organic and engaging.",
          img_5:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/tools/communications/mobile-communications/messenger-card-2.png.webp?1764863685915",
           btn_2:"GET STARTED",
          h_6:"More than just online workspace",
          p_6:"There's so much you can do with a simple event in Bitrix24 Calendar: create a quick chat, call up a client right from a deal/lead, set up an online meeting, assign a task, and more.",
          img_6:"https://www.bitrix24.in/upload/optimizer/converted/images/content_en/screens/tools/crm/features_clear.png.webp?1764863685915"


    }

const Mobile=()=>{
    return(
        <>
        <ProductTop data={mobileData}/>
        </>
    );
}
 export default Mobile;