import { useState } from 'react';
import Button from '../common/Button';
import MovieDescription from './MovieDescription';


function MovieCard({ movie, onAddToCart }) {
  const [likes, setLikes] = useState(() => Math.floor(Math.random() * 100));
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  // Couleurs par genre
  const genreColors = {
  'Action': 'bg-red-500',
  'Comédie': 'bg-yellow-500',
  'Drame': 'bg-blue-500',
  'Science-Fiction': 'bg-purple-500',
  'Horreur': 'bg-orange-500',
  'Thriller': 'bg-gray-500'
  };

  return (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105">
      
      {/* Image principale */}
      <div className="relative aspect-[2/3]">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="w-full h-full object-cover" 
        />
        
        {/* Badge de note */}
        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded">
          <span className="text-yellow-400 font-bold text-sm">
            ⭐ {movie.rating}
          </span>
        </div>

        {/* Badge de genre */}
        <div className={`absolute bottom-2 left-2 px-2 py-1 rounded ${genreColors[movie.genre] }`}>
          <span className="text-white font-bold text-sm">
            {movie.genre}
          </span>
        </div>
      </div>

      {/* Overlay au hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
        
        <div className="flex items-center space-x-3 mb-3 text-sm">
          <span className="text-green-400 font-semibold">
            {movie.rating}/10
          </span>
          <span className="text-gray-400">{movie.year}</span>
          <span className="text-gray-400">{movie.duration}min</span>
        </div>
        
        <MovieDescription description={movie.description} />
        
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            size="sm" 
            className="flex-1"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(movie);
            }}
          >
            ▶ Louer {movie.price}€
          </Button>

          <Button variant="outline" size="sm" className="flex-1">
            + Info
          </Button>

          <button 
            onClick={handleLike}
            className={`px-4 py-2 rounded transition-colors duration-300 flex items-center justify-center gap-2 ${
              isLiked ? 'bg-red-500 text-white' : 'bg-gray-700/80 text-gray-200 hover:bg-gray-600'
            }`}
          >
            {isLiked ? '❤️' : '🤍'} {likes}
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default MovieCard;