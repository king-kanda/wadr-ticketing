import styles from '../styles/nav.module.scss'

import { FaLinkedinIn , FaTwitter , FaInstagram , FaFacebookF} from 'react-icons/fa'

const Social = () => {
  return (
    <>
        <section className="bg-purple-1 p-6">
            <div className="container p-5">
                <div className="md:flex items-center flex-wrap justify-around">
                    <div className="w-full lg:w-6/12">
                        <h2 className={`text-white text-center md:text-start ${styles.heading}`}>Stay Connected.</h2>
                        <p className={`mt-2 mb-4 text-white md:w-3/4 ${styles.leading} text-center md:text-start `}>
                           Feel free to contact us via email should you have any questions or concerns. 
                        </p>
                    </div>
                    <div className={` text-center ${styles.Famcy} `}>
                       <a href="https://docs.google.com/forms/d/e/1FAIpQLScIgSf8A7k9EuwCzFDUcG80XzfvEvXrkcw5qlxZTecOuZ9Z3Q/viewform">
                            <span className={` ${styles.join} px-8 py-4 bg-yellow text-white`}>
                            Become a Member.
                            </span>
                        </a> 
                            
                        
                    </div>
                </div>
                {/* buttons */}
                <div className={`socialButtons mt-6 px:0 md:px-16`}>
                    <div className="flex items-center md:flex-wrap justify-around">
                        <div className={` ${styles.icons1} `}>
                           <a href="https://www.linkedin.com/company/women-in-adr/">
                            <button  className='border-2 border-yellow px-2 md:px-10 py-3'>
                                    <p className="inline-flex items-center justify-between">
                                        <span className='px-3 icon'>
                                            <FaLinkedinIn/>
                                        </span>
                                        <span className='hidden md:block'>
                                            LINKEDIN
                                        </span>
                                    </p>
                                </button>
                           </a>
                        </div>
                        <div className={` ${styles.icons1} `}>
                            <a href="https://twitter.com/womeninadr?t=381J79x1wbGDs-0BrvU7cQ&s=08">
                                <button className='border-2 border-yellow px-2 md:px-10 py-3'>
                                    <p className="inline-flex items-center justify-between">
                                        <span className='px-3'>
                                            <FaTwitter/>
                                        </span>
                                        <span className='hidden md:block'>
                                            TWITTER
                                        </span>                                  
                                    </p>
                                </button>
                            </a>
                        </div>
                        <div className={` ${styles.icons1} `}>
                           <a href="https://instagram.com/women_in_adr?igshid=MzRlODBiNWFlZA==">
                            <button className='border-2 border-yellow px-2 md:px-10 py-3'>
                                    <p className="inline-flex items-center justify-between">
                                        <span className='px-3'>
                                            <FaInstagram/>
                                        </span>
                                        <span className='hidden md:block'>
                                            INSTAGRAM
                                        </span> 
                                        
                                    </p>
                                </button>
                           </a>
                        </div>
                        <div className={` ${styles.icons1} `}>
                            <a href="https://www.facebook.com/WomeninADR?mibextid=ZbWKwL">
                                <button 
                                className='border-2 border-yellow px-2 md:px-10 py-3'>
                                    <p className="inline-flex items-center justify-between">
                                        <span className='px-3'>
                                            <FaFacebookF/>
                                        </span>
                                        <span className='hidden md:block'>
                                            FACEBOOK
                                        </span> 
                                        
                                    </p>
                                </button>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Social