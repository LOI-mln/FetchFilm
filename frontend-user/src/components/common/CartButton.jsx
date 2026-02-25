import { useState } from 'react';

function CartButton({ cartItems, onRemoveFromCart }) {
  const [showCart, setShowCart] = useState(false);
  const cartCount = cartItems.length;

  const toggleShow = () => setShowCart(!showCart);

  return (
    <div className="relative flex">
      <button 
        onClick={toggleShow}
        className="relative hover:text-gray-300 transition p-2 focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>

        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold text-white">
            {cartCount}
          </span>
        )}
      </button>

      {/* Dropdown du panier */}
      {showCart && cartItems.length > 0 && (
        <div className="absolute right-0 mt-12 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-4 z-50">
          <h3 className="text-white font-bold mb-3 border-b border-gray-700 pb-2">Mon Panier</h3>
          <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
            {cartItems.map((item) => (
              <div 
                key={item.id}
                onDoubleClick={() => onRemoveFromCart(item.id)}
                className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded cursor-pointer group transition-all duration-200"
                title="Double-clic pour supprimer"
              >
                <img src={item.poster} alt={item.title} className="w-10 h-14 object-cover rounded shadow-md transition-transform group-hover:scale-105" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">{item.title}</h4>
                  <p className="text-xs text-primary font-bold">{item.price} €</p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] bg-red-500/10 text-red-500 px-1.5 py-0.5 rounded border border-red-500/20">
                    🗑️ x2
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-700 flex justify-between items-center text-sm">
            <span className="text-gray-400">Total</span>
            <span className="text-white font-bold text-lg">
              {cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)} €
            </span>
          </div>
          
          <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white py-2 rounded font-bold transition-all active:scale-95 shadow-lg shadow-primary/20">
            Passer à la location
          </button>
        </div>
      )}
    </div>
  );
}

export default CartButton;
