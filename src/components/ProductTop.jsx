import css from './ProductTop.module.css'
import "@fontsource-variable/montserrat";

const ProductTop = ({ data}) => {
    return (
        <>
            {/* Product=>Bitrix dropdown pages section 1 backgroun Image */}
            <section className={css.productSection1}>
                <div className={css.leftSection1}>
                    <div>
                        <span>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="34" height="34" rx="17" fill="url(#paint0_linear_5551_1199)"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M17.288 25.011c4.193 0 7.593-3.421 7.593-7.642 0-4.22-3.4-7.641-7.593-7.641-4.194 0-7.594 3.42-7.594 7.641 0 4.22 3.4 7.642 7.594 7.642zm-1.214-13.363a.212.212 0 0 0-.399 0l-.755 2.055a2.131 2.131 0 0 1-1.256 1.263l-2.042.761a.214.214 0 0 0 0 .401l2.042.76c.582.217 1.04.679 1.256 1.264l.755 2.056c.069.186.33.186.399 0l.756-2.056a2.131 2.131 0 0 1 1.255-1.263l2.043-.76a.214.214 0 0 0 0-.402l-2.043-.76a2.131 2.131 0 0 1-1.255-1.264l-.756-2.055zm4.34 5.94a.122.122 0 0 0-.23 0l-.438 1.188c-.124.338-.389.605-.725.73l-1.18.44a.124.124 0 0 0 0 .23l1.18.44c.336.126.6.392.725.73l.437 1.188c.04.108.19.108.23 0l.437-1.188c.124-.338.39-.604.725-.73l1.18-.44a.124.124 0 0 0 0-.23l-1.18-.44a1.232 1.232 0 0 1-.725-.73l-.437-1.188z" fill="#fff"></path><path d="M28.213 17.834c.746.032 1.332.67 1.22 1.412-.9 5.937-5.995 10.485-12.146 10.485C10.501 29.731 5 24.195 5 17.366 5 10.536 10.501 5 17.287 5c3.233 0 6.174 1.256 8.368 3.31.547.514.48 1.381-.087 1.873-.567.49-1.416.418-1.978-.077a9.509 9.509 0 0 0-6.303-2.38c-5.291 0-9.58 4.316-9.58 9.641s4.289 9.641 9.58 9.641c4.693 0 8.597-3.395 9.42-7.878.136-.741.758-1.329 1.506-1.296z" fill="#fff"></path><defs><linearGradient id="paint0_linear_5551_1199" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse"><stop stop-color="#8B5BFF"></stop><stop offset="1" stop-color="#D575FF"></stop></linearGradient></defs></svg>
                        </span>
                        <span>Free AI Assistant</span>
                    </div>
                    <h1>
                        {data.h}
                    </h1>
                    <p>

                        {data.p}
                    </p>
                    <button className={css.section1Button}>
                        Get Started
                    </button>
                </div>


                <div className={css.rightSection1}>
                    <img width="100%" src={data.img} alt="bitrix screenshot" />
                </div>


            </section>

            {/* Product=>Bitrix dropdown pages section 2 */}
            <section className={css.productSection2}>
                <h1>{data.h_2}</h1>
                <p>{data.p_2}</p>
                <div className={css.section2ImgContainer}>
                    <img src={data.img_2} />
                </div>
                <button>
                    GET STARTED
                </button>
            </section>

            {/* Product=>Bitrix dropdown pages section 3 */}
            <section className={css.productSection3}>
                <div className={css.section3Left}>
                    <h1>{data.h_3}</h1>
                    <p>{data.p_3}</p>
                    <button>{data.btn}</button>
                </div>

                <div className={css.section3ImgContainer}>
                    <img src={data.img_3}></img>
                </div>
            </section>

                           {/* Section 4 */}
             <section className={css.productSection3}>

                <div className={css.section3ImgContainer}>
                    <img src={data.img_4}></img>
                </div>

                <div className={css.section3Left}>
                    <h1>{data.h_4}</h1>
                    <p>{data.p_4}</p>
                    <button>{data.btn_1}</button>
                </div>
                  </section>

                 {/* Section-5 */}
                      <section className={css.productSection3}>
                <div className={css.section3Left}>
                    <h1>{data.h_5}</h1>
                    <p>{data.p_5}</p>
                    <button>{data.btn_2}</button>
                </div>

                <div className={css.section3ImgContainer}>
                    <img src={data.img_5}></img>
                </div>
            </section>

               {/* {Section-6} */}
                <section>
                    <div className={css.productSection6}>

                        <div>
                      <h1>{data.h_6}</h1>
                      <p>{data.p_6}</p>  
                      </div>

                      <div className={css.section6ImgContainer}>
                        <img src={data.img_6} />
                      </div>
                      
                     
                        <button className={css.section6Btn}>GET STARTED</button>
                        </div>   
                      

                    
                    </section>
            
        </>

    )
}

export default ProductTop