import Layout from '../components/layout';
import TicketCard from '../components/ticket';
import styles from '../styles/home.module.scss'

const Tickets = () => {
  return (
    <>
    <Layout>
      <main>
        <section className={`  bg-purple py-8`}>
            <div className={` ${styles.hero} `}>
                <div className="hero-body container p-5 md:p-24">
                  <div className="border-l-8 border-yellow p-5 md:px-20 md:py-6">
                    <h1 className={` ${styles.title} text-white  `}>
                    One Ticket , 3 days of Networking</h1>

                    <p className={ `${styles.text} text-white md:w-4/5 mt-2 md:mt-4 `  }> 
                    Full 3-day access to all conference related areas + General party invite + snacks & coffee/water all day.
                    Your ticket also grants access to all conference areas at Women Law Makers KE.
                    </p>
                    {/* div flex buttons around */}
                  
                  </div>
                </div>
            </div>              
        </section>

        {/* ticket types section */}
        <section className='bg-white py-12 px-4 container mx-auto'>
          <TicketCard/>

        </section>
      </main>
    </Layout>
    </>
  )
}

export default Tickets