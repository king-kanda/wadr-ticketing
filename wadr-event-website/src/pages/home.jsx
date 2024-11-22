import { Link } from 'react-router';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import styles from '../styles/home.module.scss'


const About = () => {
  return (
    <>
      <Helmet>
        <title>WADR Gala Night</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="Women in ADR , Women in ADR Kenya , ADR Kenya , Empowering Women in ADR, Gender Equality, ADR Training, Women's Advocacy"/>
        <meta name="description" content="WADR empowers women in ADR through training, mentorship, and advocacy, promoting ADR as the global dispute resolution choice." />
        
        {/* <!-- Social Media Meta Tags --> */}
        <meta property="og:title" content="WADR Gala" />
        <meta property="og:description" content="Women in Alternative Dispute Resolution" />
        <meta property="og:image" content="https://res.cloudinary.com/namiri/image/upload/v1689582997/Group_1_1_wzakeg.png" />
        <meta property="og:url" content="https://womeninadr.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Women In ADR" />
        <meta name="twitter:description" content="Join us for the Women in Alternative Dispute Resolution (WADR) Gala, an evening dedicated to celebrating the achievements, resilience, and leadership of women in the field of Alternative Dispute Resolution (ADR). This grand occasion brings together trailblazers, visionaries, and advocates from diverse backgrounds to honor their contributions and inspire future generations." />
        <meta name="twitter:image" content="https://res.cloudinary.com/namiri/image/upload/v1689582997/Group_1_1_wzakeg.png" />


      
        
        {/* Add more meta tags or other SEO elements as needed */}
      </Helmet>
      <Layout>
          <main>
              <section className={`  bg-purple py-8`}>
                    <div className={` ${styles.hero} `}>
                    <div className="hero-body container p-5 md:p-24">
                      <div className="border-l-8 border-white p-5 md:px-20 md:py-6">
                        <h1 className={` ${styles.title} text-white  `}>
                        Empowering Women, Celebrating Excellence: WADR Gala 2024</h1>

                        <p className={ `${styles.text} text-white md:w-4/5 mt-2 md:mt-4 `  }> 
                        Join us for the
                        <span className='text-yellow font-bold'>
                          Women in Alternative Dispute Resolution (WADR </span>) Gala, an evening dedicated to celebrating the achievements, resilience, and leadership of women in the field of Alternative Dispute Resolution (ADR). This grand occasion brings together trailblazers, visionaries, and advocates from diverse backgrounds to honor their contributions and inspire future generations.
                        </p>
                        {/* div flex buttons around */}
                      
                      </div>
                    </div>
                    </div>

                    {/*  */}

                    <div className="brief">
                      <div className="container p-6 md:my-4 md:px-24">
                        <div className="md:grid grid-cols-2 gap-6 items-center">
                          <div className={`col-span-1 ${styles.aboutTt} ml-2 md:ml-24`}>
                              <h2 className={` text-purple bg-white py-2 px-6 lg:w-3/5 md:w-5/5 text-center `}>
                              Our Theme:
                              </h2>
                            <p className={` p-2 mt-6 text-white ${styles.abText}  md:w-3/3 `}>
                            &#34;Elevating Women, Advancing ADR&#34;
                            This year&lsquo;s theme underscores our commitment to fostering innovation, diversity, and collaboration within the ADR community.
                              </p>
                          </div>
                          <div className={`col-span-1 ${styles.aboutText} text-center md:text-end mt-10 md:my-0 md:p-2 `}>
                              <h3 className={` text-white text-xl `}>
                                Join us  <br /> <span className='text-yellow'> From December 13-14</span>
                              </h3>
                              <div className="btn-cont mt-4">
                                  <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScIgSf8A7k9EuwCzFDUcG80XzfvEvXrkcw5qlxZTecOuZ9Z3Q/viewform" >
                                    <button className='border border-white px-6 py-2 text-white font-bold mt-4'>
                                        Get Tickets
                                    </button>
                                  </a>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>              
              </section>


              <section className={` ${styles.aboutSec} `}>
                <div className="container p-6 md:py-12 md:px-24">
                  <div className="md:grid grid-cols-2 gap-5 px-4 mt-6 items-center
                  sm:flex-col-reverse
                  ">
                   
                     
                      <div className={` ${styles.abtText} `}>

                      <h1 className="text-2xl font-bold text-gray-800 mb-6">WADR Gala 2024</h1>
                      
                      <div className="flex items-center justify-between py-2">
                        <p className="font-semibold text-gray-600">Date:</p>
                        <span className="text-gray-800">Dec 13, 2024</span>
                      </div>

                      <div className="flex items-center justify-between py-2">
                        <span className="font-semibold text-gray-600">Time:</span>
                        <span className="text-gray-800">6:00 PM - 10:30 PM</span>
                      </div>

                      <div className="flex items-center justify-between py-2">
                        <span className="font-semibold text-gray-600">Venue:</span>
                        <span className="text-gray-800">Grand Regency Hall, City Center, Nairobi</span>
                      </div>

                      <div className="flex items-center justify-between py-2">
                        <span className="font-semibold text-gray-600">Dress Code:</span>
                        <span className="text-gray-800">Formal Attire / Black Tie</span>
                      </div>


                      <hr />
                         
                         <p className='w-full py-4'>
                            Women in Alternative Dispute Resolution (WADR) a non-profit organization launched on the 18th November 2020. Since it&apos;s inception, WADR had been paying way for Women from diverse professional and cultural backgrounds to excel in the field of ADR. Our vision is to empower and elevate women ADR practitioners, enabling them to become accomplished professionals in their fields. 
                            <br />
                         </p>
                         <br />
                        
                        
                      </div>
                      <div className="image-1 border-l-8 border-yellow ">
                        <img src='https://res.cloudinary.com/namiri/image/upload/v1689783442/Courtesy_Call_at_Njeri_Kariuki_s_zibwp6-min_ydrnkh-min_1_t7zyyl.jpg' className={` ${styles.Img1}  `} alt="women in adr"  />
                      </div>
                  </div>
                </div>
              </section>



            
              <section id="speakers" className={` ${styles.Team} p-5 md:p-12 mt-6 md:mt-2`}>
                <div className="container">
                  <div className="md:grid grid-cols-3 gap-5 px-3 md:px-6  items-start">
                    <div className="col-span-1 py-8">
                      <h2 className='text-purple text-2xl'>
                        Meet Our Speakers
                      </h2>
                      <p className='mt-4'>
                      The WADR Gala features distinguished speakers who bring expertise, innovation, and inspiration to the field of ADR. Their insights and experiences will empower and elevate women in ADR, making this event truly impactful.

                      </p>
                      <div className="btn-holder mt-7">
                          <Link to="/speakers">
                              <button className='bg-purple px-6 py-3 text-white'>
                                View all Speakers
                              </button>
                          </Link>
                      </div>
                    </div>
                    <div className="col-span-2">
                      {/* slider */}
                      {/* <Team/> */}
                    </div>
                  </div>
                  <div className="border-b border-dashed border-gray-5 my-8"></div>
                </div>
              </section>
          </main>
      </Layout>
    </>
  )
}

export default About