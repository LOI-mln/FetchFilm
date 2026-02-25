import { useState } from 'react';

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative">
      {/* Bouton de recherche */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-gray-300 transition-colors"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </button>

      {/* Input de recherche (apparaît au clic) */}
      {isOpen && (
        <div className="absolute top-12 right-0 bg-gray-900 border border-gray-700 rounded-lg p-4 shadow-xl z-50 min-w-[300px]">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Mot recherché :", searchTerm);
            }}
            className="flex flex-col gap-3"
          >
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un film..."
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white"
              autoFocus
            />
            
            <p className="text-sm text-gray-400">
              Vous cherchez : <span className="text-primary font-semibold">{searchTerm}</span>
            </p>

            <button 
              type="submit"
              className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Rechercher
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SearchBar;