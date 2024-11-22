


const TicketCard = () => {
  return (
    <>
    <div className="grid grid-cols-3 gap-4">
            <div className="max-w-sm  overflow-hidden shadow-lg">
            {/* Top Section */}
            <div className="bg-gray-5 p-6 relative">
                <div className="flex justify-between items-start">
                <div className="text-white text-sm">
                    <p>WADR GALA</p>
                    <p className="opacity-80">6TH - 8TH</p>
                    <p className="opacity-80">NOVEMBER</p>
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
                    <h2 className="text-xl font-bold">Normal Pass</h2>
                    <p className="text-gray-600 text-sm">FULL ACCESS TO ALL 3 DAYS</p>
                </div>
                <div>
                    <p className="text-blue-600 font-bold">KES.</p>
                    <p className="text-blue-600 text-2xl font-bold">4,000</p>
                </div>
                </div>

                {/* Details */}
                <div className="text-sm text-gray-600 mb-6">
                <p>Full 3-day access to all conference-related areas</p>
                <p>+ T-shirt + snacks & coffee/water all day</p>
                <p>Your ticket also grants access to all conference areas at</p>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-purple-1 text-white py-3 px-6  hover:bg-purple transition-colors">
                add to cart
                </button>
            </div>
            </div>

            <div className="max-w-sm bg-gray-1  overflow-hidden shadow-lg">
            {/* Top Section */}
            <div className="bg-gray-5 p-6 relative">
                <div className="flex justify-between items-start">
                <div className="text-white text-sm">
                    <p>WADR GALA</p>
                    <p className="opacity-80">6TH - 8TH</p>
                    <p className="opacity-80">NOVEMBER</p>
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
            <div className="bg-gray-1 p-6">
                <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-bold">Group Ticket(5)</h2>
                    <p className="text-gray-600 text-sm">FULL ACCESS TO ALL 3 DAYS</p>
                </div>
                <div>
                    <p className="text-blue-600 font-bold">KES.</p>
                    <p className="text-blue-600 text-2xl font-bold">18,000</p>
                </div>
                </div>

                {/* Details */}
                <div className="text-sm text-gray-600 mb-6">
                <p>Full 3-day access to all conference-related areas</p>
                <p>+ T-shirt + snacks & coffee/water all day</p>
                <p>Your ticket also grants access to all conference areas at</p>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-purple-1 text-white py-3 px-6  hover:bg-purple transition-colors">
               Buy Ticket
                </button>
            </div>
            </div>
    </div>
    </>
  );
};

export default TicketCard;