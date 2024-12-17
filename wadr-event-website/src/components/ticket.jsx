import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../cart/cartSlice";
import { useEffect, useState } from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { NavLink } from "react-router";


const TicketCard = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [tickets, setTickets] = useState([]);

  const isInCart = (ticketId) => {
    return cart.some((cartItem) => cartItem.id === ticketId);
  };

  const handleCart = (ticket) => {
    const ticketId = ticket.id;

    if (isInCart(ticketId)) {
      dispatch(decrement(ticket));
    } else {
      dispatch(increment(ticket));
    }
  };

  const getTickets = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/ticket-types");
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="max-w-sm overflow-hidden shadow-lg flex flex-col h-full"
          >
            {/* Top Section */}
            <div className="bg-gray-5 p-6 relative ">
              <div className="flex justify-between items-start">
                <div className="text-white text-sm">
                  <p>WADR GALA</p>
                  <p className="opacity-80">13TH - 16TH</p>
                  <p className="opacity-80">January</p>
                </div>
              </div>

              {/* Diamond SVG and Get Your Ticket */}
              <div className="mt-8 flex items-center justify-between">
                <svg
                  viewBox="0 0 100 100"
                  className="w-20 h-20 text-white stroke-current"
                >
                  <path
                    d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
                    fill="none"
                    strokeWidth="2"
                  />
                  <path
                    d="M50 10 L50 90"
                    fill="none"
                    strokeWidth="2"
                  />
                  <path
                    d="M10 30 L90 30"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
                <div className="text-right">
                  <p className="text-sm font-bold text-white">GET YOUR</p>
                  <p className="text-cyan-300 text-xl font-bold">TICKET</p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-white p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold">{ticket.ticket_type}</h2>
                  <p className="text-gray-600 text-sm">{ticket.description}</p>
                </div>
                <div>
                  <p className="text-blue-600 font-bold">KES.</p>
                  <p className="text-blue-600 text-2xl font-bold">{ticket.price}</p>
                </div>
              </div>

              {/* Details */}
              <div className="text-sm text-gray-600 mb-6">
                <p>{ticket.details}</p>
              </div>

              {/* Add to Cart Button */}
              <div className="flex items-center justify-between gap-4 mt-auto">
                <button
                  onClick={() => handleCart(ticket)}
                  className="w-full bg-purple-1 text-white py-3 px-6 hover:bg-purple transition-colors"
                >
                  {isInCart(ticket.id) ? "Remove from Cart" : "Add to Cart"}
                </button>

                {isInCart(ticket.id) && (
                  <NavLink to='/tickets/checkout' className="relative inline-block">
                    <button className="px-3 py-3 bg-white border border-2 border-purple text-purple rounded-full">
                      <MdOutlineShoppingCartCheckout />
                    </button>
                    <span className="absolute top-2 right-2 transform translate-x-1/2 -translate-y-1/2 bg-yellow text-white text-xs font-bold px-2 py-1 rounded-full">
                      {cart.filter((item) => item.id === ticket.id).length}
                    </span>
                  </NavLink >
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TicketCard;
