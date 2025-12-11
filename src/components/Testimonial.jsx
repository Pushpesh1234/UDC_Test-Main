import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

const testimonials = [
  {
    
    quote:
      "UDC has done a commendable job with the Bitrix24 and social media integration. The automation setup is functioning well, with only minor tweaks needed. We’re confident these will be addressed promptly once the Bitrix24 email service request is completed. Overall, a reliable and efficient collaboration so far.",
    name: "Manishchandra Rastogi",
    role: "Rastogi Consultant",
  },

  {
    
    quote:
        "Unique Design Consultant has transformed the way our business operates on Bitrix24. Their team set up our CRM, automation flows, and workspace structure with exceptional clarity and precision. We now manage leads, projects, and communication far more efficiently. Highly recommended!.",
    name:"Sourav Kumar",
    role:"Soltex Trade Private Limited",
  },
{
    
    quote:
        "Our experience with Unique Design Consultant for Bitrix24 implementation has been outstanding. They not only configured the CRM and pipelines but also automated our entire follow-up and task workflows. The team understood our business needs deeply and delivered a perfectly tailored Bitrix24 setup. Their support has been timely, transparent, and professional throughout",
    name:"Manoj Korani",
    role:"Holidaychacha",
  },

  {
    
    quote:
        "Deepak kumar and Nikhil Delivered seamless Bitrix24 setup for our business. From CRM customization to automation, everything works flawlessly. Great service and excellent professionalism.",
    name:"Gaurav Verma",
    role:"vermalaminate",
  },

  {
    
    quote:
        "UDC is one of the most reliable partners we’ve worked with for Bitrix24. They guided us through implementation, customization, integrations, and automation with complete commitment. Their expertise helped us streamline operations and improve our team’s performance significantly.",
    name:"Mohd Yousuf",
    role:"JDS ELite Properties",
  },
{
  
    quote:
        "The support from Unique Design Consultant has been top-class. Even after implementation, they were quick to respond, quick to fix, and always available when we needed guidance. Truly dependable.",
    name:"Sai Kiran",
    role:"saininnovation",
  },
  {
    
    quote:
      "Good and Their expertise in implementing Bitrix24 was truly impressive. The entire process was smooth, and the results have transformed how we manage our operations.",
    name: "Sanskaar",
    role: "CorAge",
  },
  {
    
    quote:
      "Working with this team was an absolute pleasure. They understood our requirements perfectly and delivered beyond expectations. Highly recommended",
    name: "Raj Mohan",
    role: "Hirebuild",
  },

];



const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="testimonial-wrapper">
      <h3 className="small-title">CLIENTS</h3>
      <h2 className="big-title">TESTIMONIAL</h2>

      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index}>
            <div className="testimonial-box">
              <div className="testimonial-left">
                
              </div>

              <div className="testimonial-right">
                <div className="quote-symbol">❝</div>
                <p className="testimonial-para">{t.quote}</p>

                <h3 className="client-name">{t.name}</h3>
                <p className="client-role">{t.role}</p>

                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;