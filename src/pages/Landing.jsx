import themeBack from '../assets/theme/themeBack.jpg'
import themeBack2 from '../assets/theme/themeBack2.jpg'
import themeBack3 from '../assets/theme/themeBack3.jpg'
import themeBack4 from '../assets/theme/themeBack4.jpg'
import themeBack5 from '../assets/theme/themeBack5.jpg'
import themeBack6 from '../assets/theme/themeBack6.jpg'
import themeBack7 from '../assets/theme/themeBack7.jpg'
import zicon from '../assets/theme/zIcon.png'
import b24icon from '../assets/theme/b24Icon.png'
import css from "./Landing.module.css"
import glass from '../assets/theme/glass.jpg'
import FeatureSlider from '../components/FeatureSlider'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'
import Technology from '../components/Technology'


const Landing = () => {
    return (
        // Carousel Start here
        <div className='custom-carousel'>
            <div id="carouselExampleIndicators" className="carousel  slide"  data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                </ol>
                <div className="carousel-inner carousel-custom ">
                    <div className="carousel-item  active" data-bs-interval="1000">
                        <img className="d-block w-100 carousel-image" src={themeBack} alt="First slide" />

                        <div className="carousel-caption d-none d-md-block">
                            <h5>Are You <b>Ready</b> to win in <b>Business</b>?</h5>
                            <p style={{textAlign:"justify"}}>Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀 All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place
                                One of the leading consulting companies in India, renowned for its products, services, and after-sales support. </p>
                            <button className={css.learnmoreBtn}>LEARN MORE</button>
                        </div>

                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img className="d-block w-100 carousel-image" src={themeBack2} alt="Second slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Are You <b>Ready</b> to win in <b>Business</b>?</h5>
                            <p style={{textAlign:"justify"}}>Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀 All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place
                                One of the leading consulting companies in India, renowned for its products, services, and after-sales support. </p>
                            <button className={css.learnmoreBtn}>LEARN MORE</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img className="d-block w-100 carousel-image" src={themeBack3} alt="Third slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Are You <b>Ready</b> to win in <b>Business</b>?</h5>
                            <p style={{textAlign:"justify"}}>Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀 All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place
                                One of the leading consulting companies in India, renowned for its products, services, and after-sales support. </p>
                            <button className={css.learnmoreBtn}>LEARN MORE</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img className="d-block w-100 carousel-image" src={themeBack4} alt="Slide 4" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Are You <b>Ready</b> to win in <b>Business</b>?</h5>
                            <p style={{textAlign:"justify"}}>Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀 All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place
                                One of the leading consulting companies in India, renowned for its products, services, and after-sales support. </p>
                            <button className={css.learnmoreBtn}>LEARN MORE</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img className="d-block w-100 carousel-image" src={themeBack5} alt="Slide 5" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Are You <b>Ready</b> to win in <b>Business</b>?</h5>
                            <p style={{textAlign:"justify"}}>Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀 All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place
                                One of the leading consulting companies in India, renowned for its products, services, and after-sales support. </p>
                            <button className={css.learnmoreBtn}>LEARN MORE</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img className="d-block w-100 carousel-image" src={themeBack6} alt="Slide 6" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Are You <b>Ready</b> to win in <b>Business</b>?</h5>
                            <p style={{textAlign:"justify"}}>Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀 All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place
                                One of the leading consulting companies in India, renowned for its products, services, and after-sales support. </p>
                            <button className={css.learnmoreBtn}>LEARN MORE</button>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="1000">
                        <img className="d-block w-100 carousel-image" src={themeBack7} alt="Slide 7" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Are You <b>Ready</b> to win in <b>Business</b>?</h5>
                            <p style={{textAlign:"justify"}}>Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀 All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place
                                One of the leading consulting companies in India, renowned for its products, services, and after-sales support. </p>
                            <button className={css.learnmoreBtn}>LEARN MORE</button>
                        </div>
                    </div>
                </div>
                {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    {/* <span className="sr-only">Previous</span> */}
                {/* </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    {/* <span className="sr-only">Next</span> */}
                {/* </a> */}
            </div>
              {/* Carsouel End here */}

              {/* Section-2 About Company */}
            <div>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <h1 style={{ marginTop: "20px" }}><b>About </b> Company</h1>
                    
                        <p style={{textAlign:"center"}}> 
                        Unique Design Consultant (UDC) is an India-based<br /> Bitrix24 Gold Partner delivering CRM, ERP, and business <br />automation solutions globally.
                        We specialize in
                        <br /> <b>Bitrix24, Zoho, Odoo, and ZWCAD</b>.
                        </p> 
                </div>

                <div className={css.textSectionUDC}>
                    <div>
                        <h3>DEEPAK KUMAR — CEO OF COMPANY</h3>
                        <p style={{textAlign:"justify"}}>
                            As a trusted India-based Bitrix24 Gold Partner, we specialize in delivering custom CRM setups, workflow automation, business process optimization, and system integrations tailored to every industry.<br /><br />With a strong focus on digital transformation, we help businesses automate daily operations, enhance team productivity, improve customer experience, and scale faster with smart, efficient, and fully connected systems. Our team provides custom development, cloud & on-premise deployment, API integrations, data migration, and 24×7 global support, ensuring a seamless technology experience from start to finish.<br /><br />Whether you are a startup, SME, or enterprise, UDC empowers your business with reliable CRM–ERP solutions, advanced automation, and long-term support to achieve measurable growth and operational excellence.
                        </p>
                    </div>

                    <h1>
                        530
                        <span style={{ fontSize: "30px", color: "#007bff" }}>Clients</span>
                    </h1>
                </div>
            </div>

            {/* { 3 section of Landing} */}

            <div className={css.threeSectionLanding} style={{ backgroundImage: `url(${glass})` }}>
                <div className={css.glassInner}>
                    <div className={css.sectionBoxLeft}>
                        <div className={css.rotatedNumber}>
                            <div style={{ fontSize: "70px" }}>5</div>
                            <div className={css.yearsLabel}>Years</div>
                        </div>
                        <button className={css.signupBtn}>SIGN UP</button>
                    </div>

                    {/* <div className={css.sectionBoxCenter} /> */}

                    <div className={css.sectionBoxRight}>
                        <h2 style={{ color:"#0b5ed7",fontWeight:"bold" }}>Ready to grow your business?</h2>
                        <p style={{ marginBottom: "50px",color:"black",textAlign:"justify"}}>
                           UDC helps businesses scale smarter with powerful CRM, ERP, and automation solutions tailored to their unique processes. As a trusted Bitrix24 Gold Partner in India, we deliver end-to-end implementation, customization, and support for Bitrix24, Zoho, Odoo, and ZWCAD.
Our solutions simplify workflow management, improve team collaboration, boost productivity, and enable businesses to achieve faster digital transformation. Whether you’re a startup or an enterprise, UDC provides the technology and expertise you need to automate operations and drive consistent business growth—locally and globally.
                        </p>

                        {/* products in UDC */}

                        <div className={css.productUCD}>
                            <div className={css.upperProduct}>
                                <div>

                                   <span style={{fontSize:"40px",textAlign:"center"}}> BITRIX24</span> <img src={b24icon} width="100px" />

                                    <p style={{ marginTop: "20px",color:"black",textAlign:"justify" }}>
                                        Bitrix24 is an all-in-one online workspace that provides a comprehensive suite of tools for communication, collaboration, and business management, including CRM, task management, and HR automation
                                    </p>
                                </div>

                                <div>
                                    <span style={{fontSize:"40px",textAlign:"center"}}>ZOHO</span> <img src={zicon} width="100px" />
                                    <p style={{ marginTop: "20px",color:"black" ,textAlign:"justify"}}>
                                        Zoho is a comprehensive suite of cloud-based business software offering over 55 applications for CRM, email, accounting, HR, project management, and more, known for its integrated platform
                                    </p>
                                </div>
                            </div>

                            <div className={css.lowerProduct}>
                                <div>
                                    <span style={{fontSize:"40px",textAlign:"center"}}>ODOO</span>
                                    <p style={{ marginTop: "20px",color:"black",textAlign:"justify" }}>
                                        Odoo ERP system is enterprise resource planning software used company-wide for the management of business processes
                                    </p>
                                </div>

                                <div>
                                    <span style={{fontSize:"40px",textAlign:"center"}}>ZWCD</span>
                                    <p style={{ marginTop: "20px",color:"black",textAlign:"justify" }}>
                                        ZWCD (more commonly known as ZWCAD) is a CAD software application used for 2D drafting and basic 3D navigation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Landing Component end here */}

            <FeatureSlider />
            <Testimonial />
            <Pricing />
            <Technology />
        </div>
    );
}

export default Landing;