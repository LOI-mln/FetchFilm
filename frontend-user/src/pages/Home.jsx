import { useState } from 'react';
import MovieHero from '../components/movies/MovieHero';
import MovieList from '../components/movies/MovieList';
import MovieFilter from '../components/movies/MovieFilter';
import Footer from '../components/layout/Footer';
import Navbar from '../components/common/Navbar';
import moviesData from '@data/movies.json';

function Home() {
  // 1-Chargez allMovies avec moviesData
  const [allMovies] = useState(moviesData);
  // 2-Initialisez filteredMovies avec allMovies
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (movie) => {
    // Affiche dans la console le film sélectionné
    console.log(movie);
  };

  const addToCart = (movie) => {
    if (!cartItems.find(item => item.id === movie.id)) {
      setCartItems(prev => [...prev, movie]);
    }
  };

  const removeFromCart = (movieId) => {
    setCartItems(prev => prev.filter(item => item.id !== movieId));
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar 
        movies={allMovies} 
        onSearch={handleSearch} 
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
      />
      
      {allMovies[0] && (
        <MovieHero 
          movie={allMovies[0]} 
          onAddToCart={addToCart} 
        />
      )}

      <div className="container mx-auto px-4 -mt-20 relative z-10 pb-12 space-y-8">
        <MovieFilter 
          movies={allMovies} 
          onFilter={setFilteredMovies} 
        />
        
        <MovieList 
          title="Films disponibles" 
          movies={filteredMovies} 
          onAddToCart={addToCart}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Home;