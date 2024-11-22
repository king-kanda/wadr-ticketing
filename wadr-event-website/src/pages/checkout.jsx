import { FaMinus, FaPlus } from 'react-icons/fa';
import Layout from '../components/layout';
import PaystackPop from '@paystack/inline-js'

const Checkout = () => {


  const testPayment = (e) => {

    e.preventDefault()

    const data = {
      "status": true,
      "message": "Authorization URL created",
      "data": {
        "authorization_url": "https://checkout.paystack.com/nkdks46nymizns7",
        "access_code": "nkdks46nymizns7",
        "reference": "nms6uvr1pl"
      }
    }

    const popup = new PaystackPop()
    popup.resumeTransaction(data.data.access_code)

  }

  

  return (
    <>
     <Layout> 
      <main className='grid grid-cols-3 gap-8 py-12 px-12 container g-gary-1' >
        <section className="tickets-in-cart col-span-2">

          <h3 className='font-bold text-2xl font-poppins '>
            Cart Items (2)
          </h3>
         
         <div className="card-older my-6 bg-gray px-2 py-2 rounded-sm">
          <div className="flex items-center gap-6">
            <div className="img-block h-24 w-24 bg-gray-4 rounded-sm">

            </div>
            <div className="info-block">
              <h4 className='font-semibold text-xl'>
                Normal Pass
              </h4>
              <p>
                KES 4000
              </p>
              <div className="flex items-center bg-gray-100 rounded-lg my-2">
                <button 
                  // onClick={decrement}
                  className="p-1.5 hover:bg-gray-200 rounded-l-lg transition-colors "
                  aria-label="Decrease quantity"
                >
                  <FaMinus size={9} className="text-blue-600" />
                </button>
                
                <span className="w-8 text-center font-semibold border">
                 2
                </span>
                
                <button 
                  // onClick={increment}
                  className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors "
                  aria-label="Increase quantity"
                >
                  <FaPlus size={9} className="text-blue-600" />
                </button>
              </div>
            </div>
          </div>
         </div>


        </section>
        <section className="checkoout col-spa-1">

          {/* we'll have a formwith the ticket buyers name and if the tickets in card are plus two we get both details  */}
          {/* group tickets will cpature the email address of the ticket buyer and another parties email adress and the rest of the teams names */}
          {/* ticket buyer is the supposed to share the tickets to each member of the group */}
          {/* wecard have a normal ticket and a group ticket in the cart together */}

          <h3 className='font-bold text-2xl '>
            Checkout Details
          </h3>
          <span className='italic text-gray-5 text-sm w-1/3'>
            Please enter your name and email address to receive your tickets , if you are buying a group ticket enter your friends names too. 
          </span>

          <div className="form-section py-4">
              <form action=""
              onSubmit={testPayment}
              >
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium ">Name</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-purple-1 focus:border-purple-1 block w-full p-2.5" placeholder="name@womeninadr.com" required />
                </div>
                
                {/* button */}
                <button 
                type="submit" 
                className="text-white bg-purple w-full font-medium rounded-lg text-sm  px-5 py-2.5 text-center">
                  Proceed to pay 4500
                </button>
              </form>
          </div>

        </section>
      </main>

     </Layout>
    </>
  )
}

export default Checkout