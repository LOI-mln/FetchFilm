import { useState } from 'react';

function MovieSearchBar({ movies, onSearch }) {
  // Créez les variables d'états nécessaires à la recherche et à l'affichage des suggestions
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Suggestions calculées pendant le rendu (plus performant pour du filtrage local)
  const suggestions = searchTerm.length >= 2 
    ? movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase())
      ).slice(0, 5)
    : [];

  const showSuggestionsDropdown = showSuggestions && searchTerm.length >= 2 && suggestions.length > 0;

  const handleSelect = (movie) => {
    setSearchTerm(movie.title);
    setShowSuggestions(false);
    // TODO: Action lors de la sélection
    onSearch(movie);
  };

  // Quand la zone de recherche reçoit le focus, si elle comporte au moins 2 caractères
  // ouvrez la fenêtre de suggestions
  const handleFocus = () => {
    if (searchTerm.length >= 2) {
      setShowSuggestions(true);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input 
          type="text" 
          placeholder="Rechercher un film..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={handleFocus}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)} // Délai pour permettre le clic sur une suggestion
          className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-primary text-white"
        />
        <svg 
          className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" 
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
      </div>

      {/* TODO: Dropdown de suggestions */}
      {showSuggestionsDropdown && (
        <div className="absolute w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-2xl z-50 overflow-hidden">
          {suggestions.map((movie) => (
            <button
              key={movie.id}
              onClick={() => handleSelect(movie)}
              className="w-full flex items-center p-3 hover:bg-gray-700 transition-colors text-left border-b border-gray-700 last:border-0"
            >
              <img 
                src={movie.poster} 
                alt={movie.title} 
                className="w-10 h-14 object-cover rounded mr-3"
              />
              <div>
                <h4 className="text-white font-semibold text-sm line-clamp-1">{movie.title}</h4>
                <p className="text-gray-400 text-xs">{movie.year} • {movie.genre}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieSearchBar;
