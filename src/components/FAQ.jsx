import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Collapse from 'bootstrap/js/dist/collapse';
import { useState, useEffect } from 'react';

const Faq = ({ faq }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    useEffect(() => {
        if (!faq || !Array.isArray(faq)) return;
        const seen = new Set();
        faq.forEach(item => {
            if (!item.unique_1 || !item.unique_2) return;
            if (seen.has(item.unique_1) || seen.has(item.unique_2)) console.warn('Duplicate FAQ id detected:', item);
            seen.add(item.unique_1);
            seen.add(item.unique_2);
        });
    }, [faq]);

    const toggle = (index) => setOpenIndex(prev => prev === index ? -1 : index);
    return (
        <>                    
        <div className='w-75 mx-auto rounded-5 bg-white mb-5'>
           <center style={{fontSize:"40px",marginBottom:"5px",marginTop:"40px",fontWeight:"bold"}}>
                                FAQ
                              </center>
            <div className="accordion w-75 mx-auto py-5 " id="accordionExample ">
                {
                    faq.map((Itemfaq,index) => (                  
                        <div className="accordion-item mb-5 rounded-5">
                            <h2 className="accordion-header" id={Itemfaq.unique_1}>
                                <button
                                className={`accordion-button border rounded-5 ${openIndex === index ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggle(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={Itemfaq.unique_2}
                            >
                              <strong> {Itemfaq.query}</strong>
                            </button>
                            </h2>

                            <div
                                id={Itemfaq.unique_2}
                                 className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                                
                            >
                                <div className="accordion-body rounded-1">
                                    {Itemfaq.answer}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
        </>
    )
}

export default Faq;