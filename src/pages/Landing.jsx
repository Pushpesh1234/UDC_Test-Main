import themeBack from '../assets/theme/themeBack.jpg'
import themeBack2 from '../assets/theme/themeBack2.jpg'
import themeBack3 from '../assets/theme/themeBack3.jpg'
import themeBack4 from '../assets/theme/themeBack4.jpg'
import themeBack5 from '../assets/theme/themeBack5.jpg'
import themeBack6 from '../assets/theme/themeBack6.jpg'
import themeBack7 from '../assets/theme/themeBack7.jpg'
import back1 from '../assets/theme/back1.png'
import zicon from '../assets/theme/zIcon.png'
import b24icon from '../assets/theme/b24Icon.png'
import odooicon from '../assets/theme/odooIcon.png'
import Odoo from '../assets/theme/Odoo.png'
import Zwcad from '../assets/theme/Zwcad.png'
import css from "./Landing.module.css"
import glass from '../assets/theme/glass.jpg'
import FeatureSlider from '../components/FeatureSlider'
import Testimonial from '../components/Testimonial'
import Pricing from '../components/Pricing'
import Technology from '../components/Technology'

const slides = [themeBack, themeBack2, themeBack3, themeBack4, themeBack5, themeBack6, themeBack7,back1]

const Landing = () => {
  return (
    <div className={css.mainLanding}>

      {/* ✅ ✅ FIXED HERO CAROUSEL */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">

          {slides.map((img, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="2000"
            >
              <img src={img} className="d-block w-100 carousel-image" alt="slide" />

              <div className={css.heroOverlay}>
  <div className={css.heroContent}>
    <h1>Are You Ready to win in <span>Business?</span></h1>

    <p>
      Boost Your Business with Unique Design Consultant Your Trusted CRM Gold Partner🚀 
      All Tools (Bitrix24, Zoho, Odoo, ZWCad) in One Place. One of the leading consulting 
      companies in India, renowned for its products, services, and after-sales support.
    </p>

    <div className={css.heroButtons}>
      <button className={css.primaryBtn}>Learn More</button>
    </div>
  </div>
</div>

            </div>
          ))}


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
                                    <span style={{fontSize:"40px",textAlign:"center"}}>ODOO</span><img src={odooicon} width="100px" />
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

        {/* ✅ OPTIONAL CONTROLS (YOU CAN KEEP OR REMOVE) */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" />
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" />
        </button>
      </div>

      {/* ✅ ABOUT SECTION */}
      <section className={css.aboutSection}>
        <h2>About <span>Company</span></h2>
        <p>
         Unique Design Consultant (UDC) is a trusted India-based Bitrix24 Gold Partner delivering world-class CRM, ERP, and automation solutions globally. With proven expertise in Bitrix24, Zoho, Odoo, and ZWCAD, we help organizations streamline operations, enhance productivity, and achieve measurable business success.
        </p>

        <div className={css.aboutCard}>
          <div>
            <h3>DEEPAK KUMAR- Founder</h3>
            <p>
              As a trusted India-based Bitrix24 Gold Partner, we specialize in delivering custom CRM setups, workflow automation, business process optimization, and system integrations tailored to every industry.

With a strong focus on digital transformation, we help businesses automate daily operations, enhance team productivity, improve customer experience, and scale faster with smart, efficient, and fully connected systems. Our team provides custom development, cloud & on-premise deployment, API integrations, data migration, and 24×7 global support, ensuring a seamless technology experience from start to finish.

Whether you are a startup, SME, or enterprise, UDC empowers your business with reliable CRM–ERP solutions, advanced automation, and long-term support to achieve measurable growth and operational excellence.
            </p>
          </div>

          <div className={css.clientBox}>
            <h1>530+</h1>
            <span>Happy Clients</span>
          </div>
        </div>
      </section>

      {/* ✅ GROWTH SECTION */}
      <section className={css.growthSection} style={{ backgroundImage: `url(${glass})` }}>
        <div className={css.growthGlass}>

          <div className={css.growthLeft}>
            <div className={css.experienceCircle}>
              <h1>5+</h1>
              <span>Years Experience</span>
            </div>

            <button className={css.primaryBtn}>Book a Demo</button>
          </div>

          <div className={css.growthRight}>
            <h2>Ready To Grow Your Business?</h2>
            <p>
              UDC helps businesses scale smarter with powerful CRM, ERP, and automation solutions tailored to their unique processes. As a trusted Bitrix24 Gold Partner in India, we deliver end-to-end implementation, customization, and support for Bitrix24, Zoho, Odoo, and ZWCAD. Our solutions simplify workflow management, improve team collaboration, boost productivity, and enable businesses to achieve faster digital transformation. Whether you’re a startup or an enterprise, UDC provides the technology and expertise you need to automate operations and drive consistent business growth locally and globally.
            </p>

            <div className={css.productGrid}>
              <div className={css.productCard}>
                <img src={b24icon} width="70" />
                <p>All-in-one CRM to manage sales, projects, and teamwork.Work smarter, collaborate faster, and grow your business.</p>
              </div>

              <div className={css.productCard}>
                <img src={zicon} width="70" />
                <p>Smart cloud software to run your entire business digitally.From CRM to finance everything connected, perfectly integrated.</p>
              </div>

              <div className={css.productCard}>
                <img src={Odoo} width="70" />
                <p>One powerful platform for all your business operations.Customize, automate, and scale effortlessly with Odoo.</p>
              </div>

              <div className={css.productCard}>
                <img src={Zwcad} width="70" />
                <p>Fast, lightweight, and professional CAD drafting solution.Design with precision, speed, and complete reliability.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ✅ OTHER SECTIONS */}
      <FeatureSlider />
      <Testimonial />
      <Pricing />
      <Technology />

    </div>
  )
}

export default Landing
