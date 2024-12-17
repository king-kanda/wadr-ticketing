import Footer from '../components/footer';
import MyForm from '../components/form';
import Navbar from '../components/navbar';
import styles from '../styles/contact.module.scss'
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <>
     <Helmet>
        <title>Contact Us - Get in Touch with Women in ADR</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow"/>
        <meta name="keywords" content="Women in ADR , Women in ADR Kenya , ADR Kenya , Empowering Women in ADR, Gender Equality, ADR Training, Women's Advocacy"/>
        <meta name="description" content="Reach out to Women in ADR for inquiries, collaborations, or support. We're here to connect and promote diversity in Alternative Dispute Resolution (ADR). Contact us today!" />
        
        {/* <!-- Social Media Meta Tags --> */}
        <meta property="og:title" content="Women in ADR" />
        <meta property="og:description" content="Women in Alternative Dispute Resolution" />
        <meta property="og:image" content="https://res.cloudinary.com/namiri/image/upload/v1689582997/Group_1_1_wzakeg.png" />
        <meta property="og:url" content="https://womeninadr.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Women In ADR" />
        <meta name="twitter:description" content="WADR is dedicated to paving the way for women from diverse professional and cultural backgrounds to excel in the field of Alternative Dispute Resolution (ADR). We believe that by preparing and positioning women in ADR on both national and international platforms, we can create a more inclusive and dynamic field of dispute resolution" />
        <meta name="twitter:image" content="https://res.cloudinary.com/namiri/image/upload/v1689582997/Group_1_1_wzakeg.png" />
        {/* Add more meta tags or other SEO elements as needed */}
      </Helmet>
    <main>
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <section className={` ${styles.mainBody} `}>
      <div className={` container md:grid grid-cols-2 gap-5 `}>
          
          <div className="bodySt p-2 md:p-8 ">
            <p className={ `${styles.footerText}` }> 
              Home / Contact
            </p>
            <h1 className={` ${styles.footerTT} `}>
              Together, we make a lasting impact
            </h1>
            <p className={` ${styles.footerText} `}>
            Submit the following form and our team will be in touch with you as soon as possible. Alternatively, you can contact us via email through our mailbox: <span className='text-yellow font-bold underline underline-offset-8'> events@womeninadr.com </span> 
            </p>
            <div className="location mt-7">
                <p className={ `${styles.footerText} underline` }> 
                OR visit:
                </p>
                <h4 className="locatt font-bold mt-3 text-yellow underline">
                    Our Offices
                </h4>
                <p className={` ${styles.footerText} `}>
                    WuYi Plaza, Galana Road,
                    <br/>
                    Kilimani. Nairobi, Kenya
                    <br/>
                    Postal Address: 22568 - 00100
                </p>
            </div>
          </div>
          <div className="contactForm my-8 md:my-0 p-4 md:p-8  ">
              <MyForm/>
          </div>
          
      </div>
      </section>
    </main>
    <Footer></Footer>
    </>
  )
}

export default Contact