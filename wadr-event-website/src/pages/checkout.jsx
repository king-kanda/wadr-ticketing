import { MdDelete } from "react-icons/md";
import Layout from '../components/layout';
import PaystackPop from '@paystack/inline-js'
import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { decrement } from '../cart/cartSlice';

const Checkout = () => {
  
  const [loading , setLoading ] = useState(false)
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const cart = useSelector((state)=>state.cart.items)
  const dispatch = useDispatch()
  
  const getTotalPrice = () => {
    return cart.reduce((total, cartItem) => total + cartItem.price, 0);
  }


  const initiatePayment = async(e) => {

    e.preventDefault()
    setLoading(true)
    try {
      
        const response = await fetch ('http://localhost:8000/api/make-payment',{
        method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ // Use JSON.stringify()
          name: name,
          email: email,
          // total : getTotalPrice()
      })

      })
      const data = await response.json()
      const popup = new PaystackPop()
      popup.resumeTransaction(data.data.access_code)

      setLoading(false)

    } catch (error) {
        setLoading(false)
        console.log('error' , error)
    } 

  }


  

  return (
    <>
     <Layout> 
      <main className='grid grid-cols-3 gap-8 py-12 px-12 container g-gary-1' >
        <section className="tickets-in-cart col-span-2">

          <h3 className='font-bold text-2xl font-poppins '>
            Cart Items ({cart.length})
          </h3>
         
         {cart.map((cartItem)=>(
             <div key={cartItem.id} className="card-older my-6 bg-gray px-2 py-2 rounded-sm">
             <div className="flex items-center gap-6">
               <div className="img-block h-24 w-24 bg-gray-4 rounded-sm">
   
               </div>
               <div className="flex items-start justify-between w-full">
                  <div className="info-block">
                    <h4 className='font-semibold text-xl'>
                    {cartItem.ticket_type}
                    </h4>
                    <p className='text-xs itallicx'>
                    {cartItem.description}
                    </p>
                    <p>
                    KES {cartItem.price}
                    </p>
                    
                  </div>
                  <div>
                    <button onClick={()=>dispatch(decrement(cartItem))} >
                      <MdDelete className="text-red h-6 w-6" />
                    </button>
                  </div>
               </div>
             </div>
            </div>
         ))}
        


        </section>
        <section className="checkoout col-spa-1">
          <h3 className='font-bold text-2xl '>
            Checkout Details
          </h3>
          <span className='italic text-gray-5 text-sm w-1/3'>
            Please enter your name and email address to receive your tickets , if you are buying a group ticket enter your friends names too. 
          </span>

          <div className="form-section py-4">
              <form action="POST"
              onSubmit={initiatePayment}
              >
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium ">Name</label>
                  <input type="name" id="name" className="bg-gray-50 border border-gray-5 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required 
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-purple-1 focus:border-purple-1 block w-full p-2.5" placeholder="name@womeninadr.com" required 
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                
                {/* button */}
                <button 
                type="submit" 
                className="text-white bg-purple w-full font-medium rounded-lg text-sm  px-5 py-2.5 text-center">
                {loading ? "Initiating ..." : `Pay KES ${getTotalPrice()}`}
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