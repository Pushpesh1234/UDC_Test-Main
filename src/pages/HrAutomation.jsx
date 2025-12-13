

import ProductTop from '../components/ProductTop'
import hrImg from '../assets/product/hr.png'
import hrImg2 from '../assets/product/hr2.png'
import hrImg3 from '../assets/product/hr3.png'
import hrImg4 from '../assets/product/hr4.jpg'
import hrImg5 from '../assets/product/hr5.jpg'
import hrImg6 from '../assets/product/hr6.jpg'

const HrAutomation = () => {
    const hrData = {
        h: "HR management & workflow automation",
        p: "Streamline workflows, automate your business processes, and manage employee data like a boss.",
        img:hrImg, h_2: "Increase work efficiency and build a dream team",
        p_2: "Bitrix24 is a highly scalable workspace solution that features everything you need to run a team of 5, 50, 500, or 5,000 while maintaining top productivity at all times.",
        img_2:hrImg2,
        h_3: "Workflow automation",
        p_3: "Stop wasting hours on repetitive tasks. With Bitrix24, you can automate routine HR workflow (like leave requests, approvals, and document signing) so they run seamlessly in the background. This means fewer delays, fewer errors, and more time for your team to focus on meaningful work.",
        img_3:hrImg3,
        btn:"AUTOMATE WORKFLOWS WITH BITIX24",

        h_4: "Employee management",
        p_4: "Bitrix24 puts everything you need to manage people and teams in one easy-to-use platform. From schedules and time tracking to collaboration and access permissions, you can keep everyone organized without switching between multiple apps. The result: faster decisions, fewer bottlenecks, and a smoother employee experience.",
        img_4:hrImg4,
        btn_1:"MANAGE YOUR TEAM WITH BITIX24",

        h_5: "AI-powered workspace",
        p_5: " Our AI assistant CoPilot goes beyond simple automation. It helps your team brainstorm, write, and generate ideas, while also analyzing meetings and suggesting actionable improvements. Whether you’re drafting HR policies, preparing reports, or refining team communications, CoPilot saves time and adds intelligence to everyday tasks.",
        img_5:hrImg5,
        btn_2:"TRY COPILOT IN BITIX24",

        h_6: "More than just HR & automation",
        p_6: "In addition to various HR management and workflow automation tools, Bitrix24 features CRM, task management, chat, video calls, file storage, calendar, online documents, and more.",
        img_6:hrImg6,
        
    }
    return (
        <>
            <ProductTop data={hrData} />
        </>

    )
}

export default HrAutomation;