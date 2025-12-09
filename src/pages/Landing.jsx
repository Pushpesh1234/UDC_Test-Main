import themeBack from '../assets/theme/themeBack.jpg'
import themeBack2 from '../assets/theme/themeBack2.jpg'
import themeBack3 from '../assets/theme/themeBack3.jpg'
import css from "./Landing.module.css"


const Landing = () => {
    return (
        <div className='custom-carousel'>
            <div id="carouselExampleIndicators" className="carousel  slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner carousel-custom ">
                    <div className="carousel-item  active">
                        <img className="d-block img-fluid w-100 carousel-image " style={{ height: "500px", width: "500px", objectFit: "cover" }} src={themeBack} alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item  ">
                        <img className="d-block img-fluid w-100 carousel-image " style={{ height: "500px", width: "500px", objectFit: "cover" }} src={themeBack2} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>...</h5>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img className="d-block img-fluid w-100 carousel-image" style={{ height: "500px", width: "500px", objectFit: "cover" }} src={themeBack3} alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Are you Ready to win in Business?</h5>
                            <p>In the competitve </p>
                            <button className={css.learnmoreBtn}>LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div>
                <center>
                <h1 style={{}}><b>About </b> Company </h1>

                <p>
                    Unique Design Consultant (UDC) is an India-based<br/> Bitrix24 Gold Partner delivering CRM, ERP, and business <br/>automation solutions globally. 
                    We specialize in
                <br/> <b>Bitrix24, Zoho, Odoo, and ZWCAD</b>,
                     
                </p>
                </center>
                <div className={css.textSectionUDC}>
                 <p>
                    <h3>DEEPAK KUMAR CEO OF COMPANY</h3>
                    As a trusted India-based Bitrix24 Gold Partner, we specialize in delivering custom CRM setups, workflow automation, business process optimization, and system integrations tailored to every industry.<br/><br/> With a strong focus on digital transformation, we help businesses automate daily operations, enhance team productivity, improve customer experience, and scale faster with smart, efficient, and fully connected systems. Our team provides custom development, cloud & on-premise deployment, API integrations, data migration, and 24×7 global support, ensuring a seamless technology experience from start to finish.<br/><br/> Whether you are a startup, SME, or enterprise, UDC empowers your business with reliable CRM–ERP solutions, advanced automation, and long-term support to achieve measurable growth and operational excellence.
                 </p>
                 <h1>530
                     <span style={{fontSize:"30px" ,color:"#007bff"}}>Clients</span>   
                 </h1>
                
                </div>
            </div>

              {/* { 3 section of Landing} */}

           <div className={css.threeSectionLanding}>
             <div>
                <h1>
                    9 
                 <span>Years</span>
                </h1>
             <button>SIGN UP</button>
             </div>

            </div>
        </div>
    )
}

export default Landing