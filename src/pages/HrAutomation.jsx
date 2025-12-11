

import ProductTop from '../components/ProductTop'
import hrImg from '../assets/product/hr.png'
import hrImg2 from '../assets/product/hr2.png'
import hrImg3 from '../assets/product/hr3.png'
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
        btn:"AUTOMATE WORKFLOWS WITH BITIX24"
    }
    return (
        <>
            <ProductTop data={hrData} />
        </>

    )
}

export default HrAutomation;